import React, { Component } from 'react';
import './VirtualCard.css';
import Group1750 from './images/Group 1750.png';
import Monotone from './images/Monotone.png';
import Extrasmall from './images/Extrasmall.png';
import DollarCard from './images/Mask Group (1).png';
import Card from './images/blur.png';

class VirtualCard extends Component {

    render() {
        return(
             <>
                <div className="virtualcard__container">
                    <div className="virtualcard__component">
                        <div className="virtualcard__details">
                            <img className="virtualcard__icon" src={ Group1750 } alt="virtualcard icon" />
                            <p className="paragraph">Virtual Card <br /><span> Lorem Ipsum dolor sit ame </span></p>
                            <img className="virtualcard__img" src={ Monotone } alt="virtualimage" />
                        </div>
                        <div className="virtualcard__create">
                            <img className="virtualcard__yellow" src={ Extrasmall } alt="virtualcard small" />
                        </div>   
                    </div>
                    <div className="virtualcard__card">
                        <img className="virtualcard__dollar" src={ DollarCard } alt="dollar card" />
                    </div>
                    <div className="virtualcard__cards">
                        <img className="virtualcard__blur" src={ Card } alt="blur card" />
                    </div>
                    <div className="virtualcard__button">
                        <button className="freeze">Freeze Card</button>
                        <button className="delete">Delete Card</button>
                    </div>
                </div>
            </>
        )
    }
}

export default VirtualCard;