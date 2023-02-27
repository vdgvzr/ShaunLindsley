import React, { useState } from 'react';

const Nav = ({ pages, logo }) => {
    /* const [open, setOpen] = useState(false)
    const switchState = () => {
        setOpen(!open)
    } */

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <a className="navbar-brand" href="/">Shaun Lindsley</a>
                {/* {logo 
                    ?
                    <a href={window.location.host}>
                        <img src={logo} alt="logo" />
                    </a>    
                    :
                    <div></div>
                } */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100">
                        {pages.map((page, i) => {
                            const path = window.location.href
                            var classList = ''
                            
                            if (path === page.url) {
                                classList = 'nav-link active'
                            } else {
                                classList = 'nav-link'
                            }

                            return (
                                <li className="nav-item" key={i} >
                                    <a className={classList} href={page.url}>
                                        {page.title}
                                    </a>    
                                </li>
                            )
                        })}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;