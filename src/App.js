import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from './components/layouts/Layout';

const App = () => {
    const [site, setSite] = useState(null);

    useEffect(() => {
        axios.get("/site.json").then((response) => {
            console.log(response.data);
            setSite(response.data);
        }).catch((error) => {
            console.error(error.message);
        });
    }, []);

    return (
        <Layout site={site}>
            Hello World!
        </Layout>
    )
}

export default App