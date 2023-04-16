const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(domains.length===0)return{};
  let obj={};
  let min_length=domains[0].length;
  let index=0;
  for(let i=1;i<domains.length;i++)
  {
    if(domains[i].length<min_length)
    {
      min_length=domains[i].length;
      index=i;
    }
  }
  let arr=domains[index].split('.');
  arr.reverse();
  let new_arr=[];
  new_arr.push('.'+arr[0]);
  new_arr.push('.'+arr[0]+'.'+arr[1]);
  let amount=0;
    for(let j=0;j<domains.length;j++)
    {
      if(domains[j].includes(new_arr[0])) amount++;
    }
    obj[new_arr[0]]=amount;
    obj[new_arr[1]]=amount;

  arr=[];
  let str='';
  for(let i=0;i<domains.length;i++)
  {
    
    if(i===index)continue;
    arr=[];
    str='';
    arr=domains[i].split('.');
    arr.reverse();
    for(let j=0;j<arr.length;j++)
    {
      str+='.'+arr[j];
    }
    obj[str]=1;
  }
  return obj;
 
}
console.log(getDNSStats(['epam.com', 'info.epam.com']));




module.exports = {
  getDNSStats
};
