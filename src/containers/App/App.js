import React from 'react';
import './App.css';
import Layout from '../../components/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;