const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let indexes_of_zero=[];

  let sum=0;
  for(let i=0;i<matrix.length;i++)
  {
    for(let j=0;j<matrix[i].length;j++)
    {
      if(i===0) 
      {
        sum+=matrix[i][j];
        if(matrix[i][j]===0) indexes_of_zero.push(j);
      }
      else{
        if(matrix[i][j]===0) indexes_of_zero.push(j);
        if(indexes_of_zero.includes(j)){
          continue;
        }
        sum+=matrix[i][j];

      }
    }
  }
 return sum;
  
}
const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
 ];
 console.log(getMatrixElementsSum(matrix));
module.exports = {
  getMatrixElementsSum
};
