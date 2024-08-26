import React from 'react';

import VerticalCard from './VerticalCard';

export default function Gallery(props) {

    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap my-10">
                {
                    props.titles.map((title, index) => {
                        return (
                            <VerticalCard
                                key={index}
                                title={props.titles[index]}
                                src={props.srcs[index]}
                                blurb={props.blurbs[index]}
                                stack={props.stacks[index]}
                                theme={props.theme}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}