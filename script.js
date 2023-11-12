let numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++){
    sum +=numbersArray[i]
}

console.log("მასივის ელემენტების ჯამი:", sum);


let peopleArray =[
   { name: "John", age: 25, address: "123 Main St" },
   { name: "Jane", age: 30, address: "456 Oak St" },
   { name: "Bob", age: 22, address: "789 Pine St" }
]

console.log("My name is " + peopleArray[0].name)
console.log("My age is " + peopleArray[0].age)
console.log("My address is " + peopleArray[0].address)


if (peopleArray[0].age < 19)
   console.log("I am a teenager");
else {
   console.log("I am an adult");
}

let numbersArray1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbersArray1.length; i++){
    console.log(numbersArray1[i])
}