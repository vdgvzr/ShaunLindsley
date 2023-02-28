import React from "react";

const Button = ({ external, url, buttonText }) => {
    return (
        <>
            <div className="">
                <a
                    type="button"
                    
                    className="btn btn-primary"
                    target={external ? "_blank" : "_self"}
                    role="button"
                    href={url}
                    aria-label=""
                >
                    <span>{buttonText}</span>
                </a>
            </div>
        </>
    )
}

export default Button;