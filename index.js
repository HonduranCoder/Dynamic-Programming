//Fibonacci Sequence
const fib = (n) => {
  if(n <= 2) return 1; 
   return fib(n-1) + fib(n-2);
  }; 
  
//Fibonacci Sequence Memo
const fib = (n, memo = {}) => {
  if(n in memo) return memo[n]; 
  if(n <= 2) return 1; 
  memo[n] = fib(n-1) + fib(n - 2); 
    return memo[n];
  };

//F.S. Tabulation 
const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1; 
  for (let i = 0; i <= n; i++) {
   table[i + 1] += table[i]; 
   table[i + 2] += table[i]; 
  }
  return table[n];
};
  
 //Grid Traveler
 const gridTraveler = (m,n, memo = {}) => {
  if(m === 1 && n ===1) return 1; 
  if(m === 0 || n ===0) return 0; 
    return gridTraveler(m -1, n) + gridTraveler(m, n-1);
  };
  
 //Grid Traveler Memo
 const gridTraveler = (m,n) => {
  const key = m + '.' + n;
  if( key in memo) return memo[key];
  if(m === 1 && n ===1) return 1; 
  if(m === 0 || n ===0) return 0; 
  memo[key] = gridTraveler(m -1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key]
  };

//G.T. Tabulation 
const gridTraveler = (m, n) => {
 const table = Array(m + 1).fill().map(()=> Array(n +1).fill(0));
 table[1][1] = 1; 
 for(let i = 0; i <= ,; i++){
  for(let j = 0; j <= n; j++) {
   const current = table[i][j]; 
   if(j+1 <=n) table[i][j+1] += current;
   if(i+1 <=m) table[i+1][j] += current; 
  }
 }
  return table[m][n]; 
}; 
  
//canSum
//Write a function that takes in a targetSum and an array of the numbers as arguments. 
//The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

const canSum = (targetSum, numbers) => {
  if(targetSum === 0) return true; 
  if(targetSum < 0) return false; 
  
  for(let num of numbers) {
    const remainder = targetSum - num; 
     if(canSum(remainder, numbers) === true) {
      return true; 
      }
    }
    return false;
  };
  
  //canSum Memo 
  const canSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return true; 
  if(targetSum < 0) return false; 
  
  for(let num of numbers) {
    const remainder = targetSum - num; 
    if(canSum(remainder, numbers, memo) === true) {
    memo[targetSum] = true;
      return true; 
      }
    }
    memo[targetSum] = false; 
      return false;
  };

//C.S. Tabulation 
const canSum = (targetSum, numbers) => {
 const table = Array(targetSum + 1).fill(false); 
 table[0] = true; 
 for(let i = 0; i <= targetSum; i++){
  if(table[i] === true) {
   for(let num of numbers) {
    table[i + num] = true;  
   }
  }
 }
  return table[targetSum];
};
  
 //howSum
 //Write a function that takes in a targetSum and an array of numbers. 
 //The function should return an array of numbers as arguments. 
 //The function should return an array containing any combination of elements that add up to exactly the targetSum. 
  
  const howSum = (targetSum, numbers) => { 
    if(targetSum === 0) return []; 
    if(targetSum < 0) return null; 
  
    for(let num of numbers) {
      const remainder = targetSum - num; 
      const remainderResult = howsum(remainder, numbers); 
      if(remainderResult !== null) {
        return [...remainderResult, num];
        }
       }
       return null; 
      };
      
//howSum Memo 
  const howSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]; 
    if(targetSum === 0) return []; 
    if(targetSum < 0) return null; 
   
   for(let num of numbers) {
      const remainder = targetSum - num; 
      const remainderResult = howsum(remainder, numbers, memo); 
      if(remainderResult !== null) {
        memo[targetSum] = [...remainderResult, num];
        return memo[targetSum]
        }
       }
       memo[targetSum] = null; 
       return null; 
      };

