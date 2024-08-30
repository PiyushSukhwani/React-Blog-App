function findMin(arr) {
   if(arr.length === 0) return 

   arr.reduce((acc, curr) => {
    return acc < curr ? acc : curr
   })
}

console.log(findMin([5, -3, 0, 12, -7]));

// let a  = arr[0];

//    for(i = 0; i < arr.length; i++) {
//     a > arr[i] ? a = arr[i] : a
//    } 
//    return a