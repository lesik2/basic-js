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

  calculateDepth(arr) {
    
      let  deep=1;
      let counter=1;
     
      for(let i=0;i<arr.length;i++)
      {
        if(Array.isArray(arr[i]))
        {
          counter= 1 + this.calculateDepth(arr[i]);
        }
  
      }
      if(counter>deep) {
        deep=counter; 
      }
     counter=1;
     return deep;  
    } 
}
const instance = new DepthCalculator();

console.log(instance.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));
module.exports = {
  DepthCalculator
};