//H.S.Tabulation 
const howSum = (targetSum, numbers) => {
 const table = Array(targetSum + 1).fill(null); 
 table[0] = [];
 
  for(let i = 0; i <= targetSum; i++){
   if(table[i] !== null) {
    for(let num of numbers) {
     table[i + num] = [...table[i], num];
    }
   }
  }
  return table[targetSum];
};
 
 //bestSum 
 //Write a function that takes in a targetrsum and an array of numbers as arguments. 
 //The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum. 
 
 const bestSum = (targetSum, numbers) => {
  if(targetSum ===0) return [];
  if(tagetSum < 0) return null; 
  let shortestCombo = null; 
  
  for (let num of numbers){
    const remainder = targetSum - num; 
    const remainderCombo = bestsum(remainder, numbers); 
    if(remainderCombo !== null) {
      const combo = [...remainderCombo, num];
      if(shorestCombo === null || combo.length < shortestCombo.length) {
      shortestCombo = combo; 
      }
     }
    }
    return shortestCombo;
    };
  
  //bestSum Memo
  const bestSum = (targetSum, numbers, memo={}) => {
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === `0) return [];
  if(tagetSum < 0) return null; 
  let shortestCombo = null; 
  
  for (let num of numbers){
    const remainder = targetSum - num; 
    const remainderCombo = bestsum(remainder, numbers, memo); 
    if(remainderCombo !== null) {
      const combo = [...remainderCombo, num];
      if(shorestCombo === null || combo.length < shortestCombo.length) {
      shortestCombo = combo; 
      }
     }
    }
    memo[targetSum] = shortestCombo; 
    return shortestCombo;
    };
    
 //B.S. Tabulation 
 const bestSum = (targetSum, numbers) => {
   const table = Array(targetSum + 1).fill(null); 
   table[0] = [];
   
   for(let i = 0; i <= targetSum; i++){
    if(table[i] !== null) {
      for(let num of numbers) {
      const combo = [...table[i], num]; 
      if(!table[i+num] || table[i+num].length > combo.length){
        table[i + num] = combo;
        }
      }
     }
   }
   return table[targetSum]
  };
  
//Write a function that accepts a target string and an array of strings. 
//The function should return a boolean indicating whether or not 
//the target can be constructed by concantinating elements of the wordBank array. 
//You may reuse elements of wordBank as many times as needed. 

const canConstruct = (target, wordBank) => {
  if (target === '') {
    return true; 
  }
  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length);
     if (canConstruct(suffix, wordBank) === true) {
      return true; 
     }
    }
  }
  return false; 
}

//canConstruct Memo 
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true; 
  
  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length);
     if (canConstruct(suffix, wordBank, memo) === true) {
      memo[target] = true; 
      return true; 
     }
    }
  }
  memo[target] = false; 
  return false; 
}

//Write a function that accepts a target string and an array of strings. 
//The function should return the number of ways that the target can be constructed 
//by concatenating elementsa of the wordBank array. 
//You may reuse elements of wordBank as many times as needed. 

const countconstruct = (target, wordBank) => {
  if (target === '') return 1; 
  let total = 0; 
  
  for(let word of wordBank) {
    if (target.indexOf(word) === 0) {
     const num = countConstruct(target.slice(word.length), wordBank);
     total += num;
    }
  }
  return total; 
}

//countConstruct Memo 
const countconstruct = (target, wordBank, memeo ={})
  if (target in memo) return memo[target];
  if (target === '') return 1; 
  let total = 0; 
  
  for(let word of wordBank) {
    if (target.indexOf(word) === 0) {
     const num = countConstruct(target.slice(word.length), wordBank, memo);
     total += num;
    }
  }
  memo[target] = total;
  return total; 
}

//C.C. Tabulation


//Write a function that accepts a target string and an array of strings. 
//The function should return a 2D array containing all of the ways that the target can be constructed 
//by concatenating elements of the wordBank array. 
//Each element of the 2D array should represent one combination that constructs the target. 
//You may reuse elements of wordBank as many times as needed. 

const allConstruct = (target, wordBank) => {
  if(target === '') return [[]];
  const result = [];
  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result; 
}
//memo will not effect worst case 



