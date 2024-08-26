import React from "react";

import StaticCard from "./StaticCard";
import Gallery from "./Gallery";
import VerticalCard from "./VerticalCard";

export default function Projects() {
    return (
        <>
            <div id="projects" className="bg-projects items-center min-h-screen pb-5 lg:pb-10">
                <h1 className="text-4xl text-center py-[7vh]">Projects</h1>

                <div className="hidden lg:block">
                    <StaticCard
                        imageLeft={false}
                        src="projects/poi_detection_demo_vertical.mp4"
                        video={true}
                        theme="light"

                        title="Pattern Tracking with Poi"
                        blurb={[
                            "I built an application that helps performers track the movement of their props with computer vision.",
                            "In the past, I've taught how to spin poi, a prop that relies on recreating patterns called \"flowers,\" which can be represented by parametric equations.",
                            "Computer vision is used to extract the relative coordinates of the poi and regression is used to evaluate how accurate the patterns that performers create with their poi are to their graphical counterparts.",
                            "In the video, the model detects the location of the poi (blue) and uses gradient descent to find the best fit for the parametric equation of the flower (red).",
                            "The model is built with YOLOv5 trained on a custom dataset and the computation and analysis is done in Python."
                        ]}
                        stack="Python, Pytorch, Numpy, Matplotlib"
                    />
                </div>

                <div className="block lg:hidden">
                    <VerticalCard
                        src="projects/poi.png"
                        theme="light"
                        extraClasses="h-[60vh]"

                        title="Pattern Tracking with Poi"
                        blurb={[
                            "I built an application that helps performers track the movement of their props with computer vision.",
                            "In the past, I've taught how to spin poi, a prop that relies on recreating patterns called \"flowers,\" which can be represented by parametric equations.",
                            "Computer vision is used to extract the relative coordinates of the poi and regression is used to evaluate how accurate the patterns that performers create with their poi are to their graphical counterparts.",
                            "The model is built with YOLOv5 trained on a custom dataset and the computation and analysis is done in Python.",
                            "A video is viewable on the desktop version of this site.",
                        ]}
                        stack="Python, Pytorch, Numpy, Matplotlib"
                    />
                </div>

                <Gallery 
                    theme="light"
                    titles={["WalletWatchers", "Quarcade"]}
                    srcs={["projects/walletwatchers.png", "projects/quarcade.png"]}

                    blurbs={[
                        [
                            "WalletWatchers is a financial tracker that aggregates information across multiple bank accounts to generate spending and budgeting insights.",
                            "Created API endpoints to fetch financial data the Plaid API, which is stored using SQLite. The website is built with NextJS and TailwindCSS.",
                            "Schema was designed with E-R diagrams and testing datasets were developed and generated in Python using Faker to test app functionality."
                        ],
                        [
                            "Quarcade is a fullstack online game platform that supports real-time interactions between users. Players can join lobbies using a generated room code, and can vote to play a multiplayer version of the game Bananagrams.",
                            "User data is stored in MongoDB and Websockets are used to facilitate communication between users. The website wireframe was developed in Figma.",
                            "This project was developed through Stuyvesant's Google Mentorship program. At the end of our project, we presented our project to Google employees.",
                        ],
                    ]}

                    stacks={[
                        ["NextJS, TailwindCSS, SQLite, Plaid API, Python"],
                        ["ReactJS, MongoDB, Express, Node.js, Socket.io, Figma"],
                    ]}
                
                />

            </div>



        </>
    );
}