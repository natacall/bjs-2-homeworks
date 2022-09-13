'use strict'

function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
    if (elem >= max) {
      max = elem;
    }
    if (elem <= min) {
      min = elem;
    }
  }
  let avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

let arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]]
function worker(arr) {
  let sum;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = worker(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

function worker2(arr) {
  let res = getArrayParams(arr).max - getArrayParams(arr).min;
  return Math.abs(res);
}
