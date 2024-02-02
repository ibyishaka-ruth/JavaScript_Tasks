// // Q1. the function that calculates the sum of two nbrs
// function sum(x,y){
//     let result= x+y
//     return result
//   }
//   let a=2
//   b=5
//    console.log( "the sum of those nbrs a,b is "+sum(2,5))


//    //    Q2. to find the maximum of nbr in arrays 

//    function large(Array){
//     if(Array.length==0){
//       return"this array is empty"
//     }
//     else{
//     const maxnum=Math.max(...Array);
//     return maxnum;}
//   }
//   const numbers=[2,3,45,12,32];
//   const result= large(numbers);
//   console.log(result);


   const myFunction =(str)=> {
    if(isNaN(str)&& str.includes("w") && str.length==8){
    return true
    }
    else{
        return false
    }
  }
  console.log(myFunction("hjtkwwer"))