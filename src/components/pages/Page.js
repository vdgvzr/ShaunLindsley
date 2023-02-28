import React from 'react';
import Home from './singles/Home';
import About from './top-level-pages/About';
import Resume from './top-level-pages/Resume';
import Contact from './top-level-pages/Contact';

const Page = ({ page }) => {

    if (page) {

        switch (page?.meta?.type) {
            case 'page':
                switch (page.title) {
                    case 'Home':
                        return <Home page={page} />
                    case 'About':
                        return <About page={page} />
                    case 'Resume':
                        return <Resume page={page} />
                    case 'Contact':
                        return <Contact page={page} />
                    default:
                        console.error('Unknown page.');
                }
            default:
                console.error('Unknown content type.');
        }
    }
    return (
        <>
        </>
    );
}

export default Page;