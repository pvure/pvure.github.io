import React from 'react';

import { motion } from 'framer-motion';

export default function Blurb(props) {

    let theme = props.theme;

    let titleClasses = theme === "light" ? " text-3xl text-title-light" : " text-4xl text-title-dark";
    let blurbClasses = theme === "light" ? " text-xl text-blurb-light" : " text-xl text-blurb-dark";

    return (
        <>

            <div class="flex-col mt-[7%] lg:mt-0">

                <h1 class={"my-2" + titleClasses}>{props.title}</h1>

                {
                    props.animate === undefined ?
                    props.blurb.map((paragraph) => {
                        return <p key={paragraph.key} class={"mt-3 " + blurbClasses}>{paragraph}</p>
                    })
                    :

                    props.fade == true ?
                    
                    props.blurb.map((paragraph, index) => {
                        return <motion.p
                            key={paragraph.key}
                            class={"mt-3 " + blurbClasses}

                            initial={{ opacity: 0, y: 20 }}
                            animate={ props.scrollPercent > 10 ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.2,
                                delay: props.animate[index]
                            }}
                            viewport={{ once: true }}
                        >
                            {paragraph}
                        </motion.p>
                    })
                    :
                    props.blurb.map((paragraph, index) => {
                        return <motion.p 
                            key={paragraph.key}
                            class={"mt-3 " + blurbClasses}

                            initial={{ opacity: 0 }}
                            animate={props.scrollPercent > props.animate[index] ? { opacity: 1 } : {}}
                            transition={{
                                duration: 0.2
                            }}

                        >
                            {paragraph}
                        </motion.p>
                    })
                }

                {
                    props.stack ?
                    <h3 class="mt-3 mb-5"><b>{props.stack}</b></h3>
                    :
                    <></>
                }

            </div>
        
        </>
    );
}