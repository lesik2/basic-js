const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {

  if(options===null || options===undefined) return str+='';
  str+='';
  let result_str='';

  if(options.separator===undefined) options.separator='+';
  if(options.additionSeparator===undefined) options.additionSeparator='|';
  if(options.addition===undefined)
  {
      if(options.repeatTimes===undefined) return str;
      for(let i=0;i<options.repeatTimes;i++)
      {
        if(i===options.repeatTimes-1)
        {
          result_str+=str;
        }
        else  result_str+=str+options.separator;
      }
  }
  else{
    options.addition+='';
      if(options.repeatTimes===undefined) {
        result_str+=str+options.addition;
      }
      for(let i=0;i<options.repeatTimes;i++)
      {
        result_str+=str;
        if(options.additionRepeatTimes===undefined||options.additionRepeatTimes===0)
        {
          result_str+=options.addition;
        }
        for(let j=0;j<options.additionRepeatTimes;j++)
        {
          if(j===options.additionRepeatTimes-1)
          {
            result_str+=options.addition;
          }
          else  result_str+=options.addition+options.additionSeparator;
          
        }
        if(i===options.repeatTimes-1){
          continue;

        }else{
          result_str+=options.separator;
        }

    }

  }
  return result_str;
  
  
}
console.log(repeater());

module.exports = {
  repeater
};
