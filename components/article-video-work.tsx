"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const videoAssets = [
  {
    src: "/video-assets/ad1.mp4",
    title: "SuperFlights reel",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/post1.mp4",
    title: "General post",
    aspectRatio: "1080 / 1350",
  },
  {
    src: "/video-assets/anim-3.mp4",
    title: "Motion study",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/anim-5-2.mp4",
    title: "Product animation",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/anim-6.mp4",
    title: "Launch motion",
    aspectRatio: "1080 / 1920",
  },
  {
    src: "/video-assets/anim-ad-surfers.mp4",
    title: "Surfers motion ad",
    aspectRatio: "3840 / 2160",
  },
];

function LazyVideo({ src, title, aspectRatio }: (typeof videoAssets)[number]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const fallback = globalThis.setTimeout(() => setIsNearViewport(true), 0);
      return () => globalThis.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mb-2 break-inside-avoid overflow-hidden rounded-lg bg-[var(--card-bg)]"
      style={{ aspectRatio }}
    >
      {isNearViewport ? (
        <video
          src={src}
          className="block h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={title}
        />
      ) : null}
    </div>
  );
}

export default function ArticleVideoWork() {
  return (
    <div className="not-prose my-8 columns-2 gap-2 sm:columns-3">
      {videoAssets.map((asset) => (
        <LazyVideo key={asset.src} {...asset} />
      ))}
      <div className="mb-2 break-inside-avoid overflow-hidden rounded-lg bg-white" style={{ aspectRatio: "540 / 360" }}>
        <Image
          src="/video-assets/nap-motion.gif"
          alt="Nap motion cutout"
          width={540}
          height={360}
          unoptimized
          className="block h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
