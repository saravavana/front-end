let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits[1]);
fruits.push("Grapes");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Banana");
console.log(fruits);
fruits.pop();
console.log(fruits);

let fruit = ["Apple", "Mango", "Orange", "Grapes", "Banana"];
console.log(fruit.slice(1,4));
fruit.splice(2,1);
console.log(fruit);
