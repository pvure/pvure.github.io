import { React } from "react";

import StaticCard from "./StaticCard";

export default function About() {

    // if the height of the about div is < windowHeight, set w-[100vh]

    return (
        <>
            <div class={"bg-about min-h-screen py-10 flex items-center"}>
                <StaticCard 
                    class="sticky top-0"
                    imageLeft={true}
                    src="top.png"
                    theme="dark"

                    title="About Me"
                    blurb={[
                        "I’m a sophomore at Duke University studying CS and Electrical/Computer Engineering. My background is in algorithms (USACO Gold) and web development but recently, I’ve been exploring deep learning and developing programs for microcontrollers.",
                        "Last summer ('23), I was a Software Engineering Intern at Hotplate, a Series A startup backed by Y Combinator, where I designed and developed a data pipeline to scrape and analyze Instagram accounts for market intelligence purposes.",
                        "The previous summer, I was an Atlas Fellow and worked at Cisco to develop an engineering solution to improve the connected rail system in the United States.",
                        "I’m interested in entrepreneurship/startups and am looking to learn how to build scalable infrastructure and applications on a team."
                    ]}
                />
            </div>
        </>
    );
}