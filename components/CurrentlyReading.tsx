"use client"

import React from 'react'
import { Section } from "./misc/Section"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

// Sample data - replace with your actual current learning materials
const learningItems = [
  {
    id: 1,
    title: "Molecular Biology of the Cell",
    link: "https://www.ncbi.nlm.nih.gov/books/NBK21054/"
  },
  {
    id: 2,
    title: "Full Stack Deep Learning",
    link: "https://fullstackdeeplearning.com/"
  },
  {
    id: 3,
    title: "Protein Language Models as Tools for Therapeutic Peptide Design",
    link: "https://www.nature.com/articles/s41587-023-01764-1"
  },
  {
    id: 4,
    title: "JAX for High-Performance Machine Learning",
    link: "https://github.com/google/jax"
  }
]

export default function CurrentlyReading() {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div>
        <Badge variant="outline" className="" id="reading">
          Currently Reading/Learning
        </Badge>
      </div>
      
      <ul className="list-disc pl-6 space-y-2">
        {learningItems.map((item) => (
          <li key={item.id} className="text-muted-foreground">
            {item.link ? (
              <Link 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline inline-flex items-center"
              >
                {item.title}
                <ArrowUpRight className="ml-1 w-3 h-3" />
              </Link>
            ) : (
              <span className="text-primary">{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}