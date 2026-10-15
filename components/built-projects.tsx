import Image from "next/image";

const projects = [
  { icon: "nap", name: "Nap", url: "https://nap-code.com/", description: "run your agents anywhere anytime", milestones: ["+3k users", "₹5 Lakh Grant"] },
  { icon: "superflights", name: "SuperFlights", url: "/mumbai", description: "optimised flight booking", milestones: ["₹25 Lakh raised"] },
  { icon: "unleaf", name: "Unleaf", url: "https://www.unleaf.lol/", description: "online LaTex editor which compiles instantaneously", milestones: ["+1k users"] },
  { icon: "tayyari", name: "Tayyari | Do JEE Prep", url: "https://tayyari.online", description: "a jee preparation ai questionaiare", milestones: ["~200 users"], note: "Need to optimise and build better iteration" },
  { icon: "fizlint", name: "Fizlint", url: "https://fizlint.vercel.app/", description: "a live linting cli tool for js and ts" },
  { icon: "itemio", name: "Itemio", url: "https://itemio.vercel.app", description: "identify products from photos, estimate their value, and find marketplace listings" },
  { icon: "caseway", name: "Caseway", url: "https://caseway.vercel.app", description: "AI tooling for automating legal and government workflows", note: "underrated project, could scale well" },
  { icon: "glammetrics", name: "Glammetrics", url: "https://www.glametric.fun/", description: "AI-powered facial analysis and appearance scoring", note: "exploring insta ads and products" },
];

export default function BuiltProjects() {
  return (
    <section className="border-t border-[var(--line)] py-10" aria-labelledby="built-projects-title">
      <h2 id="built-projects-title" className="mb-5 font-title text-3xl font-semibold tracking-tight">Things I have built</h2>
      <ul className="divide-y divide-[var(--line)]">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.url}
              target={project.url.startsWith("/") ? undefined : "_blank"}
              rel={project.url.startsWith("/") ? undefined : "noopener noreferrer"}
              className="group grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 rounded-sm py-5 transition-colors hover:bg-[var(--card-bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] motion-reduce:transition-none"
            >
              <Image src={`/project-icons/${project.icon}.webp`} alt="" width={32} height={32} className="mt-0.5 h-8 w-8 rounded-md object-contain" />
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h3 className="min-w-0 text-lg font-medium leading-7 text-[var(--ink)] group-hover:underline decoration-[var(--line)] underline-offset-4">{project.name}</h3>
                  {project.milestones ? (
                    <div className="ml-auto flex shrink-0 items-center justify-end gap-2">
                      {project.milestones.map((milestone) => (
                        <span key={milestone} className="inline-flex items-center rounded-full border border-[var(--resume-border)] bg-[var(--resume-bg)] px-2.5 py-0.5 text-xs font-semibold leading-5 text-[var(--resume-ink)]">{milestone}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="mt-1 text-base leading-7 text-[var(--muted)]">
                  <p>{project.description}</p>
                  {project.note ? <p className="mt-1 text-sm italic leading-6">{project.note}</p> : null}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
