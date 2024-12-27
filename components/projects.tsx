"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  year: string;
  links: {
    github?: string;
    live?: string;
    article?: string;
  };
  technologies: string[];
  featured?: boolean;
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Quiver (Twitch.tv Clone)",
      description:
        "A distributed real-time streaming site that implements load balancing across multiple GCE instances using Kubernetes for high availability. Uses the RTMP and HLS protocols.",
      year: "2024",
      links: {
        github: "https://github.com/aaaronhsu/realtime-streaming",
      },
      technologies: ["Rust", "React", "Kubernetes", "GCE", "NGINX"],
      featured: true,
    },
    {
      title: "Fruit Ninja",
      description:
        "A full-stack embedded system that combines computer vision with physical swords to play Fruit Ninja on an LED display. The game is run on a Raspberry Pi, events are logged on a Flask server, and users can view game stats on a React app.",
      year: "2024",
      links: {
        github: "https://github.com/aaaronhsu/fruit-ninja",
      },
      technologies: [
        "Python",
        "React",
        "Flask",
        "PostgreSQL",
        "AWS EC2",
        "WebSockets",
        "NGINX",
      ],
      featured: true,
    },
    {
      title: "Airbnb Price Prediction (Kaggle Competition)",
      description:
        "A model ensemble (XGBoost, LightGBM, Random Forest) that classifies Airbnbs into 6 price quantiles. Uses a custom feature engineering pipeline and hyperparameter tuning.",
      year: "2024",
      links: {
        github: "https://github.com/aaaronhsu/airbnb-kaggle-competition",
      },
      technologies: ["Python", "SKLearn"],
    },
    {
      title: "PoiVision: Prop Tracking & Feedback",
      description:
        "A program that categorizes user movement using parametric regression. Fine-tuned YOLOv8 with self-collected data to track the location of custom juggling props with a mAP of 0.83.",
      year: "2023",
      links: {
        github: "https://github.com/aaaronhsu/poi",
      },
      technologies: ["Rust", "Python", "YOLOv8", "Computer Vision"],
      featured: true,
    },
    {
      title: "WalletWatchers: Expense Aggregator",
      description:
        "A full-stack web app that uses the Plaid API to aggregate user expenses across bank accounts to generate insights on spending habits.",
      year: "2023",
      links: {
        github: "https://github.com/nwang888/walletwatchers",
      },
      technologies: ["NextJS", "SQLite", "Plaid"],
    },
    {
      title: "BlueRide: Rideshare Matching",
      description:
        "An iOS app that helped 300+ Duke students find and share rides to and from the RDU airport.",
      year: "2023",
      links: {
        live: "https://apps.apple.com/us/app/blueride-airport-rideshare/id6478838281",
      },
      technologies: ["iOS", "Swift", "Greedy Algorithm"],
    },
    {
      title: "Whac-A-Mole",
      description:
        "An implementation of the classic game on an FPGA. Built a 5-stage pipelined processor with bypassing, branch prediction, and memory-based I/O in Verilog and wrote a C-based assembler to translate a custom Assembly ISA to binary.",
      year: "2023",
      links: {
        github: "https://github.com/aaaronhsu/whack-a-mole",
      },
      technologies: ["Verilog", "C", "FPGA"],
    },
    {
      title: "Quarcade (Google Mentorship Project)",
      description:
        "A real-time multiplayer web game that supports persistent sessions and concurrent games.",
      year: "2022",
      links: {
        github: "https://github.com/aaaronhsu/Quarcade",
      },
      technologies: ["React", "NodeJS", "SocketIO"],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">Projects</h2>

      {/* Featured Projects */}
      <div className="space-y-12">
        {featuredProjects.map((project, index) => (
          <div key={index} className="space-y-4 group">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">{project.title}</h3>
              <span className="text-gray-500">{project.year}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.links.article && (
                <a
                  href={project.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  Article
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Projects */}
      {additionalProjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Other Projects...</h3>
          <ul className="space-y-2">
            {/* Always show the first project */}
            <li key={0} className="py-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{additionalProjects[0].title}</h4>
                <span className="text-sm text-gray-500">
                  {additionalProjects[0].year}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {additionalProjects[0].description}
              </p>
              <div className="flex gap-2 mt-2">
                {additionalProjects[0].links.github && (
                  <a
                    href={additionalProjects[0].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
                {additionalProjects[0].links.live && (
                  <a
                    href={additionalProjects[0].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    View
                  </a>
                )}
              </div>
            </li>

            {/* Animate additional projects */}
            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} // Initial state: hidden
                  animate={{ opacity: 1, height: "auto" }} // Animate to visible
                  exit={{ opacity: 0, height: 0 }} // Animate back to hidden
                  transition={{ duration: 0.3 }} // Transition duration
                  className="overflow-hidden" // Prevent layout shift
                >
                  {additionalProjects.slice(1).map(
                    (
                      project,
                      index, // Show all projects except the first
                    ) => (
                      <li key={index + 1} className="py-2">
                        {" "}
                        {/* Adjust key to avoid duplicate keys */}
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{project.title}</h4>
                          <span className="text-sm text-gray-500">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.description}
                        </p>
                        <div className="flex gap-2 mt-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            >
                              GitHub
                            </a>
                          )}
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            >
                              View
                            </a>
                          )}
                        </div>
                      </li>
                    ),
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </ul>

          {/* Show button to toggle additional projects */}
          {additionalProjects.length > 1 && ( // Show the button only if there are more than 1 project
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Show More
                </>
              )}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
