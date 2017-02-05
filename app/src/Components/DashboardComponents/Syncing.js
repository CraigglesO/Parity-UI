import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class Synching extends Component {

  render() {
    const { store } = this.props;

    return (
      <div className="Synching">
        This is the Synching Component
        <div>currentBlock: {store.syncing.currentBlock}</div>
        <div>highestBlock: {store.syncing.highestBlock}</div>
        <div>percent: {store.percent}</div>
      </div>
    );
  }
}

export default Synching;
