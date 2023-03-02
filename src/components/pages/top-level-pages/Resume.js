import React from "react";
import Button from "../../components/buttons/Button";

const Resume = ({ page }) => {
    return (
        <>
            {page.title}
            {page.content.map((block, i) => {
                return(
                    <div key={i}>
                        {block.skills?.heading}
                        {block.skills?.skills.map((skill, i) => {
                            return(
                                <div key={i}>
                                    <p>{skill.skillName}</p>
                                    <p>{skill.skillProficiency}</p>
                                </div>
                            )
                        })}
                        {block.resume}
                    </div>
                )
            })}
        </>
    );
}

export default Resume;