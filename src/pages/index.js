import { React, useRef } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Layers from "../components/Layers";
import Footer from "../components/Footer";

import MobileFooter from "../components/MobileFooter";
import FadeAbout from "../components/FadeAbout";

import NavBar from "../components/NavBar";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {

  let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  let ref = useRef(null);
  let { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollY, [0, windowHeight], ["0%", "40%"]);
  let scale = useTransform(scrollY, [0, windowHeight], [1, 0.7]);

  const { scrollYProgress } = useScroll();


  return (
    <div class="m-0 p-0">
      <motion.div
        class="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <NavBar />

      <motion.div style={{ y, scale }}>
        <Hero />
      </motion.div>

      <Layers />

      <div id="about">
        <div class="block lg:hidden">
          <About />
        </div>
        <div class="hidden lg:block">
          <FadeAbout />
        </div>
      </div>

      <Projects />
      <Hobbies />
      <div class="block lg:hidden">
        <MobileFooter />
      </div>
      <div class="hidden lg:block">
        <Footer />
      </div>

    </div>
  )
}
