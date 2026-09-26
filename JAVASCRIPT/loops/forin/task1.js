let fruits = ["Apple", "Mango", "Orange"];

for (let index in fruits) {//used for key/index of array
    console.log(index);
}
let student = {
    name: "Saran",
    age: 24,
    course: "JavaScript"
};
for (let key in student) {
    console.log(key);//for keys
}
for (let key in student) {
    console.log(student[key]);//for indexvalue
}