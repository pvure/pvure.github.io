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
                        <img class="rounded-xl lg:mr-10 " src={src}></img>

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

                        <img class="rounded-xl mt-5 lg:mt-0 lg:ml-10" src={src}></img>
                    </>
                }

            </div>
        
        </>
    );
}