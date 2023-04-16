const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(array) {
    
    let deep=1;
    let number=1;
    for(let i=0;i<array.length;i++)
    {
      if(Array.isArray(array[i]))
      {
        deep=1+this.calculateDepth(array[i]);
      }
    }
    if(number>deep)
    {
      deep=number;
    }
    number=1;
    return deep;
  }
}
const instance = new DepthCalculator();


module.exports = {
  DepthCalculator
};
