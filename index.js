function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let distance = Math.abs(parseInt(startingBlock)-parseInt(endingBlock))
    if (distance < blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentTip) {
  return function(price) {
    return price*percentTip
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }

  }
}
