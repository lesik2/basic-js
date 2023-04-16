const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(arg='( )') {
    this.arr.push(arg);
    return this;
    
  },
  removeLink(arg) {
    if(typeof(arg)!=='number')
    {
      this.arr=[];
      throw new Error('You can\'t remove incorrect link!');
    }
    
    arg=arg-1;
    let flag=-1;
    for(let i=0;i<this.arr.length;i++)
    {
      if(i===arg)
      {
        flag=i;
        this.arr.splice(i,1);
        break;
      }
    }
    if(flag === -1){
      this.arr=[];
      throw new Error("You can't remove incorrect link!");
    } 
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {

    let str='';
    let chain="~~";
    for(let i=0;i<this.arr.length;i++)
    {
      if(i===this.arr.length-1) 
      {
        str+= '( '+this.arr[i]+' )';
        break;
      }
      str+= '( '+this.arr[i]+' )'+chain;
    }
    this.arr=[];
    return str;
   
  }
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
module.exports = {
  chainMaker
};
