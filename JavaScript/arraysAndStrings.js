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

//PAIR SUM
const pairSum = (numbers, targetSum) => {
    const previous = {};

    for( let i = 0; i < numbers.length; i++){
        let complement = targetSum - numbers[i];
        if (compliment in previous){
        return [previous[complement], i];
        } else {
        previous[numbers[i]] = i;
        }
    }
};


//INTERSECTION
//could also solve this problem using a nexted loop but wld result in O(n^2) time complexity
function intersection(a, b){
    const result = [];

    // here we can create a Set which is a collection of unique values. Each value can only occur once in a Set. I guess you would use a set instead of an array because it has O(1) lookup time complexity
    // we could have also used a hash table - which is how i originally thought to solve the problem
    const items = new Set();

    for ( let item of a){
        items.add(item);
    }

    for ( let element of b){
        if( items.has(element)){
            result.push(element);
        }
    }

    return result;
};

//console.log(intersection([4,2,1,6], [3,6,9,2,10])

const intersectionHash = (a, b) => {
    const crossover = [];
    const aObj = {};
    
    for ( let i = 0; i < a.length; i++){
      let current = a[i];
      if( !(current in aObj)){
        //apparently you need the (=0) in the next line in order for the code to work
        aObj[current]=0;
      }
    }
    
    for ( let i = 0; i < b .length; i++){
      let current = b[i];
      if( current in aObj ){
        crossover.push(current);
        delete aObj[current];
      }
    }
    return crossover;
  };
  //console.log(intersectionHash([4,2,1,6], [3,6,9,2,10])



  //FIVE SORT

const fiveSort = (nums) => {
    let j = nums.length - 1;
    let i = 0;
    while ( j >= i ){
        if ( nums[j] === 5){
            j--;
        } else if (nums[i] === 5){
            //this is a way to switch elements in an array
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
            i++;
        } else {
            i++;
        }
    }


    return nums;
};

console.log(fiveSort([1,5,6,3,7,5,6]))









//_________________________________________________________________________________
//________________________________________________________________________________

//                          INTERVALS



//INSERT INTERVAL

var insert = function(intervals, newInterval) {
    const mergeIntervals = [];
    
    let i = 0;
    let newIntervalStart = newInterval[0];
    let newIntervalEnd = newInterval[1];
    
    while (i < intervals.length && intervals[i][1] < newIntervalStart){
        mergeIntervals.push(intervals[i]);
        i++;
    }
    
    while(i < intervals.length && intervals[i][0] <= newIntervalEnd){
        newIntervalStart = Math.min(intervals[i][0], newIntervalStart);
        newIntervalEnd = Math.max(intervals[i][1], newIntervalEnd);
        i++;
    }
    
    mergeIntervals.push([newIntervalStart, newIntervalEnd]);
    
    while ( i < intervals.length ){
        mergeIntervals.push(intervals[i]);
        i++;
    }
    
    return mergeIntervals;
};





//MERGE INTERVALS


var merge = function(intervals) {
    if ( intervals.length < 2 ){
        return intervals;
    }
    intervals.sort((a,b) => a[0] - b[0]);
    
    const mergeIntervals = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    for ( let i = 1; i < intervals.length; i++){
        const interval = intervals[i];
        if ( end >= interval[0] ){
            end = Math.max(end, interval[1])
        } else {
            mergeIntervals.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    
    mergeIntervals.push([start, end]);
    return mergeIntervals;
};




//NON-OVEERLAPPING INTERVALS

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    let count = 0;
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    for ( let i = 1; i < intervals.length; i++ ){
        const interval = intervals[i];
        if( interval[0] < end ){
            count++;
            end = Math.min(end, interval[1]);
        } else {
            end = interval[1];
        }
    }
    
    return count;
    
};





