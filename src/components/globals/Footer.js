import React from "react";

const Footer = ({ pages, footerText, contact }) => {
    return (
        <footer className="footer custom-panel container">
            <ul className="nav justify-content-center pb-3 mb-3">
                {pages.map((page, i) => {
                    return (
                        <li className="nav-item" key={i}>
                            <a href={page.url} className="nav-link px-2">
                                {page.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <p className="text-center text-muted">{footerText}</p>
            <p className="text-center text-muted">{contact}</p>
        </footer>
    );
}

export default Footer;