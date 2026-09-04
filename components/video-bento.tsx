import Image from "next/image";

const videoAssets = [
  {
    src: "/video-assets/ad1.mp4",
    title: "SuperFlights reel",
    className: "sm:row-span-2",
  },
  {
    src: "/video-assets/anim-ad-surfers.mp4",
    title: "Surfers motion ad",
    className: "sm:col-span-2",
  },
  {
    src: "/video-assets/anim-3.mp4",
    title: "Product animation",
    className: "",
  },
  {
    src: "/video-assets/anim-5-2.mp4",
    title: "Interface animation",
    className: "",
  },
  {
    src: "/video-assets/anim-6.mp4",
    title: "Launch motion",
    className: "sm:row-span-2",
  },
  {
    src: "/video-assets/cancel-flights-superflights.mp4",
    title: "Cancel flights anytime",
    className: "",
  },
  {
    src: "/video-assets/post1.mp4",
    title: "General post",
    className: "",
  },
];

export default function VideoBento() {
  return (
    <section className="space-y-5 border-t border-[var(--line)] py-10">
      <div className="space-y-2">
        <h2 className="font-title text-3xl font-semibold tracking-tight">Video Assets</h2>
        <p className="text-[var(--muted)]">
          A small motion board of ads, reels, and product experiments.
        </p>
      </div>

      <div className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-3 sm:auto-rows-[160px]">
        {videoAssets.map((asset) => (
          <div
            key={asset.src}
            className={`group relative overflow-hidden rounded-xl bg-[var(--card-bg)] ${asset.className}`}
          >
            <video
              src={asset.src}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={asset.title}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
            <p className="pointer-events-none absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
              {asset.title}
            </p>
          </div>
        ))}

        <div className="group relative overflow-hidden rounded-xl bg-black sm:col-span-2">
          <Image
            src="/video-assets/nap-motion.gif"
            alt="Nap motion cutout"
            width={900}
            height={520}
            unoptimized
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <p className="pointer-events-none absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
            Nap motion cutout
          </p>
        </div>
      </div>
    </section>
  );
}
