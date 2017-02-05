import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class Connected extends Component {

  render() {
    const { store } = this.props;
    let mine = "no";
    if (store.mining)
      mine = "yes";
    else
      mine = "no";

    return (
      <div className="Connected">
        <div className="content-container" id="blockNumber">
          <span className="content-left">Highest Block</span>
          <span className="content-right">{store.blockNumber}</span>
        </div>
        <div className="content-container" id="transaction-count">
          <span className="content-left">Transactions</span>
          <span className="content-right">{store.transactionCount}</span>
        </div>
        <div className="content-container" id="uncles">
          <span className="content-left">Uncles</span>
          <span className="content-right">{store.uncles}</span>
        </div>
        <div className="content-container" id="gas-limit">
          <span className="content-left">Gas Limit</span>
          <span className="content-right">{store.gasLimit}</span>
        </div>
        <div className="content-container" id="gas-used">
          <span className="content-left">Gas Used</span>
          <span className="content-right">{store.gasUsed}</span>
        </div>
        <div className="content-container" id="mining">
          <span className="content-left">Mining</span>
          <span className="content-right">{mine}</span>
        </div>
        <div className="content-container" id="peers">
          <span className="content-left">Peers</span>
          <span className="content-right">{store.peerCount}/25</span>
        </div>
        <div className="content-container" id="time">
          <span className="content-left">Last Block</span>
          <span className="content-right">{store.time}s ago</span>
        </div>
      </div>
    );
  }
}

export default Connected;
