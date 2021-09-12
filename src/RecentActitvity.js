import React, { Component } from 'react';
import Mask from './images/Mask.png';
import MaskGroup from './images/Face.png';
import Groupicon from './images/Group 1350.png';
import Calendar from './images/Calendar.png';
import Download from './images/Download.png';
import Vector from './images/Group (1).png';
import Nike from './images/Nike.png';
import Starbucks from './images/Starbucks.png'
import Netflix from './images/Netflix.png'
import Cards from './images/Cards.png'
import Apple from './images/Apple.png'
import './RecentActivity.css'

class RecentActivity extends Component {
    render() {
        return(
            <div className="recent__container">
                <div className="recent__top">
                    <img className="recent__first" src={ Groupicon } alt="recent icon" />
                    <img className="recent__second" src={ MaskGroup } alt="recent icon" />
                    <img className="recent__third" src={ Mask } alt="recent icon" />
                </div>

                <div className="recent__holder">
            <div className="recent-activity__header">
              <p className="recent__p">Recent Activity</p>
              <div className="recent-activity__time">
                <img className="recent__calendar" src={ Calendar } alt="recent calendar" />
                <p className="recent__date">Start date: 01/02/21</p>
                <img className="recent__icon" src={ Download } alt="recent download" />
              </div>
            </div>
      
            <div className="data-container">
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--icon">
                    <img className="recent__img" src={ Vector } alt="recent" />
                  </p>
                  
                  <div className="data-item--name">
                    Amazon
                    <span className="recent__span">Just now</span>
                  </div>
                </div>
                <p className="recent__digits">$377.23</p>
              </div>
      
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--nike">
                    <img className="data__nike" src={ Nike } alt="nike" />
                  </p>
      
                  <div className="data-item--name">
                    Nike
                    <span className="recent__span">Today</span>
                  </div>
                </div>
                <p className="recent__digits">$237,737.55</p>
              </div>
      
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--starbucks">
                    <img className="recent__img" src={ Starbucks } alt="starbucks" />
                  </p>
      
                  <div className="data-item--name">
                    Starbucks
                    <span className="recent__span">Yesterday</span>
                  </div>
                </div>
                <p className="recent__digits">$873,873,834.3</p>
              </div>
      
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--netflix">
                    <img className="data__netflix" src={ Netflix } alt="netflix" />
                  </p>
      
                  <div className="data-item--name">
                    Netflix
                    <span className="recent__span">June 17</span>
                  </div>
                </div>
                <p className="recent__digits">$599</p>
              </div>
      
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--apple">
                    <img className="recent__img" src={ Cards } alt="cards" />
                  </p>
      
                  <div className="data-item--name">
                    Apple
                    <span className="recent__span">June 15</span>
                  </div>
                </div>
                <p className="recent__digits">$872</p>
              </div>
      
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--starbucks">
                    <img className="recent__img" src={ Starbucks } alt="starbucks" />
                  </p>
                    
                  <div className="data-item--name">
                    Starbucks
                    <span className="recent__span">June 13</span>
                  </div>
                </div>
                <p className="recent__digits">$244.55</p>
              </div>
              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--nike">
                    <img className="data__nike" src={ Nike } alt="nike" />
                  </p>
      
                  <div className="data-item--name">
                    Nike
                    <span className="recent__span">June 11</span>
                  </div>
                </div>
                <p className="recent__digits">$452</p>
              </div>

              <div className="data-item">
                <div className="data-item--description">
                  <p className="data-item--blue">
                    <img className="data__apple" src={ Apple } alt="apple" />
                  </p>
      
                  <div className="data-item--name">
                    Apple
                    <span className="recent__span">June 09</span>
                  </div>
                </div>
                <p className="recent__digits">$990</p>
              </div>
            </div>
            
          </div>
            </div>
            
            )
        }
    }
    
    export default RecentActivity;
