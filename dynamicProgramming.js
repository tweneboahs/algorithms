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