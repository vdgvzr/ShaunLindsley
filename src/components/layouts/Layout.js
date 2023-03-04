import React from 'react';
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';

const Layout = ({ children, site, contact }) => {
    return (
        <div className="wrapper container-fluid">
            <div className="wrapper__blur"></div>
            <div className="row">
                <div className="col-1">
                    <header id="sidebar" className="custom-panel">
                        <Nav pages={site?.pages || []} logo={site?.logo} />
                    </header>
                </div>
                <div className='col-11'>
                    <div id="content" className="row">
                        <div class="col-12">
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
                </div>
            </div>
        </div>
    );
}

export default Layout;