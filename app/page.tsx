import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">
          Senior Engineer who ships reliable systems under pressure
        </h1>
        <p className="text-neutral-400 max-w-xl">
          I build scalable systems, debug production issues fast, and deliver
          results without drama.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="underline">
            View Work
          </Link>
          <Link href="/contact" className="underline">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Proof */}
      <section>
        <ul className="space-y-2 text-neutral-300">
          <li>• Scaled X system to Y users</li>
          <li>• Reduced latency by Z%</li>
          <li>• Led engineering efforts on critical projects</li>
        </ul>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured Work</h2>
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-neutral-800 p-4 rounded-xl">
              <h3 className="text-lg font-medium">Project Title</h3>
              <p className="text-neutral-400 text-sm">
                Short description of the problem and impact.
              </p>
              <Link href={`/projects/project-${i}`} className="text-sm underline">
                Read Case Study →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
