import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-slate-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Infinity-SmartWatch
        </Link>
        <div className="flex gap-4">
          <Link href="/clearance" className="hover:text-slate-300">
            Big-Sale
          </Link>
          <Link href="/signup" className="hover:text-slate-300">
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}
