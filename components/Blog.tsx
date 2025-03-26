"use client"
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Section } from "./misc/Section"

// This will be expanded as you write more articles
const blogPosts = [
  {
    id: 1,
    title: "Bioengineering Primer: Fighting Viruses That Change Their Face",
    date: "March 26, 2025",
    readTime: "10 min read",
    summary: "An introduction to bioengineering and a glimpse into my research on designing proteins to combat coronavirus variants.",
    preview: "When I tell people I'm majoring in bioengineering, conversations often end quickly with a polite nod or a question about prosthetics, highlighting how unfamiliar most people are with the extent of the field. This article introduces the field of bioengineering and explores my research on designing proteins that can help fight coronaviruses by targeting parts that don't change.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://open.substack.com/pub/pranayvure/p/what-is-bioengineering-an-example?r=4b25v&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
  },
  // Example of a second post (to be added when you write it)
  // {
  //   id: 2,
  //   title: "The Future of Protein Engineering",
  //   date: "April 15, 2025",
  //   readTime: "8 min read",
  //   summary: "Exploring emerging techniques in computational protein design that will revolutionize medicine.",
  //   preview: "Protein engineering is undergoing a revolution thanks to advances in computational methods. In this article, I explore how AI-driven protein design is opening up new possibilities for creating novel therapeutics and enzymes that could solve some of our biggest challenges.",
  //   imageUrl: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  //   link: "https://pranayvure.substack.com/"
  // }
]

export default function Blog() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0)
  const currentPost = blogPosts[currentPostIndex]
  
  const nextPost = () => {
    setCurrentPostIndex((prev) => (prev + 1) % blogPosts.length)
  }
  
  const prevPost = () => {
    setCurrentPostIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  return (
    <Section className="flex flex-col items-start gap-4">
      <div>
        <Badge variant="outline" className="" id="blog">
          Blog
        </Badge>
      </div>
      
      <div className="flex flex-col gap-4 w-full">
        <Card className="overflow-hidden bg-white/5 backdrop-blur-sm">
          <div className="md:grid md:grid-cols-5 gap-0">
            {/* Image (2/5 width on medium screens and above) */}
            <div className="md:col-span-2 h-64 md:h-full relative md:rounded-l-lg overflow-hidden">
              <div 
                className="w-full h-full bg-center bg-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                style={{ backgroundImage: `url('${currentPost.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 md:bg-gradient-to-l md:from-black/70 md:to-transparent rounded-t-lg md:rounded-none md:rounded-l-lg" />
            </div>
            
            {/* Content (3/5 width on medium screens and above) */}
            <div className="md:col-span-3 p-6 relative">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {currentPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentPost.readTime}
                  </div>
                </div>
              </div>
              
              <h3 className="text-base font-semibold text-primary mb-2">{currentPost.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{currentPost.summary}</p>
              
              <div className="text-sm text-muted-foreground mt-4">
                {currentPost.preview}
              </div>
              
              <a 
                href={currentPost.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-4 text-sm"
              >
                Read on Substack <ExternalLink className="w-4 h-4" />
              </a>
              
              {blogPosts.length > 1 && (
                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={prevPost}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={nextPost}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}