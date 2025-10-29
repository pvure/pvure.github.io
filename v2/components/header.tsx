"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function Header() {
  const controls = useAnimation();
  const [numAnimations, setNumAnimations] = useState(0);
  return (
    <header className="flex justify-between items-center relative">
      <h1 className="text-3xl font-medium tracking-tight z-50">
        Pranay Vure
      </h1>

      {/* Always mounted, visibility controlled via animation */}
      <nav className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/pranay-vure-0903641b2/"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
