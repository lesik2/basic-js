const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type_of_machine=true){
    this.type_of_machine=type_of_machine;
  }
  encrypt(str,key) {
    if(str===undefined||key===undefined) throw new Error("Incorrect arguments!");
    let encrypt_str='';
    let new_key='';
      let j=0;
      str=str.toUpperCase();
      for(let i=0;i<str.length;i++)
      {
        if(str[i]===' ')continue;
        if(str.charCodeAt(i)<65 ||str.charCodeAt(i)>90 ) continue;
        if(j===key.length) j=0;
        new_key+=key[j];
        j++;
      }
      
      new_key=new_key.toUpperCase();
       j=0;
      for(let i=0;i<str.length;i++){
        if(str[i]===' ') {
          encrypt_str+=str[i];
          continue;
        }
        if(str.charCodeAt(i)<65 ||str.charCodeAt(i)>90 ){
          encrypt_str+=str[i];
          continue;
        } 
          encrypt_str+=String.fromCharCode((((str.charCodeAt(i)-65)+(new_key.charCodeAt(j)-65))%26)+65);
          j++;
      }
      if(this.type_of_machine===true) return encrypt_str;
      else {
        let str_reverse="";
        for(let i=encrypt_str.length-1;i>=0;i--)
        {
          str_reverse+=encrypt_str[i];
        }
        return str_reverse;
      }
      
    }

  decrypt(str,key) {
    if(str===undefined||key===undefined) throw new Error("Incorrect arguments!");

    let decrypt_str='';
    let new_key='';
      let j=0;
      for(let i=0;i<str.length;i++)
      {
        if(str[i]===' ')continue;
        if(str.charCodeAt(i)<65 ||str.charCodeAt(i)>90 ) continue;
        if(j===key.length) j=0;
        new_key+=key[j];
        j++;
      }
      
      new_key=new_key.toUpperCase();
       j=0;
      for(let i=0;i<str.length;i++){
        if(str[i]===' ') {
          decrypt_str+=str[i];
          continue;
        }
        if(str.charCodeAt(i)<65 ||str.charCodeAt(i)>90 ){
          decrypt_str+=str[i];
          continue;
        } 
        let q=str.charCodeAt(i)-65+26;
        let p=new_key.charCodeAt(j)-65;
          decrypt_str+=String.fromCharCode((  Math.abs(q-p) % 26 )+65);
          j++;
      }
      if(this.type_of_machine===true) return decrypt_str;
      else {
        let str_reverse="";
        for(let i=decrypt_str.length-1;i>=0;i--)
        {
          str_reverse+=decrypt_str[i];
        }
        return str_reverse;
      }
    
    
  }
}
const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);


console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
