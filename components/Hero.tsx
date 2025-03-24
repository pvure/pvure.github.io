"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Section } from "./misc/Section";

export const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Section className="">
      <Badge variant="outline" className="mb-4" id="hero">
        Profile
      </Badge>
      <div className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[2] p-2 flex my-auto max-md:mx-auto">
          <Avatar className="w-11/12 h-auto max-w-xs mx-auto max-md:w-full max-md:mb-2 relative border border-accent">
          <AvatarImage
  className="object-cover absolute z-20 opacity-0 hover:opacity-100 transition-all scale-[1.75] pb-12"
  src="/headshot.jpg"
  alt="Pranay Vure"
/>
<AvatarImage
  className="object-cover relative scale-[1.75] pb-12 grayscale"
  src="/headshot.jpg"
  alt="Pranay Vure"
/>
            <AvatarFallback className="h-full">Pranay</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-[3] flex flex-col gap-0.5 my-auto">
          <h2 className="font-caption font-semibold text-5xl text-foreground">
          Hello, <span className="text-accent-foreground">Pranay</span> here!
          </h2>
          <h3 className="font-caption font-medium text-2xl">
            <span className="text-primary">
            I&apos;m a{" "}
              <Typewriter
                words={[
                  "Biomedical Engineer",
                  "Researcher",
                  "Builder",
                  "Computational Biologist"
                ]}
                cursor
                cursorColor="#a8b1c2"
                cursorStyle="_"
                typeSpeed={40}
                loop={0}
                deleteSpeed={25}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <p className="font-sans basis-0 text-muted-foreground text-pretty">
            Senior @ Duke University majoring in Biomedical Engineering with a focus on molecular and cellular engineering.
            Experienced in integrating deep learning and generative AI with protein design. Feel free to{" "}
            <Link href="#contact" className="underline underline-offset-2">
              reach out!
            </Link>
            !
          </p>
          <AnimatePresence initial={false}>
            {showMore && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 1, height: 0 },
                }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="overflow-hidden"
              >
                <motion.p className="font-sans basis-0 text-muted-foreground pt-1 text-pretty">
                  My goal is to advance healthcare through innovative research and technology.
                  I aim to build solutions at the intersection of
                  biomedical engineering and artificial intelligence to achieve this vision. 
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex">
            <Button
              variant="outline"
              className="my-2.5 p-3 font-sans mb-0 h-9 rounded-[0.5rem]"
              onClick={handleReadMoreClick}
            >
              {showMore ? "Show Less" : "Read More"}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
