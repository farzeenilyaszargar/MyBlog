import Image from "next/image";

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

export default function ArticleVideoWork() {
  return (
    <div className="not-prose my-8 columns-2 gap-2 sm:columns-3">
      {videoAssets.map((asset) => (
        <div
          key={asset.src}
          className="mb-2 break-inside-avoid overflow-hidden rounded-lg bg-[var(--card-bg)]"
          style={{ aspectRatio: asset.aspectRatio }}
        >
          <video
            src={asset.src}
            className="block h-full w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={asset.title}
          />
        </div>
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
