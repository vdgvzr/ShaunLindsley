import React from "react";
import Header from "../../components/headers/Header";

const Home = ({ page }) => {
    return (
        <>
            <div className="main-header custom-panel container">
                <div className="row align-items-center h-100">
                    <div className="col-12 text-center">
                        <Header 
                            title={page.homepageHeader}
                            textAlign="center"
                            colWidth="12"
                        />
                        <h2 className="text-uppercase">
                            <span>{page.homepageStrapline}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;