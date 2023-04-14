const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let length=arr.length;
  let new_arr=[];
  let arr_index=[];
  for(let i=0;i<length;i++)
  {
    if(arr[i]===-1) arr_index.push(i);
  }
  arr.sort(function(a,b){
    return a-b;
  });
  
  for(let i=0;i<arr_index.length;i++){
    arr.shift();
  }
  for(let i=0;i<length;i++)
  {
    if(arr_index.includes(i)){
      new_arr[i]=-1;
      continue;
    }
    new_arr[i]=arr.shift();

  }
  return new_arr;

 
}
console.log( sortByHeight([4, 2, 9, 11, 2, 16]));
module.exports = {
  sortByHeight
};
