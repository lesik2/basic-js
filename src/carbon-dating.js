const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if(sampleActivity===undefined || typeof(sampleActivity)!=='string') return false;
  let number;
  if(!Number.isNaN(Number(sampleActivity)))
  {
     number=Number(sampleActivity);
  }
  else return false;
  if(number>15 ||number<=0) return false;
 

  let age=Math.ceil((Math.log(15/number))/((0.693/5730) ));
  return age;
  
}
console.log(dateSample('3'));
module.exports = {
  dateSample
};
