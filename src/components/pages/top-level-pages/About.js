import React from "react";

const About = ({ page }) => {
    return (
        <>
            {page.title}
            {page.content.map((block, i) => {
                return(
                    <div key={i}>
                        <div>{block.heading}</div>
                        <div>{block.copy}</div>
                        <div>{block.image}</div>
                    </div>
                )
            })}
        </>
    );
}

export default About;