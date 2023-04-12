const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.log(date);
  if(date===undefined) return 'Unable to determine the time of year!' ;
  if( date instanceof Date ===false ||Object.getOwnPropertyNames(date).length) 
  {
    throw new Error("Invalid date!");
    
  }  
  let name='';
  let number_of_month=date.getMonth()+1;
  if((number_of_month>=1&&number_of_month<=2)|| number_of_month===12)
  {
    name='winter'
  }
  else if(number_of_month>=3&&number_of_month<=5)
  {
    name='spring'
  }
  else if(number_of_month>=6&&number_of_month<=8)
  {
    name='summer'
  }
  else{
    name='autumn';
  }
return name;
  
}
const springDate = new Date(2020, 3)


console.log(getSeason(springDate));

module.exports = {
  getSeason
};
