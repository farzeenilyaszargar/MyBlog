import Link from "next/link";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionsResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};

const GITHUB_USERNAME = "farzeenilyaszargar";

async function getGitHubActivity(year: number) {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
      {
        next: { revalidate: 60 * 60 * 6 },
      },
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

function getLevelClass(level: number) {
  switch (level) {
    case 1:
      return "bg-[#9be9a8]";
    case 2:
      return "bg-[#40c463]";
    case 3:
      return "bg-[#30a14e]";
    case 4:
      return "bg-[#216e39]";
    default:
      return "bg-[var(--code-inline-bg)]";
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default async function GitHubActivity() {
  const year = new Date().getFullYear();
  const activity = await getGitHubActivity(year);
  const contributions = activity?.contributions ?? [];
  const total = activity?.total[String(year)] ?? contributions.reduce((sum, day) => sum + day.count, 0);
  const activeDays = contributions.filter((day) => day.count > 0).length;
  const bestDay = contributions.reduce<Contribution | null>(
    (best, day) => (!best || day.count > best.count ? day : best),
    null,
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-title text-4xl font-semibold leading-none">{total.toLocaleString("en-IN")}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">contributions in {year}</p>
        </div>
        <div className="flex gap-5 text-sm text-[var(--muted)]">
          <div>
            <p className="text-[var(--ink)]">{activeDays}</p>
            <p>active days</p>
          </div>
          <div>
            <p className="text-[var(--ink)]">{bestDay ? bestDay.count : 0}</p>
            <p>best day</p>
          </div>
        </div>
      </div>

      <Link
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className="block overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--card-bg)] p-4"
      >
        {contributions.length > 0 ? (
          <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
            {contributions.map((day) => (
              <span
                key={day.date}
                title={`${day.count} contributions on ${formatDate(day.date)}`}
                aria-label={`${day.count} contributions on ${formatDate(day.date)}`}
                className={`h-2.5 w-2.5 rounded-[2px] ${getLevelClass(day.level)}`}
              />
            ))}
          </div>
        ) : (
          <div className="py-6 text-sm text-[var(--muted)]">
            GitHub activity is temporarily unavailable. Visit my GitHub profile.
          </div>
        )}
      </Link>

      <div className="flex items-center justify-between text-xs text-[var(--muted)]">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <span key={level} className={`h-2.5 w-2.5 rounded-[2px] ${getLevelClass(level)}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
