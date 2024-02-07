// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
// let colors=['red','green','blue','yellow','orange'];
// console.log(colors.join(","))

// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
console.log(colors.splice(2,2,'purple','pink'))
console.log(colors)
// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
console.log(colors.copyWithin(0,1,3))
// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
for(let i=0;i<=colors.length;i++){
console.log(colors[i].toUpperCase())
}
// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
function letter(colors){
  let result= colors.startsWith('b')
  return result 
}

console.log(colors.find(letter))
// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
