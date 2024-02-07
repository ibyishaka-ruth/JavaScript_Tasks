
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'
const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const result= items.filter ((item) => item.price<=10)
console.log(result)

// 2. Filter and show the product that will be expensive in the array
const resultone=items.filter((item)=>item.price>=1000)
console.log(result)
// 3. Calculate the full price of all products combined
const totalprice = items.reduce((a, b)=> a + b.price , 0)
console.log(totalprice);
// 4. Calculate the full price of all products combined and remove products that are under $10
const totalprice2 = items.filter((item)=>item.price<=10).reduce((a,b)=>a + b.price ,0)
console.log(totalprice2)
// 5. Filter and show the product that will be start with letter b at first postion
const namess = items.filter((item)=>item.name.toLowerCase().startsWith('b' ))
console.log(namess)
