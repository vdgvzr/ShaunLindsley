import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from './components/layouts/Layout';
import Page from './components/pages/Page';

const App = () => {
    const [page, setPage] = useState(null);
    const [site,setSite] = useState(null);

    const path = window.location.pathname;
    const query = window.location.search;

    /* Get site globals */
    useEffect(() => {
        axios.get("/site.json").then((response) => {
            console.log(response.data);
            setSite(response.data);
        }).catch((error) => {
            console.error(error.message);
        });
    }, []);

    /* Get singles */
    useEffect(() => {
        axios.get(path + '.json' + query).then((response) => {
            console.log(response.data)
            setPage(response.data);
        }).catch((error) => {
            console.error(error.message)
        });
    }, [path, query]);

    return (
        <Layout site={site}>
            <Page page={page} />
        </Layout>
    )
}

export default App