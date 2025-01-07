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
      title: "SMS Diary",
      description:
        "A conversation-based diary using LLM agents with RAG-based memory store. Implemented vector-based memory system using pgvector and embedding similarity. Deployed with CI/CD pipeline using GitHub Actions and Docker on AWS EC2.",
      year: "2025",
      links: {},
      technologies: ["Go", "Docker", "GitHub Actions", "EC2", "OpenAI"],
      featured: true,
    },
    {
      title: "Quiver (Twitch.tv Clone)",
      description:
        "A streaming platform managed with Kubernetes with NGINX-based RTMP ingestion and HLS transcoding. Implemented distributed edge caching layer with configurable TTL and round-robin load balancing. Deployed with Grafana monitoring for cache performance optimization.",
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
        "An IoT game with computer vision tracking and custom LED matrix display. Built real-time event processing system (60 FPS tracking, 10 FPS rendering) with dynamic buffer management. Implemented client-server architecture using event queue batching and WebSocket state sync between RPi and EC2.",
      year: "2024",
      links: {
        github: "https://github.com/aaaronhsu/fruit-ninja",
      },
      technologies: [
        "Python",
        "React",
        "Flask",
        "PostgreSQL",
        "EC2",
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
        "A fine-tuned YOLOv8 model (mAP 0.83) on hand-labeled dataset for prop tracking. Implemented custom momentum-based gradient descent in Rust to optimize trigonometric parametric equations for movement classification. Built visualization system for point-wise movement accuracy analysis.",
      year: "2023",
      links: {
        github: "https://github.com/aaaronhsu/poi",
        live: "https://youtube.com/shorts/YXsofZzp9Dg",
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
        "A 5-stage pipelined processor with bypassing, branch prediction, and memory-mapped I/O in Verilog. Developed C-based assembler to translate custom Assembly ISA to binary for FPGA deployment.",
      year: "2023",
      links: {
        github: "https://github.com/aaaronhsu/whack-a-mole",
      },
      technologies: ["Verilog", "C", "FPGA"],
      featured: true,
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
                  Demo
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

      {/* Show button to toggle additional projects */}
      {additionalProjects.length > 0 && (
        <>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Show Fewer Projects
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Show More Projects
              </>
            )}
          </button>

          {/* Additional Projects */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} // Initial state: hidden
                animate={{ opacity: 1, height: "auto" }} // Animate to visible
                exit={{ opacity: 0, height: 0 }} // Animate back to hidden
                transition={{ duration: 0.3 }} // Transition duration
                className="overflow-hidden" // Prevent layout shift
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Other Projects...</h3>
                  <ul className="space-y-2">
                    {additionalProjects.map((project, index) => (
                      <li key={index} className="py-2">
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
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </section>
  );
}
