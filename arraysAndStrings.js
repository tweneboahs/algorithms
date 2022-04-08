//STRINGS

//UNCOMPRESS
function uncompress(s){
    const numbers = '0123456789';
    let result = '';
    //set up pointers
    let i = 0;
    let j = 0;

    while (j< s.length){
        if(numbers.includes(s[j])){
            j++;
        } else {
            const num = Number(s.slice(i, j));//the out put of num will be a number
            for (let count = 0; count < num; count++){
                //in JS be aware that when we do a string concatenation, we consider the concatenation an O(n) runtime operation.
                //this is because in JS strings are immutable so whenever we run a concatenation then we're actually creating a new string so this will have a linear runtime
                //If we want to squeeze the most out of the runtime we can use an array ( see function below )
                result += s[j];
            }
            j++;
            i=j;
        }
    }

    return result;
}

//console.log(uncompress("12b08h2w"));

function uncompressUseArray(s){
    const numbers = '0123456789';
    let result = [];
    //set up pointers
    let i = 0;
    let j = 0;

    while (j< s.length){
        if(numbers.includes(s[j])){
            j++;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count++){
                //now an O(1) operation
                result.push(s[j]);
            }
            j++;
            i=j;
        }
    }
    //bc .join() is not nested inside the while loop it has O(1) running time
    return result.join('');
}
//console.log(uncompressUseArray("12b08h2w"));


//COMPRESS
// this question will have the same problem as before where concatenating to a string results in a linear time complexity.
// in order to have more efficient code we can again implement the use of arrays in order to cut down on running time
const compress = (s) => {
    // todo
    let i = 0;
    let j = 0;
    let result = '';
    
    while ( j < s.length+1){
      if ( s[j] === s[i] ){
        j++;
      } else {
        let count = j - i;
        if ( count === 1){
          result += s[i];
        } else{
          result += count + s[i];
        }
        i=j;
      }
    }
    return result;
  };
//console.log(compress("hhhhsdciidcndjjj"));

const compressUseArrays = (s) => {
    // todo
    let i = 0;
    let j = 0;
    let result = [];
    
    while ( j < s.length+1){
      if ( s[j] === s[i] ){
        j++;
      } else {
        let count = j - i;
        if ( count === 1){
          result.push(s[i]);
        } else{
          result.push(count, s[i]);
        }
        i=j;
      }
    }
    return result.join('');
  };
//console.log(compressUseArrays("hhhhsdciidcndjjj"));


//ANAGRAMS
const anagrams = (s1, s2) => {
    //convert s1 into an object, where there is a count of every character
    const count = {};
    //iterate through every char of s1
    for ( let char of s1){
      //initialize char into count object if its the first time we're seeing its
      //can check if a key is inside of an object by ( char in count )
        //-->but we want to check if char is not (!) inside of the object
      if(!(char in count)){
        count[char] = 0;
      }
      
      count[char]++;
    }
    //now we want to check if the characters in the second string appear in the object (hash map) of the first string
    //if the character of the 2nd string appears in the 1st strings obect --> decrement the 1st strings char value by one
    //otherwise if the character doesnt appear --> return FALSE
    for ( let char of s2 ){
      if ( char in count ){
        count[char]--;
      } else {
        //we've found a character that is present in s2 but not present in s1
        return false;
      }
    }
    
    //now we want to check that exactly every letter in s1 is in s2
    // to do this we will check that each value is equal to zero bc 
      // -->if s2 has the same char but less/more amount of times it will be a neg or pos #, respectively
      // -->if s2 does not have a char but s1 does the value in th object for s1 will be positive
    
    for (let char in count){
      if(count[char] !== 0){
        return false;
      }
    }
    return true;
  };



  //MOST FREQUENT CHARACTER
    //THIS PROBLEM IS VERY SIMILAR TO THE ANAGRAMS PROBLEM ABOVE SO REFERENCE THAT IF YOU HAVE CODE QUESTIONS
  const mostFrequentChar = (s) => {
    const count = {};
    let max = -Infinity;
    let charKey;
    
    for ( let char of s){
        //REMEMBER! to put the "!" outside of the parenthesis in order to negate what's inside the parenthesis in the following line
      if(!(char in count)){
        count[char] = 0;
      }
      count[char]++;
    }
    
     for( let char of s){
      if(count[char] > max){
        max = count[char];
        charKey = char;
      }
    }
    return charKey;
  };