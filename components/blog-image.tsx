/* eslint-disable @next/next/no-img-element */
import Image, { type StaticImageData } from "next/image";
import adStats from "@/public/adstats.webp";
import editor from "@/public/blog-assets/unleaf/editor.webp";
import launchTweet from "@/public/blog-assets/unleaf/launch-tweet.webp";
import productHunt from "@/public/blog-assets/unleaf/product-hunt.webp";
import referrers from "@/public/blog-assets/unleaf/referrers.webp";
import traffic from "@/public/blog-assets/unleaf/traffic.webp";

const images: Record<string, StaticImageData> = {
  "/adstats.webp": adStats,
  "/blog-assets/unleaf/editor.webp": editor,
  "/blog-assets/unleaf/launch-tweet.webp": launchTweet,
  "/blog-assets/unleaf/product-hunt.webp": productHunt,
  "/blog-assets/unleaf/referrers.webp": referrers,
  "/blog-assets/unleaf/traffic.webp": traffic,
};

export default function BlogImage({ src, alt }: { src?: string | Blob; alt?: string }) {
  const image = typeof src === "string" ? images[src] : undefined;
  if (!image) {
    return <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" />;
  }
  return (
    <Image
      src={image}
      alt={alt ?? ""}
      sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 768px) 100vw, 768px"
      quality={90}
      loading="lazy"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
