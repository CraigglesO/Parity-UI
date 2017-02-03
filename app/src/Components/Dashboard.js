import React, { Component } from 'react';

import './css/Dashboard.css';


class Dashboard extends Component {

  render() {
    return (
        <div className="Dashboard">
          <div className=" col-md-6">
            <div className="parity-container">Container1</div>
          </div>
          <div className="col-md-6">
            <div className="parity-container">
              Container2
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                  <circle cx="14" cy="14" r="14" fill="#6F7CBA" fillOpacity=".9" stroke="#6672AA"></circle>
                  <path fill="#FFFFFF" d="M0.656240343,11.2800344 C0.563187486,11.1399073 0.602595751,11.0942644 0.744852791,11.1784382 L5.27528814,13.8591072 C5.4172803,13.9431243 5.6492047,13.9434096 5.79390757,13.8593951 L10.4022351,11.1837995 C10.5466685,11.0999415 10.5914896,11.1396813 10.4936683,11.2854956 L5.72180266,18.3985329 C5.62786637,18.5385562 5.4801302,18.5442674 5.38322887,18.3983449 L0.656240343,11.2800344 Z M0.705494407,9.49070853 C0.554478673,9.41079651 0.503726347,9.22485311 0.589348634,9.08010434 L5.34469309,1.0409563 C5.43156328,0.894097882 5.57410614,0.89603783 5.66026667,1.04058386 L10.4455044,9.06847213 C10.5329207,9.21512485 10.4780669,9.40083287 10.3303474,9.47934929 L5.79135909,11.89193 C5.64034335,11.9721985 5.39220221,11.9707432 5.24448274,11.8925754 L0.705494407,9.49070853 Z" transform="translate(8.5 4)"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="col-md-6">
            <div className="parity-container">Container3</div>
          </div>
          <div className="col-md-6">
            <div className="parity-container">Container4</div>
          </div>
          <div className="col-md-6">
            <div className="parity-container">Container5</div>
          </div>
        </div>
    );
  }
}

export default Dashboard;
