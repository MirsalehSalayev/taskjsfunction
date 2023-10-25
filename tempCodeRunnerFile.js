function CountSame(arr, num) {
  let count = ""; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++; 
    }
  }

  return count; 
}

const arr = [3,2,1,4,3,1,5,6,9,3,2,52,3,2] 
const num = 3;
const result = CountSame(arr, num);

console.log(`${num}  ${result} defe`);