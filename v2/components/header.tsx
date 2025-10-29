"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function Header() {
  const controls = useAnimation();
  const [numAnimations, setNumAnimations] = useState(0);

  return (
    <header className="flex justify-between items-center relative py-4">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        Pranay Vure
      </h1>

      <nav className="flex items-center gap-6 text-lg font-medium">
        <Link
          href="https://www.linkedin.com/in/pranay-vure-0903641b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 underline transition-colors duration-200"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/pvure"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 underline transition-colors duration-200"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
