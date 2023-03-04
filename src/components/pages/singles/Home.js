import React from "react";

const Home = ({ page }) => {
    return (
        <>
            <div className="main-header custom-panel">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 text-center">
                            <h1 className="text-uppercase">
                                <span>
                                    <span>{page.homepageHeader}</span>
                                </span>
                            </h1>
                            <h2 className="text-uppercase">
                                <span>{page.homepageStrapline}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;