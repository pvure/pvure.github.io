import { React, useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

import { BsCircleFill, BsCircle } from 'react-icons/bs';

import Blurb from './Blurb';


let variants = {
    enter: direction => ({ x: 100 * direction, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: direction => ({ x: -100 * direction, opacity: 0 }),
};

export default function Carousel(props) {

    useEffect(() => {
        props.data[0].src = props.data[0].src;
        props.data[1].src = props.data[1].src;
        props.data[2].src = props.data[2].src;
    }, []);


    let [count, setCount] = useState(0);
    let [prev, setPrev] = useState(count);
    let [dirScroll, setDirScroll] = useState(0);
    let [cooldown, setCooldown] = useState(false);
    let [clicked, setClicked] = useState(false);

    if (prev !== count) {
        setPrev(count);

        if (count == 0 && prev == props.data.length - 1) {
            setDirScroll(1);
        }
        else if (count == props.data.length - 1 && prev == 0) {
            setDirScroll(-1);
        }
        else {
            setDirScroll(count - prev / Math.abs(count - prev));
        }
    }

    let handleClick = (newCount) => {
        if (!cooldown) {
            setCount((newCount + props.data.length) % props.data.length);
            setCooldown(true);
            setClicked(true);
        }
    }

    useEffect(() => {
        if (cooldown) {
            setTimeout(() => {
                setCooldown(false);
            }, 500);
        }
    }, [cooldown]);

    // useEffect(() => {

    //     if (clicked) {
    //         return;
    //     }
    //     let interval = setInterval(() => {
    //         handleClick(count + 1 >= props.data.length ? 0 : count + 1);
    //         setClicked(false);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // })

    return (
        <>

            <div 
                class="flex flex-wrap lg:flex-nowrap justify-center items-center mx-10"
            >



                <MdOutlineKeyboardArrowLeft 
                    class="px-5 hover:cursor-pointer hidden lg:block"
                    size={150} 
                    onClick={() => handleClick(count - 1)} 
                />

                <AnimatePresence mode="wait" custom={dirScroll}>

                    <motion.div
                        class="flex flex-wrap lg:flex-nowrap justify-center items-center"

                        key={count}

                        variants={variants}

                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={dirScroll}
                        transition={{ type: "spring", duration: 0.35 }}
                    >

                        {
                            props.data.map((item, index) => {
                                return (
                                    
                                    index === count ?

                                    <>
                                        <img
                                            id={"carousel-image"}
                                            class="flex rounded-xl lg:mr-10 h-[60vh]"
                                            src={props.data[index].src}
                                        />

                                        <Blurb
                                            class="flex flex-wrap"
                                            theme={props.data[index].theme}

                                            title={props.data[index].title}
                                            blurb={props.data[index].blurb}
                                        />
                                    </>

                                    :
                                    <></>

                                )
                            })
                        }
                    
                    </motion.div>
                </AnimatePresence>

                <MdOutlineKeyboardArrowRight
                    class="px-5 hover:cursor-pointer hidden lg:block"
                    size={150} 
                    onClick={() => handleClick(count + 1)} 
                />

            </div>

            <motion.div class="flex items-center justify-center py-10">

                <MdOutlineKeyboardArrowLeft 
                    class="px-5 hover:cursor-pointer block lg:hidden"
                    size={80} 
                    onClick={() => handleClick(count - 1)} 
                />

                {
                    props.data.map((item, index) => {
                        return (
                            index === count ?
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ type: "spring", duration: 0.5 }}
                            
                            >
                                <BsCircleFill
                                    class="mx-2"
                                    size={10}
                                    color="#000000"
    
                                    onClick={() => handleClick(index)}
                                />
                            </motion.div>
                            :
                            <BsCircle
                                key={index}
                                class="mx-2 hover:cursor-pointer"
                                size={10}

                                onClick={() => handleClick(index)}
                            />
                                    
                        )
                    })
                }

                <MdOutlineKeyboardArrowRight
                    class="px-5 hover:cursor-pointer block lg:hidden"
                    size={80} 
                    onClick={() => handleClick(count + 1)} 
                />
            </motion.div>

        </>
    );
}