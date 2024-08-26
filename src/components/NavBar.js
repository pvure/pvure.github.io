import React from 'react';

import { motion } from "framer-motion";

export default function NavBar() {

    return (
        <>
            <motion.div 
                className="flex flex-row justify-between items-center w-full p-5 -mb-[5vh]"
                id="navbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.5
                }}
            >

                <motion.a
                    href="#hero"
                    className="text-lg text-blurb-light px-5"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        duration: 0.3
                    }}
                >
                    
                </motion.a>

                <div className="flex flex-row">
                    <motion.a

                        href="#about"
                        className="z-10 text-lg text-blurb-light px-5"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            duration: 0.2
                        }}
                    >
                        <h2>About</h2>   
                    </motion.a>
                    <motion.a
                        href = "#projects"
                        className="z-10 text-lg text-blurb-light px-5"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            duration: 0.2
                        }}
                    >
                        <h2>Projects</h2>  
                    </motion.a>
                    <motion.a

                        href="#hobbies"
                        className="z-10 text-lg text-blurb-light px-5"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            duration: 0.2
                        }}
                    >
                        <h2>Hobbies</h2>  
                    </motion.a>

                </div>
            </motion.div>
        </>
    );
}