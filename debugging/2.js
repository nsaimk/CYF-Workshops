/*
This function should return the value of the largest number in the given array. 
Can you fix the bug in this function

*/
function sum(arr){
  let res = 0;
  for (let i = 0; i < arr.length; i++){
    res += arr[i]
  }
  return res
}

function getLargestNum(arr) {
    let largestNum = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
    return largestNum;
  }
  let arr = [1, 2, 3, 4, 5];

  getLargestNum(arr)
  sum(arr)