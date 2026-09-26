//  largest number
const numbers = [10, 45, 23, 67, 12, 89, 34];
let largest = numbers[0];
for (let number of numbers) {
    if (number > largest) {
        largest = number;
    }
}
console.log("Largest:", largest);


//  smallest number

let smallest = numbers[0];
for (let number of numbers) {
    if (number < smallest) {
        smallest = number;
    }
}
console.log("Smallest:", smallest);


//  sum of all numbers

let sum = 0;
for (let number of numbers) {
    sum = sum + number;
}
console.log("Sum:", sum);


//  Count even numbers

let evenCount = 0;
for (let number of numbers) {
    if (number % 2 === 0) {
        evenCount++;
    }
}
console.log("Even count:", evenCount);