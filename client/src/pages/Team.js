import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Team extends Component {
    render() {
        return(
            <div>
                <Header/>
                <p>Team Page</p>
                <Footer/>
            </div>
        )
    }
}