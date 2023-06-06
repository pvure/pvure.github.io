import React from "react";

import Card from "./StaticCard";
import Carousel from "./Carousel";



export default function Hobbies() {

    const data = [
        {
            imageLeft: true,
            src: "fire.jpg",
            theme: "light",

            title: "Fire Spinning",
            blurb:[
                "I started performing with fire poi this past year. The heat of the flames and the sound of the fire engulfing the poi puts me in a state of flow that I can't find anywhere else.",
                "In my free time, I enjoy choreographing routines to music and practicing new tricks. I love the mathematical aspect of spinning poi and the challenge of creating and performing new patterns and sequences.",
                "Although spinning fire can be dangerous, I've never hurt anyone or unintentionally burned myself. I'm always careful and take the necessary safety precautions.",
                "I've been spinning LEDs for almost 5 years now, taught over 100 people how to spin poi, and performed dozens of times."
            ]
        },

        {
            imageLeft: true,
            src: "fire.jpg",
            theme: "light",

            title: "Mechanical Keyboards",
            blurb:[
                "I love everything that has to do with keyboards. In the past, I've built a couple of keyboards but now I'm more interested by the software side of the hobby.",
                "I've developed a couple of scripts to customize and increase the functionality of my keyboards. For example, I've repurposed the 12 function keys to serve as a macropad that utilizes chording to support over 4,000 programmable macros.",
                "I've made a few unorthodox changes to my keyboard in the name of typing ergonomics. I've replaced my Caps Lock with my Backspace key, my Caps Lock is on my right Alt key, and my Delete key is where my Backspace should be. I also use the Colemak keyboard layout instead of QWERTY. It took me a couple of years of iteration to get to this point, but I'm very happy with my current setup and can't imagine switching back."
            ]
        },

        {
            imageLeft: true,
            src: "fire.jpg",
            theme: "light",

            title: "Rock Climbing",
            blurb:[
                "I've been an avid climber for around four years now and have since become addicted to the rush of adrenaline and sense of achievement that comes with successfully completing challenging routes.",
                "I mostly stick to bouldering, but I'm planning on learning how to sport climb soon. Last fall, I got to climb outdoors and I'm hoping to do more outdoor climbing this summer."
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