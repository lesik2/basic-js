const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let final_number=0;
  let max_number=-1;
  let arr=[];
  let array=[];
  let k=0;
  while(n>0)
  {
    arr[k]=n%10;
    k++;
    n=Math.floor(n/10);
  }
  arr.reverse();
  for(let number of arr)
  {
    array.push(number);
  }
  let ten=1;
  for(let j=0;j<arr.length;j++)
  {
    array.splice(j,1);
    for(let i=array.length-1;i>=0;i--)
    {
      final_number+=array[i]*ten;
      ten*=10;
    }
    if(final_number>max_number) max_number=final_number;
    ten=1;
    array=[];
    final_number=0;
    for(let number of arr)
    {
      array.push(number);
    }
  }
  
  return max_number;
}
console.log(deleteDigit(152));
module.exports = {
  deleteDigit
};
