import React, { Component } from 'react';
import './CardBalance.css';
import Copy from './images/Copy.png';

class CardBalance extends Component {
    render() {
        return(
            <>
                <div className="cardbalance__container">
                    <div className="card">
                        <div className="card__details">
                            <p>Card Balance :</p>
                            <p className="card__digit">$3000.73</p>
                            <p>Name :</p>
                            <p className="card__name">Netflix Card</p>
                            <p>Card Status :</p>
                            <p className="card__name">Active</p>
                            <p>Billing Address :</p>
                            <p className="card__name">Patricia HQ, SA 1098277</p>
                            <p>Date Created :</p>
                            <p className="card__name">March 3rd 2020, 9:48:36am</p>
                        </div>
                        <button className="card__fund">Fund Card</button>
                        <img className="card__img" src={ Copy } alt="card copy" />
                    </div>     
                </div>
            </>
        )
    }
}

export default CardBalance;