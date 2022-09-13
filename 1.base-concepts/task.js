"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let result = Math.pow(b, 2) - 4 * a * c;

 if (result == 0) {
    arr = [-b / (2 * a)]
  } else if (result > 0) {
    arr.push((-b + Math.sqrt(result)) / (2 * a));
    arr.push((-b - Math.sqrt(result)) / (2 * a));
  }
  
  return arr; // array
}
solveEquation(4, 18, 9)

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNan(percent)) { 
    return 
  }

  return totalAmount;
}
