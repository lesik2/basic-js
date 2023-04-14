const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let number=0
  let right_names=[];
  for(let i=0;i<names.length;i++)
  {
    if(!right_names.includes(names[i])) right_names.push(names[i]);
    else{
      for(let j=0;j<right_names.length;j++)
      {
        if(right_names[j]===names[i]) number+=1;
      }
      let str=names[i]+'('+number+')';
      if(right_names.includes(str))
      {
       
        i--;
        continue;
      }
      right_names.push(str);
      number=0;

    }
  }
  return right_names;
}
console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc','doc']));
module.exports = {
  renameFiles
};
