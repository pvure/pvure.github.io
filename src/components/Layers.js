import { React, useRef } from 'react';

import { motion, useTransform, useScroll } from "framer-motion";

export default function Layers() {

    // let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    // let ref = useRef(null);
    // let { scrollY } = useScroll({
    //     target: ref,
    //     offset: ["start start", "end start"],
    // });
    // let y = useTransform(scrollY, [0, windowHeight], ["0%", "50%"]);
    // let scale = useTransform(scrollY, [0, windowHeight], [1, 0.8]);

    return (
        <>
            <motion.img
                src="../../waves/layered_waves.svg"
                class="w-full h-full translate-y-1"
            />
            {/* <motion.div style={{ y }} class="">
 
            </motion.div> */}
            {/* <motion.div class="absolute -z-40 -mt-[16vh]">
                <img src="../../wave1.svg" />

            </motion.div>
            <motion.div class="absolute -z-30 -mt-[13vh]">
                <img src="../../wave2.svg" />

            </motion.div>
            <motion.div class="absolute -z-20 -mt-[8vh]">
                <img src="../../wave3.svg" />

            </motion.div>
            <motion.div class="absolute -z-10 -mt-[4vh]">
                <img src="../../wave4.svg" />

            </motion.div> */}
        </>
    );
}