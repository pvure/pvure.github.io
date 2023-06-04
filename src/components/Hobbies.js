import React from "react";

import Card from "./StaticCard";
import Carousel from "./Carousel";



export default function Hobbies() {

    const data = [
        {
            imageLeft: true,
            src: "fire.jpg",
            theme: "light",

            title: "Hobby 1",
            blurb:[
                "Hobby 1 I’m a rising sophomore at Duke University studying CS and Electrical Engineering. My background is in algorithms and full-stack web development but recently, I’ve been developing programs for microcontrollers and exploring deep learning.",
                "Last summer (‘22), I was an Atlas Fellow and worked at Cisco to develop an engineering solution to improve the connected rail system in the U.S..",
                "This summer (‘23), I’ll be interning at Hotplate to develop an AI model to evaluate webscraped Instagram accounts to scale customer outreach.",
                "I’m interested in entrepreneurship and Effective Altruism and love to work on projects at the intersection of software and hardware."
            ]
        },

        {
            imageLeft: true,
            src: "fire.jpg",
            theme: "light",

            title: "Hobby 2",
            blurb:[
                "Hobby 2 I’m a rising sophomore at Duke University studying CS and Electrical Engineering. My background is in algorithms and full-stack web development but recently, I’ve been developing programs for microcontrollers and exploring deep learning.",
                "Last summer (‘22), I was an Atlas Fellow and worked at Cisco to develop an engineering solution to improve the connected rail system in the U.S..",
                "This summer (‘23), I’ll be interning at Hotplate to develop an AI model to evaluate webscraped Instagram accounts to scale customer outreach.",
                "I’m interested in entrepreneurship and Effective Altruism and love to work on projects at the intersection of software and hardware."
            ]
        },

        {
            imageLeft: true,
            src: "fire.jpg",
            theme: "light",

            title: "Hobby 3",
            blurb:[
                "Hobby 3 I’m a rising sophomore at Duke University studying CS and Electrical Engineering. My background is in algorithms and full-stack web development but recently, I’ve been developing programs for microcontrollers and exploring deep learning.",
                "Last summer (‘22), I was an Atlas Fellow and worked at Cisco to develop an engineering solution to improve the connected rail system in the U.S..",
                "This summer (‘23), I’ll be interning at Hotplate to develop an AI model to evaluate webscraped Instagram accounts to scale customer outreach.",
                "I’m interested in entrepreneurship and Effective Altruism and love to work on projects at the intersection of software and hardware."
            ]
        },
    ];

    return (
        <>
            <div id="hobbies" class="bg-hobbies items-center min-h-screen">
                <h1 class="text-4xl text-center py-[7vh] text-title-light">Hobbies</h1>

                <Carousel
                    data={data}
                />


            </div>
        
        </>
    );
}