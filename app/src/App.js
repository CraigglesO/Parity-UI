import React, { Component } from 'react';
// import { ipcRenderer } from 'electron';
import IdleTimer from 'react-idle-timer';

// import Header from './Components/Header';
import Navigation from './Components/Navigation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      timeout: 5 * 60 * 1000,
      idle: false,
      style: {
        appLock: null,
        lockScreen: { display: "none" }
      },
      combo: [null, null, null, null],
      position: 0,
      result: null
    }
    this.keyPress = this.keyPress.bind(this);
  }

  _onActive() {
  }

  _onIdle() {
    if (this.state.idle) return;
    this.setState({
      style: {
        appLock: { filter: "blur(3px)", pointerEvents: "none" },
        lockScreen: { display: "block" }
      },
      idle: true
    });
    document.addEventListener("keydown", this.keyPress, false);
  }

  keyPress(e) {
    if (!isNaN(e.key)) {
      // Sumbit the number:
      let arr = this.state.combo;
      arr[this.state.position] = Number(e.key);
      this.setState({
        combo: arr,
        position: this.state.position + 1
      });
      if (this.state.position > 3) {
        this.setState({
          position: 0
        });
        // Finish here...
        if ( arraysEqual(arr, [0,0,0,0]) ) {
          document.removeEventListener("keydown", this.keyPress, false);
          this.setState({
            style: {
              appLock: { filter: "none", pointerEvents: "auto" },
              lockScreen: { display: "none" },
              lockScreenWindow: { borderColor: "#7b69bc" }
            },
            idle: false,
            combo: [null, null, null, null]
          });
        } else {
          this.setState({
            style: {
              appLock: { filter: "blur(3px)", pointerEvents: "none" },
              lockScreen: { display: "block" },
              lockScreenWindow: { borderColor: "#d84a2e" }
            },
            combo: [null, null, null, null]
          });
        }
      }
    }

  }

  render() {
    if (this.state.idle) {

    }


    return (
      <IdleTimer
        ref="idleTimer"
        element={document}
        activeAction={this._onActive.bind(this)}
        idleAction={this._onIdle.bind(this)}
        timeout={this.state.timeout}
        format="MM-DD-YYYY HH:MM:ss.SSS">

        <div>
          <div className="App" style={this.state.style.appLock}>
            <Navigation />
            <div className="right-align">
              {this.props.children}
            </div>
          </div>
          <div className="Unlock" style={this.state.style.lockScreen}>
            <div className="Unlock-window" style={this.state.style.lockScreenWindow}>
              <div className="combos">
                <span className="combo"><div className="combo-text">{this.state.combo[0]}</div></span>
                <span className="combo"><div className="combo-text">{this.state.combo[1]}</div></span>
                <span className="combo"><div className="combo-text">{this.state.combo[2]}</div></span>
                <span className="combo"><div className="combo-text">{this.state.combo[3]}</div></span>
              </div>
              <div id="result-text">{this.state.result}</div>
            </div>
          </div>
        </div>

      </IdleTimer>
    );
  }
}

function arraysEqual(arr1, arr2) {
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

export default App;





// announce(e) {
//   e.preventDefault();
//   new window.Notification('Parity Notification', {
//     body: 'Your Transaction was approved',
//     silent: false
//   });
// }
//
// incrBadge(e) {
//   e.preventDefault();
//   ipcRenderer.send('incrBadge');
// }
//
// download(e) {
//   e.preventDefault();
//   ipcRenderer.send('setProgress', 0.5);
// }
//
// counter(e) {
//   e.preventDefault();
//   this.setState({
//     counter: this.state.counter + 1
//   })
// }
//
// hide(e) {
//   e.preventDefault();
//   ipcRenderer.send('hide');
// }
