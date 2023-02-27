import React from 'react'

const Page = ({ page }) => {

    if (page) {

        switch (page?.meta?.type) {
            case 'page':
                return <div>Page</div>
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