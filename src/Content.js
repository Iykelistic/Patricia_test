import React, { Component } from 'react';
import Header from './Header';
import VirtualCard from './VirtualCard';
import CardBalance from './CardBalance';

class Content extends Component {

    render() {
        return(
            <>
                <div className="content__holder">
                    <Header />
                    <VirtualCard />
                    <CardBalance />
                </div>
            </>
        )
    }
}

export default Content;