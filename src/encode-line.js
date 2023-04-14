const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let amount=1;
let end='';
let last_symbol='';

for(let i=0;i<str.length;i++)
{
  if(last_symbol===str[i])continue;
  amount=1;
  for(let j=i+1;j<str.length;j++)
  {
    if(str[i]===str[j]) {
      amount+=1;
      
    }
    else {
      break;
    }
  }
  last_symbol=str[i];
  if(amount===1) end+=str[i];
  else{
    end+=amount+str[i];
  }
 
}
  return end;
}
console.log(encodeLine('abbcca'));
module.exports = {
  encodeLine
};
