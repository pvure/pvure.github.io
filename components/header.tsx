import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl font-medium tracking-tight">
        Pranay Vure
      </h1>

      <nav className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/pranay-v-0903641b2/"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/pvure"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
