import React from "react";
import Icon from "../icons/Icon";

const Button = ({ external, url, buttonText, download, type, icon }) => {
    return (
        <>
            <div className="mx-2">
                <a
                    type={type}
                    className="button"
                    target={external ? "_blank" : "_self"}
                    role={type}
                    href={url}
                    aria-label={buttonText}
                    download={download}
                >
                    <span>{buttonText}</span>
                    {icon
                    ? <Icon name={icon} color="#e0e1dd" height="30" width="50" />
                    :
                    null
                    }
                </a>
            </div>
        </>
    )
}

export default Button;