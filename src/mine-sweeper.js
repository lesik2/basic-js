const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let row=matrix.length;
  let column=matrix[0].length;
 
  let new_matrix=new Array(row);
  for(let i=0;i<matrix.length;i++)
  {
    new_matrix[i]=new Array(column);
  }
  for(let i=0;i<row;i++)
  {
    for(let j=0;j<column;j++)
    {
      new_matrix[i][j]=0;
      
    }
  }
  let row_arr=[];
  let column_arr=[];
  for(let i=0;i<row;i++)
  {
    for(let j=0;j<column;j++)
    {
      if(matrix[i][j]===true)
      {
        row_arr.push(i);
        column_arr.push(j);
      }
    }
  }

  for(let k=0;k<row_arr.length;k++)
  {
    for(let i=0;i<row;i++)
  {
    for(let j=0;j<column;j++)
    {
      if(Math.abs((i+j)-(row_arr[k]+column_arr[k]))<=2 && Math.abs((i+j)-(row_arr[k]+column_arr[k]))!==0)
      {
        new_matrix[i][j]+=1;
      }
    }
  }
  }
  return new_matrix;

 
}
console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]));

module.exports = {
  minesweeper
};
