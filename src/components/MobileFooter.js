import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";


export default function Footer() {
    return (
        <>

            <div class="flex-col flex justify-between bg-footer p-10">
                <div class="flex-col px-10">
                    <h1 class="text-2xl text-title-light">Contact</h1>
                    <p class="text-lg text-blurb-light py-3 w-[70%]">Building a cool project or idea? Feel free to reach out! I’m always open to working on a new project with others. </p>
        
                    <p class="text-lg text-blurb-light">aaronhsu4606@gmail.com | @aaaronhsu</p>
                </div>

                <div class="flex justify-center mt-5">
                    <motion.a 
                        class="mx-3 mt-3"
                        href="https://github.com/aaaronhsu" 
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            duration: 0.3
                        }}
                    >
                        <FaGithub class="my-2" size={30} color="#000000" />
                    </motion.a>
                    <motion.a 
                        class="mx-3 mt-3"
                        href="https://www.linkedin.com/in/aaron-hsu4606/" 
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            duration: 0.3
                        }}
                    >
                        <FaLinkedin class="my-2" size={30} color="#000000" />
                    </motion.a>
                    <motion.a 
                        class="mx-3 mt-3"
                        href="https://www.instagram.com/aaaronhsu/" 
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            duration: 0.3
                        }}
                    >
                        <FaInstagram class="my-2" size={30} color="#000000" />
                    </motion.a>
                </div>


            </div>
        </>
    );
}