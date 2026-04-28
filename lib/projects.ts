export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  stack: string[];
  overview: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "superflights",
    title: "SuperFlights",
    subtitle: "Flight booking product and growth experiments",
    image: "/superlights.png",
    summary:
      "A travel product project focused on flight discovery, pricing visibility, and conversion-oriented UX decisions.",
    stack: ["Product", "Growth", "Distribution", "Experiments"],
    overview:
      "SuperFlights is built around reducing booking friction for high-intent travelers. The product work centered on better route discovery, clearer fare logic, and tighter user journeys from search to checkout.",
    details: [
      "Designed conversion-focused booking flows that reduce decision fatigue.",
      "Introduced experimentation loops for pricing surfaces and offer messaging.",
      "Built feedback-driven product iterations from real user behavior signals.",
      "Improved funnel clarity from search to purchase intent.",
      "Stronger product positioning around value and transparency.",
      "Faster release cadence for growth experiments.",
    ],
  },
  {
    slug: "nap-inc",
    title: "Nap Inc",
    subtitle: "AI workflows and product systems",
    image: "/nap.png",
    summary:
      "A product-focused initiative around practical AI execution, creator tooling, and operational automation patterns.",
    stack: ["AI", "Automation", "Systems", "Operations"],
    overview:
      "Nap Inc explores practical AI systems that help creators and teams move faster. The work blends product design with automation architecture to create repeatable execution workflows.",
    details: [
      "Created modular AI workflows for repetitive business operations.",
      "Built tooling patterns that connect ideation, content, and distribution.",
      "Focused on reliability, speed, and maintainability across systems.",
      "Reduced manual overhead in day-to-day execution tasks.",
      "More consistent outputs through systemized operating playbooks.",
      "Clearer roadmap for scalable creator tooling.",
    ],
  },
  {
    slug: "surfers",
    title: "Surfers",
    subtitle: "Online Website Building Platform With AI",
    image: "/surfers.png",
    summary:
      "A personal publication system for technical notes, quantitative thinking, and audience-focused knowledge distribution.",
    stack: ["Writing", "SEO", "Content Systems", "Brand"],
    overview:
      "Surfers started as a website-building concept with AI assistance and evolved into a broader content and distribution platform. The goal is to simplify publishing while preserving quality and voice.",
    details: [
      "Designed lightweight publishing workflows for faster content output.",
      "Integrated AI-assisted creation patterns without sacrificing originality.",
      "Optimized content structure for discoverability and long-term search reach.",
      "Higher publishing consistency with less editorial friction.",
      "Improved readability and retention across key pages.",
      "Better foundation for audience and brand growth.",
    ],
  },
];

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
