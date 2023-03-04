import React from "react";

const About = ({ page }) => {
    return (
        <>
            {page.content.map((block, i) => {
                return(
                    <div key={i} className="custom-panel">
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