import React from "react";
import Button from "../../components/buttons/Button";
import ProgressRing from "../../components/ui/ProgressRing";

const Resume = ({ page }) => {
    return (
        <div className="custom-panel">
            <div className="container">
                <div className="row">
                    {page.content.map((block, i) => {
                        return(
                            <div key={i} className=" col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="mb-3">{block.skills?.heading}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    {block.skills?.skills.map((skill, i) => {
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
                                {/* {block.resume} */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Resume;