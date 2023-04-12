const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(countCats) {
  let numberOfCats=0;
  for(let i=0;i<countCats.length;i++)
  {
    for(let j=0;j<countCats[i].length;j++)
    {
      if(countCats[i][j]==='^^') numberOfCats+=1;
    }
  }
  return numberOfCats;
}
console.log(countCats([
  [0, 1, '^^'],
 [0, '^^', 2],
['^^', 1, 2]
])) ;
module.exports = {
  countCats
};
