"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "./ui/modal"; // Adjust the import path as necessary
import { ExternalLink } from "lucide-react";

interface WorkExperience {
  company: string;
  website: string;
  role: string;
  period: string;
  type: string;
  logo: string;
  details: {
    description: string;
    achievements: string[];
    technologies: string[];
  };
}

export function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkExperience | null>(null);

  const experiences: WorkExperience[] = [
    {
      company: "Valinor Discovery",
      website: "https://www.valinordiscovery.com",
      role: "ML Engineer",
      period: "2024-now",
      type: "",
      logo: "/valinor-logo.png?height=100&width=100",
      details: {
        description:
          "Built serving layer for Ramp's internal feature store for ML decisioning models.",
        achievements: [
          "Core dev of Ramp's internal feature platform for ML decisioning, built on Snowflake, RisingWave, and Dagster",
          "Built serving layer for low latency + high throughput feature serving and CI/CD with zero-downtime releases",
          "Implemented 'shadow mode' workflows to safely evaluate feature parity on production traffic before full rollout",
          "Productionized the first Risk application, reducing p95 feature query latency from 5s+ to 250ms",
        ],
        technologies: ["PyTorch", "Temporal", "CodeArtifact", "Dagster", "Github Actions"],
      },
    },
    {
      company: "Ramp",
      website: "https://ramp.com/",
      role: "Software Engineer Intern",
      period: "2024",
      type: "Credit Risk",
      logo: "/ramp.svg?height=50&width=50",
      details: {
        description:
          "Owned end-to-end flow to automatically evaluate and set credit limits.",
        achievements: [
          "Engineered a high throughput credit limit evaluation pipeline, generating \$10M of increased monthly spend",
          "Architected a new core application to support a risk action notification system for 200+ internal risk analysts",
        ],
        technologies: ["Python", "Flask", "PostgreSQL", "Datadog"],
      },
    },
    {
      company: "Hotplate",
      website: "https://www.hotplate.com",
      role: "Software Engineer Intern",
      period: "2023",
      type: "Market Intelligence",
      logo: "/hotplate.svg?height=50&width=50",
      details: {
        description:
          "Built v1 of data pipeline for a market intelligence model.",
        achievements: [
          "Built a data pipeline with multithreaded web scraping and proxy rotation to evaluate 30K+ Instagram accounts/day",
          "Implemented caching layers to reduce query times and identify 1000+ clients at 30\% of the expected cost",
        ],
        technologies: ["Python", "Selenium", "PostgreSQL", "Docker"],
      },
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-medium">Work</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group flex items-center justify-between py-4 hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
            onClick={() => setSelectedWork(exp)}
          >
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 relative">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {exp.company}
                    <ExternalLink className="inline h-4 w-4 pl-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </h3>
                <p className="text-gray-600">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.type}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-500">{exp.period}</span>
              <span className="block text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Click for details
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedWork} onClose={() => setSelectedWork(null)}>
        {selectedWork && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={selectedWork.logo}
                  alt={`${selectedWork.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">{selectedWork.company}</h3>
                <p className="text-gray-600">
                  {selectedWork.role} • {selectedWork.period}
                </p>
              </div>
            </div>

            <p className="text-gray-600">{selectedWork.details.description}</p>

            <div>
              <h4 className="font-medium mb-2">Results</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {selectedWork.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedWork.details.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
