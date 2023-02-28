import React from 'react'

const Page = ({ page }) => {

    if (page) {

        switch (page?.meta?.type) {
            case 'page':
                switch (page.title) {
                    case 'Home':
                        return <div>{page.homepageHeader}</div>
                    case 'About':
                        return <div>{page.text}</div>
                    case 'Resume':
                        return <div>{page.text}</div>
                    case 'Contact':
                        return <div>{page.text}</div>
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