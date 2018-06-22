function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
  let distance = parseInt(endingBlock) - parseInt(startingBlock);
         let difference = blockRange - distance;
          if (difference > 0) {
              return `within range by ${difference}`;
          }
          else {
              return `${Math.abs(difference)} blocks out of range`;
          }
      }
  }

  function produceTipCalculator(tippingPercent) {
      return function (checkTotal) {
          return checkTotal * tippingPercent;
      }
  }

  function createDriver () {
      let DriverId = 0
      return class Driver {
          constructor(name) {
              this.name = name;
              this.id = ++DriverId;
          }
      }
  }
