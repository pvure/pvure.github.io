import { React } from "react";

import StaticCard from "./StaticCard";

export default function About() {

    // if the height of the about div is < windowHeight, set w-[100vh]

    return (
        <>
            <div id="about" class={"bg-about min-h-screen py-10 flex items-center"}>
                <StaticCard 
                    class="sticky top-0"
                    imageLeft={true}
                    src="top.png"
                    theme="dark"

                    title="About Me"
                    blurb={[
                        "I’m a rising sophomore at Duke University studying CS and Electrical/Computer Engineering. My background is in algorithms and web development but recently, I’ve been developing programs for microcontrollers and exploring deep learning.",
                        "Last summer (‘22), I was an Atlas Fellow and worked at Cisco to develop an engineering solution to improve the connected rail system in the U.S..",
                        "This summer (‘23), I’ll be interning at Hotplate to develop an AI model to evaluate webscraped Instagram accounts to scale customer outreach.",
                        "I’m interested in entrepreneurship and Effective Altruism and enjoy working on projects at the intersection of software and hardware."
                    ]}
                />
            </div>
        </>
    );
}