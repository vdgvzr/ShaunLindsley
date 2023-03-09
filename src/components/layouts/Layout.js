import React from 'react';
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';

const Layout = ({ children, site, contact }) => {
    return (
        <div className="wrapper container-fluid">
            <div className="wrapper__blur"></div>
            <div className="row">
                <div className="col-lg-1 col-12">
                    <header id="sidebar" className="">
                        <Nav pages={site?.pages || []} logo={site?.logo} />
                    </header>
                </div>
                <div id="content" className="col-lg-11 col-12">
                    <main id="main" className="">
                        {children}
                    </main>
                    <footer id="footer" className="">
                        <Footer
                            pages={site?.pages || []}
                            footerText={site?.footerText} 
                            contact={contact?.emailAddress}
                        />
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Layout;