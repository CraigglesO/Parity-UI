import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Disconnected extends Component {

  render() {

    return (
      <div className="Disconnected">
        <FontAwesome id="disconnect-warning" size="5x" name='exclamation-triangle' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }} />
        <div id="disconnect-content">You're instance of <b>Parity</b> [or geth] is not running. Please see the guide to getting synced
        <a id="disconnect-link" href="https://github.com/ethcore/parity/wiki/Getting-Synced"> HERE</a>.</div>
      </div>
    );
  }
}

export default Disconnected;
