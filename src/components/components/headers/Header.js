import React from "react";

const Header = ({ title, textAlign, colWidth }) => {
    return(
        <>
            <div className={`row justify-content-${textAlign}`}>
                <div className={`col-${colWidth} text-${textAlign}`}>
                    <h1 className="mb-5">{title}</h1>
                </div>
            </div>
        </>
    );
}

export default Header;