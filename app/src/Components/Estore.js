import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './css/Estore.css';


class Estore extends Component {

  render() {
    return (
      <div className="Estore">
        <div className="col-lg-12">
          <div className="parity-container-app">
            <div className="estore-header">
              <div id="estore-ethereum">ethereum</div>
              <div id="estore-store">STORE</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="parity-container-app">
            <div className="app-image">
              <svg id="oraclize" width="79.4px" height="79.5px">
                <g style={{fill: "#3B5560"}}>
                  <path d="M56.1,15.8c-0.8-0.6-1.5-1.5-1.9-2.4c-1-2-2.5-2.7-4.5-2.2
                    c-1.8,0.5-2.7,1.9-2.5,3.8c0.2,2,2,3.1,4.2,3.1c0.9,0,2,0.1,2.7,0.6c8.8,6.2,12.4,19,8.2,29.1c-4.5,10.9-15.8,17.6-26.8,15.6
                    c-2.8-0.5-5.5-1.8-8.3-2.5c-0.5-0.1-1.1,0-1.6,0.2c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.2-0.2,0.5-0.3,0.7c0,0.1,0,0.2,0,0.3
                    c0.1,0.3,0.3,0.6,0.5,1c0.3,0.3,0.6,0.6,0.8,1c0.2,0.1,0.4,0.2,0.6,0.3c18.9,8.7,40.5-5.1,40.6-25.9C67.4,29.6,63.3,21.3,56.1,15.8
                    z"/>
                  <path d="M0,38.4C0.2,31.7,1.7,25,5.5,19c0.7-1.1,1.3-3,3.1-2
                    c1.8,1,0.6,2.5-0.1,3.7C3.3,29.6,1.9,39,5.1,48.8c4.4,13.5,13.8,21.6,27.8,24.4c2,0.4,3.9,1,5.9-0.8c1.2-1.1,3.2-0.7,4.4,1
                    c1.1,1.5,1,3-0.2,4.3c-1.3,1.4-2.8,1.6-4.5,0.8c-1.6-0.7-3.3-1.5-5-1.7C14.5,74.2,0,57.7,0,38.4z"/>
                  <path d="M40.3,0c14.1,0.7,25.9,7.6,33.2,21.6c0.4,0.8,0.5,2.4,0,2.8
                    c-1.6,1.4-2.5-0.1-3.1-1.4c-2.8-5.6-6.9-10.2-12.1-13.7c-11.3-7.6-27-7.9-38.3-0.5c-0.8,0.5-1.4,1.6-1.7,2.5c-0.7,2-2,3.1-4.1,2.8
                    c-2-0.3-3.2-1.6-3.1-3.6c0.2-2.1,1.5-3.2,3.7-3.4c0.9-0.1,1.9-0.5,2.7-1C24.1,2.1,31.2,0.1,40.3,0z"/>
                  <path d="M38.4,10.1c0.3,0.2,1.7,0.8,1.9,1.6c0.3,1.9-1.4,1.8-2.8,1.9
                    c-17.3,1.1-28.3,18-22.2,34.1c0.7,1.9,1.5,3.6,3.7,4.3c1.8,0.6,2.3,2.4,1.6,3.9c-0.5,1.1-1.9,2.4-3,2.4c-1.2,0-3.4-1.3-3.4-2
                    c0-4.6-2.9-8.2-3.7-12.5C7.5,26.9,20.3,10.7,38.4,10.1z"/>
                  <path d="M74.5,29.9c-0.5,0.4-1.9,0.9-2.2,1.9c-0.4,1.1,0.1,2.6,0.4,3.9
                    C73,37,74,38.2,74,39.5c-0.4,13.5-6.9,23.3-18.4,30c-1,0.6-2.1,1-3.1,1.5c-0.3,0.3-0.7,0.6-1,0.8c-0.1,0.3-0.2,0.6-0.4,1
                    c0,0.2,0,0.5,0,0.7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.2,0.3,0.2,0.4c0.4,0.2,0.8,0.3,1.3,0.5c0.3-0.1,0.6-0.1,1-0.1
                    c0.1-0.1,0.3-0.2,0.4-0.2c15.2-7,22.9-18.9,23.7-35.5c0.1-1.3,0.5-2.6,0.9-3.8C79.4,32.4,77.8,29.9,74.5,29.9z"/>
                </g>
                <g style={{fill: "#3B5560"}}>
                  <circle cx="15" cy="10.5" r="4"/>
                  <circle cx="17.4" cy="54.8" r="4"/>
                  <circle cx="40.1" cy="75.5" r="4"/>
                  <circle cx="75.4" cy="33.7" r="4"/>
                  <circle cx="50.9" cy="14.7" r="4"/>
                </g>
                <path style={{fill: "#60B9F0"}} d="M38.2,22.3c-9.3,0-16.8,7.5-16.8,16.8S29,55.8,38.2,55.8
                c9.3,0,16.8-7.5,16.8-16.8S47.5,22.3,38.2,22.3z M38.2,52.2c-7.3,0-13.1-5.9-13.1-13.1c0-7.3,5.9-13.1,13.1-13.1
                c7.3,0,13.1,5.9,13.1,13.1C51.3,46.3,45.5,52.2,38.2,52.2z"/>
              </svg>
              <div className="app-name" id="oraclize">oraclize</div>
            </div>
            <div className="app-details">Data Carrier for decentralized applications</div>
            <div className="app-footer">
              <div className="app-rating">
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star-half-o' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star-o' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
              </div>
              <div className="app-price"><span className="price">Price: </span><span className="amount">free</span></div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="parity-container-app">
            <div className="app-image" id="dg-image">
              <div className="padding"></div>
              <svg version="1.1" id="dg-svg" x="0px" y="0px" width="81.7px" height="37.7px" viewBox="0 0 81.7 37.7">
                <path style={{fill: "#FFFFFF"}} d="M72.7,29.7c0-2.4,0-4.2,0-6.5c-3.9,0-7.5-0.2-11.1,0.1
                c-3.3,0.2-3.8-1.4-3.7-4.1c0.1-2.4-0.2-4.4,3.4-4.3C68,15.1,74.7,15,81.6,15c0,7.7,0,15.1,0,22.7c-12.9,0-25.8,0-39,0
                c0-12.4,0-24.9,0-37.6c12.9,0,25.9,0,39,0c0,2.4,0,4.8,0,7.6c-1.3,0.1-2.6,0.2-3.9,0.2c-7.7,0-15.4,0.1-23.2,0
                c-2.4,0-3.5,0.6-3.4,3.2c0.2,5.3-0.1,10.6,0.1,15.9c0,1,1.3,2.7,2,2.7C59.7,29.8,66,29.7,72.7,29.7z"/>
                <path style={{fill: "#FFFFFF"}} d="M30.4,0c0,4-0.1,7.7,0,11.5c0.1,2.6-0.7,3.7-3.4,3.5
                c-2.3-0.2-4.5,0-6.8,0c-6.7,0-13.3,0-20.2,0c0,7.9,0,15.2,0,22.6c13.2,0,26.1,0,39,0c0-12.7,0-25.2,0-37.6C36.1,0,33.4,0,30.4,0z
                 M30.8,29.7h-3.2c-0.6,0-1.3,0.1-2.1,0.1c-3.8,0-7.6,0-11.4,0c-1.2,0-2.1,0-2.9-0.1H8.4v-6.5h22.3V29.7z"/>
                <rect y="5.4" style={{fill: "#ECB11C"}} width="27.7" height="5.4"/>
                <rect y="0.1" style={{fill: "#F6D634"}} width="27.7" height="5.4"/>
              </svg>
              <div className="app-name" id="dg-name">DIGIX GLOBAL</div>
            </div>
            <div className="app-details">You can own, save and transact Gold in tokenised form - keeping secure private ownership of your digital assets.</div>
            <div className="app-footer">
              <div className="app-rating">
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                <FontAwesome className='font-awesome' name='star' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
              </div>
              <div className="app-price"><span className="price">Price: </span><span className="amount">free</span></div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="parity-container-app">
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="parity-container-app">
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="parity-container-app">
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="parity-container-app">
          </div>
        </div>
      </div>
    );
  }
}

export default Estore;
