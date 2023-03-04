import React from "react";
import Button from "../../components/buttons/Button";
import ProgressRing from "../../components/ui/ProgressRing";

const Resume = ({ page }) => {
    return (
        <>
            <div className="custom-panel">
                <div className="container">
                    <div className="row">
                        <div className=" col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="mb-3">{page.content[0].skills?.heading}</h2>
                                </div>
                            </div>
                            <div className="row">
                                {page.content[0].skills?.skills.map((skill, i) => {
                                    return(
                                        <div className="col-2" key={i}>
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
            <div className="custom-panel">
                <div className="container">
                    <div className="row">
                        <div className=" col-12">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <Button
                                        external={true}
                                        url={page.content[1].resume}
                                        buttonText="View Resume"
                                        download={false}
                                        type="button"
                                        icon="External"
                                    />
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