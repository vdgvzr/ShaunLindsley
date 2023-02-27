import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [site, setSite] = useState(null);

    useEffect(() => {
        axios.get("/site.json").then((response) => {
            console.log(response.data)
            setSite(response.data);
        }).catch((error) => {
            console.error(error.message)
        });
    }, []);

    return (
        <div>
            Hello world!
        </div>
    )
}

export default App