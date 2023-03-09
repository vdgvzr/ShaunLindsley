import React from 'react';
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';

const Layout = ({ children, site, contact }) => {
    return (
        <div className="wrapper container-fluid">
            <div className="row">
                <div id="sidebar" className="col-lg-1 col-12 p-0">
                    <Nav pages={site?.pages || []} logo={site?.logo} />
                </div>
                <div id="content" className="col-lg-11 col-12 pt-lg-5 p-0">
                    <main id="main" className="">
                        {children}
                    </main>
                    <footer id="footer" className="py-4">
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