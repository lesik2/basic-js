const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let amount=0;
  let arr1=s1.split('');
  let length1=arr1.length;
  let arr2=s2.split('');
  arr1.sort();
  arr2.sort();
  for(let i=0;i<length1;i++)
  {
    if(arr1.includes(arr2[i])) {
      amount+=1;
      arr1.shift();
    }
  }
  return amount;

 
}
console.log(getCommonCharacterCount('aabcc', 'adcaa'));
module.exports = {
  getCommonCharacterCount
};
