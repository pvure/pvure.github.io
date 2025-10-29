"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function Header() {
  const controls = useAnimation();
  const [numAnimations, setNumAnimations] = useState(0);

  const handleMouseEnter = async () => {
    // Prevent multiple animations from starting simultaneously
    setNumAnimations(numAnimations + 1);

    // Start by making the chicken visible and move to x: 300
    await controls.start({
      opacity: 1,
      x: 200,
      transition: { duration: 2, ease: "easeInOut" },
    });

    // Bop up and down while moving side to side
    for (let i = 0; i < 3; i++) {
      // Bop up
      await controls.start({
        y: -10, // Move up
        transition: { duration: 0.2, ease: "easeInOut" },
      });
      // Bop down
      await controls.start({
        y: 0, // Move back down
        transition: { duration: 0.2, ease: "easeInOut" },
      });
      // flip around
      await controls.start({
        scaleX: (i % 2) * -2 + 1, // Flip the chicken horizontally
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Pause to simulate looking around
    await controls.start({
      scaleX: -1, // Flip the chicken horizontally
      transition: { duration: 0.3, ease: "easeInOut" },
    });

    await new Promise((resolve) => setTimeout(resolve, 500)); // Pause for half a second

    // Move back to x: 0 while maintaining the reflection
    await controls.start({
      x: 10,
      transition: { duration: 2, ease: "easeInOut" },
    });

    // Hide the chicken after animation
    await controls.start({
      opacity: 0,
      transition: { duration: 0.5 },
    });

    // Reset scale to original
    await controls.start({
      scaleX: 1,
      transition: { duration: 0.1 },
    });

    setChickenAnimating(false);
  };

  return (
    <header className="flex justify-between items-center relative">
      <h1 className="text-3xl font-medium tracking-tight z-50">
        Aaron Hsu
      </h1>

      {/* Always mounted, visibility controlled via animation */}
      <nav className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/aaaronhsu/"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/aaaronhsu"
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
