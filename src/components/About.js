import { React } from "react";

import StaticCard from "./StaticCard";

export default function About() {

    // if the height of the about div is < windowHeight, set w-[100vh]

    return (
        <>
            <div className={"bg-about min-h-screen py-10 flex items-center"}>
                <StaticCard 
                    className="sticky top-0"
                    imageLeft={true}
                    src="top.png"
                    theme="dark"

                    title="About Me"
                    blurb={[
                        "I’m a junior at Duke University studying CS and Electrical/Computer Engineering. My background is in building data pipelines, full stack web apps, and algorithmic programming (USACO Gold). I'm interested in working on 0→1 consumer-facing projects at high-growth companies. I value ownership over projects and prefer to work on backend systems.",
                        "Last summer ('24), I worked on backend systems at Ramp, developing end-to-end flows to automatically evaluate and set credit limits. I also scoped + implemented a core application to support an internal application used by ~200 employees.",
                        "The previous summer ('23), I designed and developed a data pipeline at Hotplate, a Series A startup backed by Y Combinator. I worked with APIs and cycled proxy connections for webscraping to analyze Instagram accounts for market intelligence purposes.",
                    ]}
                />
            </div>
        </>
    );
}