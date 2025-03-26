"use client"
import React, { useState } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react'

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
    link: "https://pranayvure.substack.com/p/bioengineering-primer-fighting-viruses"
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
    <section id="blog" className="py-16 md:py-24">
      <Container>
        <SectionHeading>Blog</SectionHeading>
        
        <div className="mt-8 text-center text-gray-300 max-w-2xl mx-auto">
          <p>Explore my writings on bioengineering, protein design, and cutting-edge research in the field.</p>
        </div>
        
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="md:grid md:grid-cols-5 gap-0">
            {/* Image (2/5 width on medium screens and above) */}
            <div className="md:col-span-2 h-64 md:h-full relative">
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{ backgroundImage: `url('${currentPost.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 md:bg-gradient-to-l md:from-black/70 md:to-transparent" />
            </div>
            
            {/* Content (3/5 width on medium screens and above) */}
            <div className="md:col-span-3 p-6 md:p-8 relative">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
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
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentPost.title}</h3>
              
              <div className="mb-6 text-gray-300">
                {currentPost.preview}
              </div>
              
              <a 
                href={currentPost.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Read on Substack <ExternalLink className="w-4 h-4" />
              </a>
              
              {blogPosts.length > 1 && (
                <div className="flex gap-3 mt-8">
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
        </div>
      </Container>
    </section>
  )
}