import React, { Component } from 'react';
import Arrow from './images/arrow-circle-left.png'
import './Header.css';

class Header extends Component {
    render() {
    return(
        <>
        <div className="header__container">
            <div className="header__title">
                <img className="header__icon" src={ Arrow } alt="arrow direction" />
                <p>Cards</p>
            </div>
            <div className="header__line">
                <hr></hr>
            </div> 
        </div>
        </>
    )
    }
}

export default Header