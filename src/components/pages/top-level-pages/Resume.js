import React from "react";
import Button from "../../components/buttons/Button";

const Resume = ({ page }) => {
    return (
        <>
            <div>{page.text}</div>
            <Button 
                external={true}
                url={page.resume}
                buttonText="View Resume"
            />
        </>
    );
}

export default Resume;