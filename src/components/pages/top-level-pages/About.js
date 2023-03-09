import React from "react";
import Header from "../../components/headers/Header";

const About = ({ page }) => {
    return (
        <>
            {page.content.map((block, i) => {
                return(
                    <div key={i} className="custom-panel container">
                        <div className="container">
                            <div className="row">
                                <div className=" col-12">
                                    <div className="row">
                                        <div className={`col-${block.image ? 6 : 12}`}>
                                            <Header 
                                                title={block.heading}
                                                textAlign="start"
                                                colWidth="12"
                                            />
                                            <p>{block.copy}</p>
                                        </div>
                                        {block.image
                                        ?
                                        <div className="col-6">
                                            <img className="w-100" src={block.image}/>
                                        </div>
                                        :
                                        null
                                        }
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