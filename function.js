// //1)indexFound


// const indexNum=(array, value)=>{
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return i; 
//     }
//   }
//   return 0; 
// }
// const array = [12,32,44,56,45];
// const value = 45;
// const result = indexNum(array, value);

// if (result !== 0) {
//   console.log(value ,result);
// } else {
//   console.log(`${value} yioooooooooooooooo döyül`);
// }


// //2)same num
// function CountSame(arr, num) {
//   let count = ""; 

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       count++; 
//     }
//   }

//   return count; 
// }

// const arr = [3,2,1,4,3,1,5,6,9,3,2,52,3,2] 
// const num = 3;
// const result = CountSame(arr, num);

// console.log(`${num}  ${result} defe`);

////3)böyüy kiçiyi saymırıq

// let nipriznavat=(arr)=> {


//   let min = arr[0]; 
//   let max = arr[0]; 
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i]; 
//     }else if (arr[i] > max) {
//       max = arr[i]; 
//     }
//     sum += arr[i]; 
//   }

//   return sum-min-max; 
// }

// const arr = [2, 1, 3, 4, 6];
// const result = nipriznavat(arr);

// console.log(result); 


////4)change
// let tamEded=(bolunen, bolen)=> {
 
//   let tam = 0;
//   let qaliq = bolunen;

//   while (qaliq >= bolen) {
//     qaliq -= bolen;
//     tam++;
//   }
//     console.log("qaliq",bolunen)
//     console.log("tam",tam)

//   return tam;
// }

// let sonReqem =(number)=>{

   
//   let sonReqem = number % 10; 
//   number = tamEded(number, 10); 
//   while (number >= 10) {
//     sonReqem *= 10;
//     sonReqem += number % 10;
//     number = tamEded(number, 10);
//     console.log("number",number)
//   }
//   sonReqem *= 10;
//   sonReqem += number;
//     console.log("son",sonReqem)

//   return sonReqem;
// }

// const number = 102;
// const result = sonReqem(number);

// console.log(result); 
