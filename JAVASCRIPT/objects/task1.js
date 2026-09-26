let user = {
    name: "Arun",
    age: 22
};

let { name: userName, age } = user;//destructuring

user.age = 25;

console.log(userName);
console.log(age);
console.log(user.age);

let user = {
    name: "Arun",
    age: 22
};

let newUser = {
    ...user//spread
};

newUser.age = 25;

console.log(user.age);
console.log(newUser.age);

let user = {
    name: "Arun",
    address: {
        city: "Coimbatore"
    }
};

let newUser = {
    ...user
};

newUser.address.city = "Chennai";

console.log(user.address.city);//nested obj
console.log(newUser.address.city);

let user = {
    name: "Arun",
    age: 22,
    city: "Coimbatore"
};

let { name, ...details } = user;

console.log(name);
console.log(details.city);
console.log(details.age);

let user = {
    name: "Arun",
    age: 22
};

let key = "name";

console.log(user[key]);
console.log(user.key);