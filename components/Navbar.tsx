import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="font-bold text-lg">Cam Kidman</div>
      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/philosophy">Philosophy</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
