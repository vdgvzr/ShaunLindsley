import React from "react";

const Home = ({ page }) => {
    return (
        <>
            <div className="main-header custom-panel">
                <h1 className="text-uppercase">
                    <span>
                        <span>{page.homepageHeader}</span>
                    </span>
                </h1>
                <h2 className="text-uppercase">
                    <span>{page.homepageStrapline}</span>
                </h2>
            </div>
        </>
    );
}

export default Home;