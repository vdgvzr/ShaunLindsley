import React from "react";
import Button from "../../components/buttons/Button";
import ProgressRing from "../../components/ui/ProgressRing";
import Header from "../../components/headers/Header";

const Resume = ({ page }) => {
    return (
        <>
            <div className="custom-panel container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Header 
                                title={page.content[0].skills?.heading}
                                textAlign="center"
                                colWidth="12"
                            />
                            <div className="row">
                                {page.content[0].skills?.skills.map((skill, i) => {
                                    return(
                                        <div className="col-lg-2 col-sm-6 col-12" key={i}>
                                            <ProgressRing
                                                radius={60}
                                                stroke={4}
                                                title={skill.skillName}
                                                progress={skill.skillProficiency}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-panel container">
                <div className="container">
                    <div className="row">
                        <div className=" col-12">
                            <div className="row">
                                <div className="col-lg-6 col-12 my-3 my-lg-0 d-flex justify-content-lg-end justify-content-center">
                                    <Button
                                        external={true}
                                        url={page.content[1].resume}
                                        buttonText="View Resume"
                                        download={false}
                                        type="button"
                                        icon="External"
                                    />
                                </div>
                                <div className="col-lg-6 col-12 my-3 my-lg-0 d-flex justify-content-lg-start justify-content-center">
                                    <Button
                                        external={false}
                                        url={page.content[1].resume}
                                        buttonText="Download Resume"
                                        download={true}
                                        type="button"
                                        icon="Download"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;