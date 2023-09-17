import React from "react";

import StaticCard from "./StaticCard";
import Gallery from "./Gallery";
import VerticalCard from "./VerticalCard";

export default function Projects() {
    return (
        <>
            <div id="projects" class="bg-projects items-center min-h-screen pb-5 lg:pb-10">
                <h1 class="text-4xl text-center py-[7vh]">Projects</h1>

                <div class="hidden lg:block">
                    <StaticCard
                        imageLeft={false}
                        src="projects/poi_detection_demo_vertical.mp4"
                        video={true}
                        theme="light"

                        title="Pattern Tracking with Poi"
                        blurb={[
                            "Currently, I'm working on creating an application that helps performers track the movement of their props with computer vision.",
                            "In the past, I've taught how to spin poi, a prop that relies on recreating patterns called flowers. It's difficult for some to visualize flowers, but since these patterns can easily be represented with parametrics, it is possible to recreate these flowers graphically.",
                            "Computer vision is used to extract the relative coordinates of the poi and regression is used to evaluate how accurate the patterns that performers create with their poi are to their graphical counterparts. Advice is then given to the performer to improve their accuracy.",
                            "The model is built with YOLOv5 trained on a custom dataset and the computation and analysis is done in Python."
                        ]}
                        stack="Python, Pytorch, Numpy, Matplotlib"
                    />
                </div>

                <div class="block lg:hidden">
                    <VerticalCard
                        src="projects/poi.png"
                        theme="light"
                        extraClasses="h-[60vh]"

                        title="Pattern Tracking with Poi"
                        blurb={[
                            "Currently, I'm working on creating an application that helps performers track the movement of their props with computer vision to improve their performance.",
                            "In the past, I've taught how to spin poi, a prop that relies on recreating patterns called flowers. It's difficult for some to visualize flowers, but since these patterns can easily be represented with parametrics, it is possible to recreate these flowers graphically.",
                            "Computer vision is used to extract the relative coordinates of the poi and regression is used to evaluate how accurate the patterns that performers create with their poi are to their graphical counterparts. Advice is then given to the performer to improve their accuracy.",
                            "The model is built on YOLOv5 trained on a custom dataset and the computation and analysis is done in Python.",
                        ]}
                        stack="Python, Pytorch, Numpy, Matplotlib"
                    />
                </div>

                <Gallery 
                    theme="light"
                    titles={["Quarcade", "Book Drop Notification System"]}
                    srcs={["projects/quarcade.png", "projects/book_drop.png"]}

                    blurbs={[
                        [
                            "Quarcade is a fullstack online game platform that supports real-time interactions between users. Players can join lobbies using a generated room code, and can vote to play a multiplayer version of the game Bananagrams.",
                            "User data is stored in MongoDB and Websockets are used to facilitate communication between users. The website wireframe was developed in Figma.",
                            "This project was developed through Stuyvesant's Google Mentorship program. At the end of our project, we presented our project to Google employees.",
                        ],
                        [
                            "This Arduino-based device installed in Duke University's Perkins Library notifies librarians when a bin is full of books.",
                            "The system is built with multiple ESP-32 microcontrollers that post and retrieve data from Firebase. Books are sensed with an ultrasound and IR beam breaker and all components are housed in a custom-designed 3D-printed case. An accompanying React-based website allows librarians to monitor the status of the system.",
                            "The system was built for the Duke University Libraries. During the school year, it is expected to reduce retrieval trips by 80% and save Duke librarians 2 hrs/wk."
                        ]
                    ]}

                    stacks={[
                        ["ReactJS, MongoDB, Express, Node.js, Socket.io, Figma"],
                        ["Arduino & Micropython, CAD, ESP-32/Raspberry Pi, Firebase, ReactJS, Tailwind"]
                    ]}
                
                />

            </div>



        </>
    );
}