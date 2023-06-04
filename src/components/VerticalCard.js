import React from 'react';

import Blurb from './Blurb';

export default function VerticalCard(props) {

    return (
        <>
            <div class="flex-1 flex-col justify-center flex-wrap mx-10 mt-10">
                {/* props.src */}
                <img class="lg:mr-10 mt-5 lg:py-3 mx-auto rounded-xl" src="https://source.unsplash.com/1920x1080/?nature" />

                <Blurb
                    class="" 
                    theme={props.theme}

                    title={props.title}
                    blurb={props.blurb}

                    stack={props.stack}
                />
            </div>
        </>
    );
}