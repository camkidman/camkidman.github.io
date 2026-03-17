import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-neutral-800 p-4 rounded-xl">
            <h2 className="text-xl">Project Title</h2>
            <p className="text-neutral-400 text-sm">
              One-liner about the project.
            </p>
            <Link href={`/projects/project-${i}`} className="underline text-sm">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
