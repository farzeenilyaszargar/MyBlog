export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "superflights",
    title: "SuperFlights",
    subtitle: "Flight booking product and growth experiments",
    image: "/business.jpeg",
    summary:
      "A travel product project focused on flight discovery, pricing visibility, and conversion-oriented UX decisions.",
    stack: ["Product", "Growth", "Distribution", "Experiments"],
  },
  {
    slug: "nap-inc",
    title: "Nap Inc",
    subtitle: "AI workflows and product systems",
    image: "/og-image.jpeg",
    summary:
      "A product-focused initiative around practical AI execution, creator tooling, and operational automation patterns.",
    stack: ["AI", "Automation", "Systems", "Operations"],
  },
  {
    slug: "fizzy-blog",
    title: "Fizzy Blog",
    subtitle: "Research-style writing and distribution",
    image: "/profile.png",
    summary:
      "A personal publication system for technical notes, quantitative thinking, and audience-focused knowledge distribution.",
    stack: ["Writing", "SEO", "Content Systems", "Brand"],
  },
];

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
