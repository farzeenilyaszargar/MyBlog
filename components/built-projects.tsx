const projects = [
  { icon: "🥱", name: "Nap", url: "https://nap-code.com/", description: "run your agents anywhere anytime", milestone: "+3k users" },
  { icon: "✈️", name: "SuperFlights", url: "https://www.superflights.co.in/", description: "optimised flight booking", milestone: "₹25 Lakh raised" },
  { icon: "☘️", name: "Unleaf", url: "https://www.unleaf.lol/", description: "online LaTex editor which compiles instantaneously", milestone: "+1k users" },
  { icon: "📚", name: "Tayyari | Do JEE Prep", url: "https://tayyari.online", description: "a jee preparation ai questionaiare", milestone: "~200 users", note: "Need to optimise and build better iteration" },
  { icon: "🧑‍💻", name: "Fizlint", url: "https://fizlint.vercel.app/", description: "a live linting cli tool for js and ts" },
  { icon: "📷", name: "Itemio", url: "https://itemio.vercel.app", description: "identify products from photos, estimate their value, and find marketplace listings" },
  { icon: "⚖️", name: "Caseway", url: "https://caseway.vercel.app", description: "AI tooling for automating legal and government workflows", note: "underrated project, could scale well" },
  { icon: "⏰", name: "Promodoro Timer", url: "https://sip-and-focus-8fbjfc58h-farzeenilyaszargars-projects.vercel.app/", description: "basic ass timer with classical music" },
  { icon: "📰", name: "Stackflux", url: "https://stackflux.online", description: "discover and read interesting articles about software, engineering, and technology. just a tech blog." },
  { icon: "✨", name: "Glammetrics", url: "https://www.glametric.fun/", description: "AI-powered facial analysis and appearance scoring", note: "exploring insta ads and products" },
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
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[1.75rem_minmax(0,1fr)_1rem] items-start gap-3 rounded-sm py-5 transition-colors hover:bg-[var(--card-bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] motion-reduce:transition-none"
            >
              <span aria-hidden="true" className="text-center text-xl leading-7">{project.icon}</span>
              <div className="grid min-w-0 gap-1 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-5">
                <div>
                  <h3 className="text-lg font-medium leading-7 text-[var(--ink)] group-hover:underline decoration-[var(--line)] underline-offset-4">{project.name}</h3>
                  {project.milestone ? (
                    <span className="mt-1.5 inline-block rounded-full border border-[var(--line)] px-2 py-0.5 text-xs leading-5 text-[var(--muted)]">{project.milestone}</span>
                  ) : null}
                </div>
                <div className="text-base leading-7 text-[var(--muted)]">
                  <p>{project.description}</p>
                  {project.note ? <p className="mt-1 text-sm italic leading-6">{project.note}</p> : null}
                </div>
              </div>
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 h-4 w-4 text-[var(--muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
                <path d="M4 12 12 4M4 4h8v8" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
