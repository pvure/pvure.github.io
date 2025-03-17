"use client"

import Image from "next/image"
import { Section } from "./misc/Section";
import { Badge } from "./ui/badge";

const aspectRatioClasses = {
  square: "col-span-1 row-span-1",
  vertical: "col-span-1 row-span-2",
}

export default function BentoGallery() {
  type AspectRatio = "square" | "vertical";

  const photos: { id: number; src: string; alt: string; description: string; aspectRatio: AspectRatio }[] = [

    {
      id: 1,
      src: "/sahara.JPG?height=400&width=400",
      alt: "Me in the Sahara Desert",
      description: "In the Sahara Desert",
      aspectRatio: "square",
    },
    {
      id: 2,
      src: "/gokart.jpg?height=400&width=400",
      alt: "Go Karting",
      description: "Go-Karting with Friends",
      aspectRatio: "vertical",
    },
    {
      id: 3,
      src: "/minnesota.jpg?height=400&width=400",
      alt: "Minnesotan Brunch",
      description: "A Minnesotan Brunch",
      aspectRatio: "square",
    },
    {
      id: 4,
      src: "/pchecks.jpg?height=800&width=400",
      alt: "P Checks",
      description: "Hanging out in front of Cameron Stadium",
      aspectRatio: "vertical",
    },
    {
      id: 5,
      src: "/puerto.jpg?height=400&width=400",
      alt: "Puerto Rico",
      description: "Chilling in Puerto Rico",
      aspectRatio: "vertical",
    },
    {
      id: 6,
      src: "/plants.jpg?height=400&width=400",
      alt: "At a Greenhouse",
      description: "Examining Plants",
      aspectRatio: "square",
    },
  ]
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={"outline"} className="" id="publications">
        Gallery
      </Badge>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative rounded-lg overflow-hidden group ${aspectRatioClasses[photo.aspectRatio]}`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 rounded-[0.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[0.5rem]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[0.5rem]">
                <p className="text-sm">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
