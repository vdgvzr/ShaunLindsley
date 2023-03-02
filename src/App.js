import React, { Component } from 'react'
import axios from 'axios'
import Layout from './components/layouts/Layout';
import Page from './components/pages/Page';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            site: null,
            contact: null,
            page: null
        }

        this.path = window.location.pathname;
        this.query = window.location.search;
    }

    componentDidMount() {
        /* Get site globals */
        axios.get("/site.json").then((response) => {
            console.log(response.data);
            const site = response.data;
            this.setState({ site });
        }).catch((error) => {
            console.error(error.message);
        });

        axios.get("/contactInfo.json").then((response) => {
            console.log(response.data);
            const contact = response.data;
            this.setState({ contact });
        }).catch((error) => {
            console.error(error.message);
        });

        /* Get singles */
        axios.get(this.path + '.json' + this.query).then((response) => {
            console.log(response.data);
            const page = response.data;
            this.setState({ page });
        }).catch((error) => {
            console.error(error.message);
        });
    }
    render() {
        return (
            <Layout 
                site={this.state.site}
                contact={this.state.contact}
            >
                <Page page={this.state.page} />
            </Layout>
        )
    }
}

export default App