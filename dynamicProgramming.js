//FIBONACCI SEQUENCE

const fib = (n, memo = {}) => {
    if (n === 0 || n === 1) return n;
  
    if (n in memo) return memo[n];
  
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};




//TRIBONACCI SEQUENCE

const sumPossible = (amount, numbers, memo={}) => {
    // todo
    if ( amount === 0 ) return true;
    if ( amount < 0 ) return false;
    if ( amount in memo ) return memo[amount];
    
    
    for ( number of numbers ){
      if ( sumPossible( amount - number, numbers, memo ) ){
        memo[amount] = true;
        return true;
      }
    }
    
    memo[amount] = false;
    return false;
};


//MIN CHANGE

const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins);
    return answer === Infinity ? -1 : answer;
  };
  
  const _minChange = (amount, coins, memo = {}) => {
    if (amount < 0) return Infinity;
    
    if (amount === 0) return 0;
    
    if (amount in memo) return memo[amount];
    
    let min = Infinity;
    for (let coin of coins) {
      const numCoins = 1 + _minChange(amount - coin, coins, memo);
      min = Math.min(numCoins, min);
    }
    return memo[amount] = min;
};



// MIN CHANGE

const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins);
    return answer === Infinity ? -1 : answer;
};
  
const _minChange = (amount, coins, memo={}) => {
    if ( amount in memo) return memo[amount];
    if ( amount === 0 ) return 0;
    if ( amount < 0 ) return Infinity;
    let minChange = Infinity;
    
    for( let coin of coins ){
      const coinAmount = _minChange( amount - coin , coins, memo ) + 1;
      minChange = Math.min(minChange, coinAmount)
    }
    
    return memo[amount] = minChange;
};






//COUNT PATHS

const countPaths = (grid, r=0, c=0, memo={}) => {
    const pos = r + ',' + c;
    if ( pos in memo ) return memo[pos];
    
    if ( r > grid.length -1 || c > grid[0].length -1 || grid[r][c] === "X" ){
      return 0;
    }
    
    if (r === grid.length-1 && c === grid[0].length-1) return 1;
    
    const downPath = countPaths(grid, r+1, c, memo);
    const rightPath = countPaths(grid, r, c+1, memo);
    
    memo[pos] =  downPath + rightPath;  
    return memo[pos];
};

//MAX PATH SUM

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  
  if (r === grid.length || c === grid[0].length) return -Infinity;
  
  
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  
  const down = maxPathSum(grid, r + 1, c, memo);
  const right = maxPathSum(grid, r, c + 1, memo);
    
  memo[pos] = grid[r][c] + Math.max(down, right);
  return memo[pos];
};




//NON-ADJACENT SUM

const nonAdjacentSum = (nums, i=0, memo={}) => {
  
  if ( i in memo ) return memo[i];
  if ( i >= nums.length ) return 0;
  
  //think as binary decision -1. include element OR 2. exclude element
  
  const include = nums[i] + nonAdjacentSum(nums, i+2, memo);
  const exclude = nonAdjacentSum(nums, i+1, memo);
  
  memo[i] = Math.max(include, exclude);
  return memo[i];
};