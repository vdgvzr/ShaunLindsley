import React from "react";

const Button = ({ external, url, buttonText, download, type }) => {
    return (
        <>
            <div className="">
                <a
                    type={type}
                    className="btn btn-primary"
                    target={external ? "_blank" : "_self"}
                    role={type}
                    href={url}
                    aria-label={buttonText}
                    download={download}
                >
                    <span>{buttonText}</span>
                </a>
            </div>
        </>
    )
}

export default Button;