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
  
