import { React, useState, useEffect } from "react";

import { motion } from "framer-motion";

import Blurb from "./Blurb";

import { BsChevronCompactDown } from "react-icons/bs";

export default function FadeAbout() {

    // if the height of the about div is < windowHeight, set w-[100vh]

    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercent(percent);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let extraScrollClass = 20 < scrollPercent && scrollPercent < 30 ? " opacity-1" : " opacity-0";

    return (
        <>
            <div class={"bg-about min-h-screen py-10 lg:pb-0"}>

                <div
                    class="flex-col py-[20vh] sticky top-4"
                >

                    <div class={"flex flex-wrap lg:flex-nowrap justify-center items-center mx-[10%]"}>

                        <img class="rounded-xl lg:mr-10 " src="../../top.png"></img>

                        <Blurb 
                            class="flex flex-wrap" 
                            theme="dark"

                            title="About Me"
                            blurb={[
                                "I’m a rising sophomore at Duke University studying CS and Electrical/Computer Engineering. My background is in algorithms and web development but recently, I’ve been developing programs for microcontrollers and exploring deep learning.",
                                "Last summer (‘22), I was an Atlas Fellow and worked at Cisco to develop an engineering solution to improve the connected rail system in the U.S..",
                                "This summer (‘23), I’ll be interning at Hotplate to develop an AI model to evaluate webscraped Instagram accounts to scale customer outreach.",
                                "I’m interested in entrepreneurship and Effective Altruism and enjoy working on projects at the intersection of software and hardware."
                            ]}
                            animate={[0, 0.4, .8, 1.2]}
                            fade={true}
                            scrollPercent={scrollPercent}
                        />
                    </div>
                    
                    <motion.a
                        href={"#projects"}
                        class={"flex justify-center items-center transition-opacity animate-1000" + extraScrollClass}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    >
                        <BsChevronCompactDown size={42} color="#FFFFFF" class="mt-10" />
                    </motion.a>
                </div>
            </div>
        </>
    );
}