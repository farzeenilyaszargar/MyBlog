"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const videoAssets = [
  {
    src: "/video-assets/ad1",
    title: "SuperFlights reel",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/post1",
    title: "General post",
    aspectRatio: "1080 / 1350",
  },
  {
    src: "/video-assets/anim-3",
    title: "Motion study",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/anim-5-2",
    title: "Product animation",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/anim-6",
    title: "Launch motion",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/anim-ad-surfers",
    title: "Surfers motion ad",
    aspectRatio: "3840 / 2160",
  },
  {
    src: "/video-assets/nap-motion",
    title: "Nap motion cutout",
    aspectRatio: "540 / 360",
  },
];

function LazyVideo({ src, title, aspectRatio }: (typeof videoAssets)[number]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [allowAutoplay, setAllowAutoplay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }).connection;
    const updatePreferences = () => {
      setAllowAutoplay(!motionPreference.matches && !connection?.saveData);
    };
    const initialPreferences = globalThis.setTimeout(updatePreferences, 0);
    motionPreference.addEventListener("change", updatePreferences);
    connection?.addEventListener("change", updatePreferences);
    const cleanPreferences = () => {
      globalThis.clearTimeout(initialPreferences);
      motionPreference.removeEventListener("change", updatePreferences);
      connection?.removeEventListener("change", updatePreferences);
    };

    if (!("IntersectionObserver" in window)) {
      // Older browsers get manual playback rather than eager autoplay downloads.
      const fallback = globalThis.setTimeout(() => setHasEnteredViewport(true), 0);
      return () => {
        globalThis.clearTimeout(fallback);
        cleanPreferences();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
        }
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
      cleanPreferences();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const updatePlayback = () => {
      if (!isVisible || document.hidden) {
        video.pause();
      } else if (allowAutoplay) {
        void video.play().catch(() => {
          // Playback controls remain available if the browser blocks autoplay.
        });
      }
    };
    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [hasEnteredViewport, isVisible, allowAutoplay]);

  return (
    <div
      ref={containerRef}
      className="mb-2 break-inside-avoid overflow-hidden rounded-lg bg-[var(--card-bg)]"
      style={{ aspectRatio }}
    >
      {hasEnteredViewport ? (
        <video
          ref={videoRef}
          className="block h-full w-full object-contain"
          poster={`${src}-poster.webp`}
          controls
          muted
          loop
          playsInline
          preload="none"
          aria-label={title}
        >
          <source src={`${src}-optimized.mp4`} type="video/mp4" />
          <source src={`${src}-optimized.webm`} type="video/webm" />
        </video>
      ) : (
        <Image
          src={`${src}-poster.webp`}
          alt={title}
          width={540}
          height={Math.round(540 / (Number(aspectRatio.split(" / ")[0]) / Number(aspectRatio.split(" / ")[1])))}
          sizes="(max-width: 640px) 50vw, 256px"
          className="block h-full w-full object-contain"
          style={{ margin: 0 }}
        />
      )}
    </div>
  );
}

export default function ArticleVideoWork() {
  return (
    <div className="not-prose my-8 columns-2 gap-2 sm:columns-3">
      {videoAssets.map((asset) => (
        <LazyVideo key={asset.src} {...asset} />
      ))}
    </div>
  );
}
