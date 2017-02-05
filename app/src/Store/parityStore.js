import { observable }  from "mobx";
import { ipcRenderer } from 'electron';

import Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

class TimeStore {
  @observable listening;
  @observable syncing;
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
    self.syncing          = false;
    self.percent          = 0;
    self.peerCount        = 0;
    self.mining           = false;
    self.blockNumber      = 0;
    self.currentBlock     = 0;
    self.transactionCount = null;
    self.uncles           = null;
    // self.difficulty       = blocks.difficulty
    self.gasLimit         = null;
    self.gasUsed          = null;
    self.time             = 0;
    self.timeSet          = false;

    // difficulty: { [String: '114092467850677'] s: 1, e: 14, c: [ 1, 14092467850677 ] },
    self.update();
    self.watch();
    self.intervl();

    self.timeInterval = setInterval(() => {
      self.time++;
    }, 1000);

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
          // // self.difficulty       = blocks.difficulty
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
      if (sync && (sync.currentBlock - sync.highestBlock > 30) ) {
        self.syncing = sync;
        self.percent = (self.syncing.currentBlock / self.syncing.highestBlock);
      } else {
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
