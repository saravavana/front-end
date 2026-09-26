// String Basics

let name = "Saran";

console.log(name);
console.log(name.length);
console.log(name[0]);// First character
console.log(name[1]);
console.log(name[2]);
console.log(name[name.length - 1]);// Last character

// String concatenation
let firstName = "Saran";
let lastName = "Kumar";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Template literal
let age = 22;
console.log(`My name is ${fullName} and I am ${age} years old.`);