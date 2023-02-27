import React from "react";

const Footer = ({ pages, footerText }) => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    {pages.map((page, i) => {
                        return (
                            <li className="nav-item" key={i}>
                                <a href={page.url} className="nav-link px-2 text-muted">
                                    {page.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <p className="text-center text-muted">{footerText}</p>
            </footer>
        </div>  
    );
}

export default Footer;