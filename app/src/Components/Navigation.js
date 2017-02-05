import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import NavLink from './NavLink';
import user from '../img/me.png';
import './css/Navigation.css';


class Header extends Component {

  render() {
    return (
      <div className="Navigation">
        <NavLink to="/Dashboard">
          <div className="Nav-Obj" id="Dashboard">
            <FontAwesome className='font-awesome' name='home' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
            <span className="Nav-Obj-text">Dashboard</span>
          </div>
        </NavLink>
        <NavLink to="/Accounts">
          <div className="Nav-Obj" id="Accounts">
            <FontAwesome className='font-awesome' name='address-book-o' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
            <span className="Nav-Obj-text">Accounts</span>
          </div>
        </NavLink>
        <NavLink to="/SendRecieve">
          <div className="Nav-Obj" id="SendRequest">
            <FontAwesome className='font-awesome' name='credit-card' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
            <span className="Nav-Obj-text">Transactions</span>
          </div>
        </NavLink>
        <NavLink to="/Tools">
          <div className="Nav-Obj" id="Tools">
            <FontAwesome className='font-awesome' name='wrench' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
            <span className="Nav-Obj-text">Tools</span>
          </div>
        </NavLink>
        <NavLink to="/Settings">
          <div className="Nav-Obj" id="Settings">
            <FontAwesome className='font-awesome' name='cog' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
            <span className="Nav-Obj-text">Settings</span>
          </div>
        </NavLink>
        <div className="user">
          <img id="user-img" alt="user-img" src={user}/>
          <div id="user-name">Connor</div>
        </div>
        <div className="license"><Link to="/License">License</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2017 Parity</div>
      </div>
    );
  }
}

export default Header;
