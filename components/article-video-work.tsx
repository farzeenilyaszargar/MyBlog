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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const fallback = globalThis.setTimeout(() => {
        setHasEnteredViewport(true);
        setIsVisible(true);
      }, 0);
      return () => globalThis.clearTimeout(fallback);
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
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const updatePlayback = () => {
      if (!isVisible || document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Some browsers can still block muted autoplay.
        });
      }
    };
    updatePlayback();
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [hasEnteredViewport, isVisible]);

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
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
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
