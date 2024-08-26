import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Hero() {

    let src = "../../layered_waves.svg";

    return (
        <>
            <motion.div 
                id="hero"
                className="pt-[30vh] lg:pt-[33vh] flex flex-col items-center"
                initial={{ height: "100vh"}}
                animate={{ height: "77vh"}}

                transition={{ duration: 5, delay: 0, type: "spring", stiffness: 20 }}

            >
                <motion.h1 
                    className="text-center text-4xl px-[2vh] lg:px-0 "
                    initial={{ y: "1vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}

                    transition={{ duration: 0.5, delay: 0 }}
                >
                    <i>Hi, my name is</i> <b>Aaron Hsu</b>
                </motion.h1>

                {/* <motion.hr 
                    className="w-[40%] border my-4" 
                    initial={{ y: "1vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}

                    transition={{ duration: 0.3, delay: 0.3 }}
                /> */}

                <motion.hr 
                    className="border my-4" 
                    initial={{ width: 0 }}
                    animate={{ width: "35%" }}

                    transition={{ duration: 0.5, delay: 0.3, type: "easeOut" }}
                />

                {/* <div className="flex">
                    <motion.h1 
                        className="text-center text-2xl text-blurb-light pl-1.5"
                        initial={{opacity: 0 }}
                        animate={{opacity: 1 }}

                        transition={{ duration: 0.3, delay: 0.8 }}
                    >
                        Maker,
                    </motion.h1>
                    <motion.h1 
                        className="text-center text-2xl text-blurb-light pl-1.5"
                        initial={{opacity: 0 }}
                        animate={{opacity: 1 }}

                        transition={{ duration: 0.3, delay: 1.4}}
                    >
                        Developer,
                    </motion.h1>
                    <motion.h1 
                        className="text-center text-2xl text-blurb-light pl-1.5"
                        initial={{opacity: 0 }}
                        animate={{opacity: 1 }}

                        transition={{ duration: 0.3, delay: 2}}
                    >
                        Artist
                    </motion.h1>
                </div> */}

                {/* <h1 className="text-center text-2xl text-blurb-light">Maker, Developer, Artist</h1> */}

                <motion.div 
                    className="flex mt-3.5"
                    initial={{opacity: 0 }}
                    animate={{opacity: 1 }}

                    transition={{ duration: 0.5, delay: 0.8}}
                >
                    <motion.a 
                        href="https://github.com/aaaronhsu" 
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            duration: 0.3
                        }}
                    >
                        <FaGithub className="mx-2" size={36} color="#000000" />
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/aaron-hsu4606/" 
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            duration: 0.3
                        }}
                    >
                        <FaLinkedin className="mx-2" size={36} color="#0A66C2" />
                    </motion.a>
                    <motion.a 
                        href="https://www.instagram.com/aaaronhsu/" 
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            duration: 0.3
                        }}
                    >
                        <FaInstagram className="mx-2" size={36} color="#E4405F" />
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* <img src={src} className="absolute bottom-0" /> */}
        
        </>
    );
}