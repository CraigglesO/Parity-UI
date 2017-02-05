import { observable }  from "mobx";
import { ipcRenderer } from 'electron';
import RTDP from './real-time-distance-problem';
let rtdp = new RTDP(15);

import Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Health Insurrance:
process.on("uncaughtException", function (err) {
  console.log(err);
});

class TimeStore {
  @observable listening;
  @observable syncing;
  @observable estimatedFinish;
  @observable percent;
  @observable peerCount;
  @observable mining;
  @observable blockNumber;
  @observable transactionCount;
  @observable uncles;
  @observable gasLimit;
  @observable gasUsed;
  @observable time;


  constructor() {
    const self = this;

    self.listening        = "loading";
    self.failCount        = 0;
    self.isSyncing        = false;
    self.estimatedFinish  = null;
    self.percent          = 0;
    self.peerCount        = 0;
    self.mining           = false;
    self.blockNumber      = 0;
    self.currentBlock     = 0;
    self.transactionCount = null;
    self.uncles           = null;
    self.gasLimit         = null;
    self.gasUsed          = null;
    self.time             = 0;
    self.timeSet          = false;

    self.pointOfFailure();

    self.timeInterval = setInterval(() => {
      self.time++;
    }, 1000);

  }

  pointOfFailure() {
    const self = this;
    web3.net.getListening((err, listen) => {
      if (err) {
        self.failCount++;
        if (self.failCount > 3) {
          self.listening = false;
        }
        setTimeout(() => {
          self.pointOfFailure();
        }, 3000);
      } else {
        self.update();
        self.watch();
        self.intervl();
      }
    });
  }

  watch() {
    const self = this;
    web3.eth.filter('latest').watch(function() {
      self.getInfo();
      self.time = 0;
      clearInterval(self.timeInterval);
      self.timeInterval = setInterval(() => {
        self.time++;
      }, 1000);
    });
  }

  getInfo() {
    const self = this;
    // Get the current highest block number
    web3.eth.getBlockNumber((err, bn) => {
      if (err) return;
      self.blockNumber = bn.toLocaleString('en-US');
      // There is a bug, and a jump of 5 blocks can make watch call 5 times.
      if (bn !== self.currentBlock) {
        self.currentBlock       = bn;
        // Get all of the block information
        web3.eth.getBlock(bn, (err, block) => {
          if (err) return;
          self.transactionCount = block.transactions.length;
          self.uncles           = block.uncles.length;
          self.gasLimit         = block.gasLimit.toLocaleString('en-US');
          self.gasUsed          = block.gasUsed.toLocaleString('en-US');
        });
      }
    });
  }

  intervl() {
    const self = this;
    setInterval(() => {
      self.update();
    }, 5000);
  }

  update() {
    const self = this;
    self.listen();
    self.sync();
    self.peers();
    self.mine();
  }

  listen() {
    const self = this;
    web3.net.getListening((err, listen) => {
      if (err) return;
      self.listening = listen;
    });
  }

  sync() {
    const self = this;
    web3.eth.getSyncing((err, sync) => {
      if (err) return;
      console.log(sync);
      if (sync && ( (sync.highestBlock - sync.currentBlock) > 30) ) {
        self.isSyncing = true;
        self.syncing   = sync;
        self.estimatedFinish = rtdp.update(sync);
        self.percent   = (self.syncing.currentBlock / self.syncing.highestBlock);
      } else {
        if (self.isSyncing) {
          self.isSynching = false;
          new window.Notification('Parity Sync Complete', {
            body: 'Your System is up to date and ready for transactions / Mining',
            silent: false
          });
        }
        rtdp         = null;
        self.syncing = false;
        self.percent = (-1);
      }
      ipcRenderer.send('setProgress', self.percent);
    });
  }

  peers() {
    const self = this;
    web3.net.getPeerCount((err, peers) => {
      if (err) return;
      self.peerCount = peers;
    });
  }

  mine() {
    const self = this;
    web3.eth.getMining((err, mine) => {
      if (err) return;
      self.mining = mine;
    });
  }

}

export default new TimeStore()
