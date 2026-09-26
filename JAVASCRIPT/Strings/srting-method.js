// String Methods

let text = "  JavaScript is Powerful  ";

// toUpperCase()
console.log(text.toUpperCase());

// toLowerCase()
console.log(text.toLowerCase());

// trim()
console.log(text.trim());

// includes()
console.log(text.includes("JavaScript"));

// startsWith()
console.log(text.trim().startsWith("JavaScript"));

// endsWith()
console.log(text.trim().endsWith("Powerful"));

// slice()
let language = "JavaScript";
console.log(language.slice(0, 4));
console.log(language.slice(4));

// replace()
let message = "I like JavaScript";
console.log(message.replace("JavaScript", "React"));

// split()
let fruits = "Apple,Banana,Orange";
console.log(fruits.split(","));