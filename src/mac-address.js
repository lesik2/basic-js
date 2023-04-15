const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {

  let arr=str.split("-");
  if(arr.length!==6) return false;
  for(let j=0;j<arr.length;j++)
  {
    for(let i=0;i<2;i++)
    {
      
      if(Number.isNaN(Number(arr[j][i])))
      {
        if(arr[j][i]<'A'||arr[j][i]>'F')return false;
        
      }
      else{
        if(arr[j][i]<0||arr[j][i]>9) return false;
      }
    
     
    }
  }
  return true;
 
}

console.log(isMAC48Address('Z1-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
