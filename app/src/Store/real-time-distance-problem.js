
class RTDP {
    constructor(storeSize) {
        const self = this;
        self.storeSize = storeSize;
        self.LRU = [];
        self.averageVelocityA = 0;
        self.averageVelocityB = 0;
        self.startTime = Date.now() / 1000;
        self.newTime = 0;
    }
    update(lru) {
        const self = this;
        self.set(lru);
        if (self.newTime === 0) {
            self.LRU[0].velocityA = 0;
            self.LRU[0].velocityB = 0;
        }
        self.newTime = Date.now() / 1000;
        self.LRU[0].velocityA = (self.LRU[0].block.currentBlock - self.LRU[1].block.currentBlock) / (self.newTime - self.startTime);
        self.LRU[0].velocityB = (self.LRU[0].block.highestBlock - self.LRU[1].block.highestBlock) / (self.newTime - self.startTime);
        let vA = 0, vB = 0;
        for (let i = 0; i < self.LRU.length; i++) {
            vA += self.LRU[i].velocityA;
            vB += self.LRU[i].velocityB;
        }
        self.averageVelocityA = vA / self.LRU.length;
        self.averageVelocityB = vB / self.LRU.length;
        let distance = self.LRU[0].block.highestBlock - self.LRU[0].block.currentBlock;
        let time = distance / (self.averageVelocityA - self.averageVelocityB);
        self.startTime = Date.now() / 1000;
        if (lru.warpChunksAmount !== null) {
          self.LRU = [];
          return "Warping..."
        } else {
          return secondsToString(time);
        }
    }

    set(lru) {
        const self = this;
        self.LRU.unshift({ block: lru, velocityA: 0, velocityB: 0 });
        self.lru();
    }
    lru() {
        const self = this;
        while (self.LRU.length > self.storeSize) {
            self.LRU.pop();
        }
    }
}
function secondsToString(seconds) {
    let numdays = Math.floor(seconds / 86400);
    let numhours = Math.floor((seconds % 86400) / 3600);
    let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    let numseconds = parseInt(((seconds % 86400) % 3600) % 60, 10);
    if (numminutes === 0 && numdays === 0 && numdays === 0) {
        return numseconds + "s";
    }
    else if (numhours === 0 && numdays === 0) {
        return numminutes + "m " + numseconds + "s";
    }
    else if (numdays === 0) {
        return numhours + "h " + numminutes + "m " + numseconds + "s";
    }
    else {
        return numdays + "d " + numhours + "h " + numminutes + "m " + numseconds + "s";
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RTDP;
