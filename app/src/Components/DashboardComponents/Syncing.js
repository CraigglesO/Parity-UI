import React, { Component } from 'react';
import { observer }         from "mobx-react";
import CircularProgress from "./react-circular-progress";

@observer
class Syncing extends Component {

  render() {
    const { store } = this.props;

    return (
      <div className="Syncing">
        <CircularProgress id="circular-progress" percentage={store.percent.toFixed(2) * 100} currentBlock={store.syncing.currentBlock} highestBlock={store.syncing.highestBlock} />
        <div id="syncing-finish">Estimated completion: {store.estimatedFinish}</div>
      </div>
    );
  }
}

// percent={store.percent.toFixed(2) * 100}

export default Syncing;
