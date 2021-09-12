import React, { Component } from 'react';
import Group from './images/Group.png';
import Dashboard from './images/Dashboard.png'
import Activity from './images/Activity.png'
import Wallet from './images/Wallet.png'
import Product from './images/Products.png'
import gift from './images/gift.png'
import Help from './images/Help.png'
import './Sidebar.css';

class Sidebar extends Component {

    render() {
        return(
            <>
                <div className="sidebar__container">
                    <div className="sidebar__header">
                        <img className="sidebar__logo" src={ Group } alt="patricia logo"/>
                    </div>

                    <div className="sidebar__icons">
                        <div className="dashboard">
                            <div>
                            <img className="sidebar__dashboard" src={ Dashboard } alt="dashboard logo" />
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <div className="activity">
                            <div>
                            <img className="sidebar__activity" src={ Activity } alt="activity logo" />
                            </div>
                            
                            <p>Activity</p> 
                        </div>
                        <div className="wallet">
                            <div>
                            <img className="sidebar__wallet" src={ Wallet } alt="wallet logo" />
                            </div>
                            
                            <p>Wallet</p>
                        </div>
                        <div className="product">
                            <div>
                                <img className="sidebar__product" src={ Product } alt="product logo" /> 
                            </div>
                            
                            <p>Product</p>
                        </div>
                        <div className="referrals">
                            <div>
                                <img className="sidebar__referrals" src={ gift } alt="gift logo" /> 
                            </div>
                            
                            <p>Referrals</p>
                        </div>
                    </div>
                    <div className="help">
                        <img className="sidebar__help" src={ Help } alt="help logo" />
                        <p>Help Center</p>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Sidebar;