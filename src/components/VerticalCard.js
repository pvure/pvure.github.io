import React from 'react';

import Blurb from './Blurb';

export default function VerticalCard(props) {

    let extraClasses = props.extraClasses ? " " + props.extraClasses : " h-[20vh] lg:h-[40vh]";

    return (
        <>
            <div class="flex-1 flex-col justify-center flex-wrap mx-10 mt-10">
                {/* props.src */}
                <img class={"lg:mr-10 mt-5 lg:py-3 mx-auto my-auto rounded-xl" + extraClasses} src={props.src} />

                <Blurb 
                    theme={props.theme}

                    title={props.title}
                    blurb={props.blurb}

                    stack={props.stack}
                />
            </div>
        </>
    );
}