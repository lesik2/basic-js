const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let new_string=["--discard-next","--discard-prev","--double-next","--double-prev"]
  let new_arr=[];
  for(let i=0;i<arr.length;i++)
  {
    new_arr[i]=arr[i];
  }
  let length=new_arr.length;
  for(let i=0;i<length;i++)
  {
    if(new_arr[i]==="--discard-next")
    {
      if(i===new_arr.length-1)
      {
        new_arr.pop();
        continue;
      }
       new_arr=discardNext(new_arr,i);
        length-=2;
    }
    else  if(new_arr[i]==="--discard-prev")
    {
      if(i===0)
      {
        new_arr.shift();
        continue;
      }
      length-=2;
      new_arr=discardPrev(new_arr,i);
    }
     else if(new_arr[i]==="--double-next")
    {
      if(i===new_arr.length-1)
      {
        new_arr.pop();
        continue;
      }
      new_arr=doubleNext(new_arr,i);
    }
    else if(new_arr[i]==="--double-prev")
    {
      if(i===0)
      {
        new_arr.shift();
        continue;
      }
      new_arr=doublePrev(new_arr,i);
    }
  }
 let end=[];
 let q=0;
  for(let i=0;i<new_arr.length;i++)
  {
    if(new_string.includes(new_arr[i])) continue;
  
    end[q]=new_arr[i];
    q++;
    
  }
  return end;
}
const discardNext=(arr,idx)=>{
  let new_arr=[];
  let k=0;
  for(let i=0;i<arr.length;i++)
  {
    if(i===idx || i===idx+1)continue;
    new_arr[k]=arr[i];
    k++;
  }
  return new_arr;
}
const discardPrev=(arr,idx)=>{
  let new_arr=[];
  let k=0;
  for(let i=0;i<arr.length;i++)
  {
    if(i===idx || i===idx-1)continue;
    new_arr[k]=arr[i];
    k++;
  }
  return new_arr;
}
const doubleNext=(arr,idx)=>{
  let new_arr=[];
  let k=0;
  for(let i=0;i<arr.length;i++)
  {
    if(i===idx)continue;
    if(i===idx+1)
    {
      for(let j=0;j<2;j++)
      {
        new_arr[k]=arr[i];
        k++;
      }
    }
    else{
      new_arr[k]=arr[i];
      k++;
    }
    
  }
  return new_arr;
}
const doublePrev=(arr,idx)=>{
  let new_arr=[];
  let k=0;
  for(let i=0;i<arr.length;i++)
  {
    if(i===idx)continue;
    if(i===idx-1)
    {
      for(let j=0;j<2;j++)
      {
        new_arr[k]=arr[i];
        k++;
      }
    }
    else{
      new_arr[k]=arr[i];
      k++;
    }
    
  }
  return new_arr;
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) );




module.exports = {
  transform
};
