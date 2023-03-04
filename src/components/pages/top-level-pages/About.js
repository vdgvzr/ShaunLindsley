import React from "react";

const About = ({ page }) => {
    return (
        <>
            {page.content.map((block, i) => {
                return(
                    <div key={i} className="custom-panel">
                        <div className="container">
                            <div className="row">
                                <div className=" col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <h2 className="mb-3">{block.heading}</h2>
                                            <p>{block.copy}</p>
                                        </div>
                                        <div className="col-6">
                                            <img className="w-100" src={block.image}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default About;