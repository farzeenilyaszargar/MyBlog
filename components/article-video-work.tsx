const videoAssets = [
  {
    src: "/video-assets/ad1.mp4",
    title: "SuperFlights reel",
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
  {
    src: "/video-assets/anim-3.mp4",
    title: "Motion study",
    className: "",
  },
  {
    src: "/video-assets/anim-5-2.mp4",
    title: "Product animation",
    className: "",
  },
];

export default function ArticleVideoWork() {
  return (
    <div className="not-prose my-8 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-3 sm:auto-rows-[150px]">
      {videoAssets.map((asset) => (
        <div
          key={asset.src}
          className={`group relative overflow-hidden rounded-lg bg-[var(--card-bg)] ${asset.className}`}
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <p className="pointer-events-none absolute bottom-3 left-3 right-3 text-xs font-medium text-white">
            {asset.title}
          </p>
        </div>
      ))}
    </div>
  );
}
