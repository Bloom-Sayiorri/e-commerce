import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-3 px-10 w-full sticky top-0 left-0 z-50 bg-white">
      <h2 className="text-2xl font-semibold">Shop Smart</h2>
      <Search />
      <nav className="flex gap-4">
        <Link href="/" className="text-lg hover:text-blue-500 hover:scale-110 hover:underline">Home</Link>
        <Link href="/cart" className="text-lg hover:text-blue-500 hover:scale-110 hover:underline">Cart</Link>
        <Link href="/about" className="text-lg hover:text-blue-500 hover:scale-110 hover:underline">About</Link>
        <Link href="/contact" className="text-lg hover:text-blue-500 hover:scale-110 hover:underline">Contact</Link>
      </nav>
    </header>
  );
}