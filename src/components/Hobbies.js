import React from "react";
import Carousel from "./Carousel";



export default function Hobbies() {

    const data = [
        {
            imageLeft: true,
            src: "hobbies/fire.jpg",
            theme: "light",

            title: "Fire Spinning",
            blurb:[
                "I started performing with fire poi this past year. The heat of the flames and the sound of the fire engulfing the poi puts me in a state of flow that I can't find anywhere else.",
                "In my free time, I enjoy choreographing routines to music and practicing new tricks. I love the mathematical aspect of spinning poi and the challenge of creating and performing new patterns and sequences.",
                "I've been spinning poi for almost 5 years now, taught over 100 people how to spin, and performed dozens of times."
            ]
        },

        {
            imageLeft: true,
            src: "hobbies/keyboards.jpeg",
            theme: "light",

            title: "Mechanical Keyboards",
            blurb:[
                "I love everything that has to do with keyboards. In the past, I've built a couple of keyboards but now I'm more interested by the software side of the hobby.",
                "I've developed a couple of scripts to customize and increase the functionality of my keyboards. In one of them, I've repurposed the 12 function keys to serve as a macropad that utilizes chording to support over 4,000 programmable macros.",
                "I've made a few unorthodox changes to my keyboard over the course of a couple of years of iteration. I've swapped around a bunch of keys and I use the Colemak keyboard layout instead of the QWERTY one. All in the name of typing ergonomics."
            ]
        },

        {
            imageLeft: true,
            src: "hobbies/climbing.jpeg",
            theme: "light",

            title: "Rock Climbing",
            blurb:[
                "I've been climbing for around four years now. It's the only sport that I've really stuck with and I've been climbing whenever I get the chance. The rush of adrenaline and sense of achievement that comes with successfully completing challenging routes is addicting.",
                "I mostly stick to bouldering, but I find top roping equally fun. I want to learn how to sport climb sometime in the near future and I want to start climbing outdoors more frequently.",
                "I try to climb whenever I travel. I've climbed in gyms in 5 different states and have visited nearly 20 different gyms."
            ]
        },
    ];

    return (
        <>
            <div id="hobbies" className="bg-hobbies items-center min-h-screen">
                <h1 className="text-4xl text-center py-[7vh] text-title-light">Hobbies</h1>

                <Carousel
                    data={data}
                />


            </div>
        
        </>
    );
}