const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team_array) {
  if(team_array===null)return false;
  if(!Array.isArray(team_array))return false;
  if(team_array.length===0)return false;
  let new_team=[];
  let k=0;
  for(let name of team_array)
  {
    if(typeof(name)==='string')
    {
      for(let i=0;i<name.length;i++)
      {
        if(name[i]!==" ")
        {
          new_team[k]= name[i].toUpperCase();
          k++;
          break;
        }
      }
    }
  }
  if(new_team.length===0)return false;
  new_team.sort();
  return new_team.join('');
}
console.log(createDreamTeam(['']));

module.exports = {
  createDreamTeam
};
