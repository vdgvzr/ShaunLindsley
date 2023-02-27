import React from 'react';
import Nav from '../globals/Nav';
import Footer from '../globals/Footer';

const Layout = ({ children, site, contact }) => {
    return (
        <div className="">
            <div className="">
                <header className="">
                    <Nav pages={site?.pages || []} logo={site?.logo} />
                </header>
                <main className="container">
                    {children}
                </main>
                <footer className="">
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