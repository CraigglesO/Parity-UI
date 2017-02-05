import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { observer } from "mobx-react";

import Connected from './DashboardComponents/Connected';
import Disconnected from './DashboardComponents/Disconnected';
import Syncing from './DashboardComponents/Syncing';
import './css/Dashboard.css';

@observer
class Dashboard extends Component {
  render() {

    const { store } = this.props;

    let status        = null;
    let statusName    = null;
    let statusStyle   = { color: "#f36338"};
    let statusFontAwesome = null;
    if (store.listening === "loading") {
      status            = null;
    } else if (!store.listening) {
      // Disconnected
      status            = <Disconnected />;
      statusName        = "Disconnected";
      statusStyle       = { color: "#FC6B4C"};
      statusFontAwesome = <FontAwesome className='font-awesome' name='toggle-off' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
    } else if (store.syncing) {
      // Synching
      status            = <Syncing store={store} />;
      statusName        = "Syncing";
      statusStyle       = { color: "#F9C84E"};
      statusFontAwesome = <FontAwesome className='font-awesome' name='retweet' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
    } else {
      // Connected
      status            = <Connected store={store} />;
      statusName        = "Connected";
      statusStyle       = { color: "#96CE1D"};
      statusFontAwesome = <FontAwesome className='font-awesome' name='toggle-on' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
    }

    return (
        <div className="Dashboard">

          <div className=" col-md-6">
            <div className="parity-container">
              <div className="parity-container-header">
                <span className="header-left">Status</span>
                <span className="header-right" style={statusStyle}>{statusFontAwesome} {statusName}</span>
              </div>
              <div className="content">
                {status}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="parity-container">
              <div className="parity-container-header">
                <span className="header-left">Portfolio</span>
              </div>
              <div id="portfolio-main">
                  <span id="eth-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                        <circle cx="14" cy="14" r="14" fill="#6F7CBA" fillOpacity=".9" stroke="#6672AA"></circle>
                        <path fill="#FFFFFF" d="M0.656240343,11.2800344 C0.563187486,11.1399073 0.602595751,11.0942644 0.744852791,11.1784382 L5.27528814,13.8591072 C5.4172803,13.9431243 5.6492047,13.9434096 5.79390757,13.8593951 L10.4022351,11.1837995 C10.5466685,11.0999415 10.5914896,11.1396813 10.4936683,11.2854956 L5.72180266,18.3985329 C5.62786637,18.5385562 5.4801302,18.5442674 5.38322887,18.3983449 L0.656240343,11.2800344 Z M0.705494407,9.49070853 C0.554478673,9.41079651 0.503726347,9.22485311 0.589348634,9.08010434 L5.34469309,1.0409563 C5.43156328,0.894097882 5.57410614,0.89603783 5.66026667,1.04058386 L10.4455044,9.06847213 C10.5329207,9.21512485 10.4780669,9.40083287 10.3303474,9.47934929 L5.79135909,11.89193 C5.64034335,11.9721985 5.39220221,11.9707432 5.24448274,11.8925754 L0.705494407,9.49070853 Z" transform="translate(8.5 4)"></path>
                      </g>
                    </svg>
                  </span>
                  <span id="portfolio-value">1.542 </span><span id="eth"> ETH</span>
                  <div id="portfolio-balance">TOTAL BALANCE</div>
              </div>
              <div id="convert">
                <span id="usd-left">
                  <FontAwesome className="currency-image" id="usd-symb" size='2x' name='usd' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  <span>
                    <div className="currency-value">20.30</div>
                    <div className="currency-type">USD</div>
                  </span>
                </span>
                <span id="bit-right">
                  <FontAwesome className="currency-image" id="btc-symb" size='2x' name='btc' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
                  <span>
                    <div className="currency-value">0.000013</div>
                    <div className="currency-type">BTC</div>
                  </span>
                </span>
              </div>
              <Link to="/Accounts" id="portfolio-footer"><div id="portfolio-footer-text">View your Accounts</div></Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="parity-container">
              <div className="parity-container-header">
                <span className="header-left">Recent Transactions</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="parity-container">
              <div className="parity-container-header">
                <span className="header-left">Price Charts</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="parity-container">Container5</div>
          </div>

        </div>
    );
  }
}

export default Dashboard;
