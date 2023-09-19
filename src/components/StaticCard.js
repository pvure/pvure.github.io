import { React } from 'react';

import Blurb from './Blurb';

export default function StaticCard(props) {
    let src = "../../" + props.src;

    return (
        <>
            <div class={"flex flex-wrap lg:flex-nowrap justify-center items-center mx-[10%]"}>

                {
                    props.imageLeft ?
                    <>
                        {
                            props.video ?

                            <video src={src} class="rounded-xl lg:mr-10" autoPlay loop muted />
                            :
                            <img class="rounded-xl lg:mr-10 " src={src} />
                        }

                        <Blurb 
                            class="flex flex-wrap" 
                            theme={props.theme}

                            title={props.title}
                            blurb={props.blurb}
                        />
                    </>
                    :
                    <>
                        <Blurb
                            class="" 
                            theme={props.theme}

                            title={props.title}
                            blurb={props.blurb}

                            stack={props.stack}
                        />

                        {
                            props.video ?

                            <video controls autoplay width="100%" class="rounded-xl lg:ml-10 w-[40vh]">
                                <source src={src} type="video/mp4" />
                            </video>
                            :
                            <img class="rounded-xl lg:ml-10 " src={src} />
                        }
                    </>
                }

            </div>
        
        </>
    );
}