import React from 'react';
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';

const Layout = ({ children, site, contact }) => {
    return (
        <div className="wrapper">
            <div class="wrapper__blur"></div>
            <header id="sidebar" className="custom-panel">
                <Nav pages={site?.pages || []} logo={site?.logo} />
            </header>
            <div id="content" className="container-fluid">
                <main id="main" className="">
                    {children}
                </main>
                <footer id="footer" className="footer custom-panel">
                    <Footer
                        pages={site?.pages || []}
                        footerText={site?.footerText} 
                        contact={contact?.emailAddress}
                    />
                </footer>
            </div>
        </div>
    );
}

export default Layout;