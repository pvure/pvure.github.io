import { React } from 'react';

import Blurb from './Blurb';

export default function StaticCard(props) {
    let src = "../../" + props.src;

    return (
        <>
            <div className={"flex flex-wrap lg:flex-nowrap justify-center items-center mx-[10%]"}>

                {
                    props.imageLeft ?
                    <>
                        {
                            props.video ?

                            <video src={src} className="rounded-xl lg:mr-10" autoPlay loop muted />
                            :
                            <img className="rounded-xl lg:mr-10 " src={src} />
                        }

                        <Blurb 
                            className="flex flex-wrap" 
                            theme={props.theme}

                            title={props.title}
                            blurb={props.blurb}
                        />
                    </>
                    :
                    <>
                        <Blurb
                            className="" 
                            theme={props.theme}

                            title={props.title}
                            blurb={props.blurb}

                            stack={props.stack}
                        />

                        {
                            props.video ?

                            <video controls autoplay width="100%" className="rounded-xl lg:ml-10 w-[40vh]">
                                <source src={src} type="video/mp4" />
                            </video>
                            :
                            <img className="rounded-xl lg:ml-10 " src={src} />
                        }
                    </>
                }

            </div>
        
        </>
    );
}