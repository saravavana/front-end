let a=(a,b)=>a+b;
let r=a(5,10);
console.log(r);

let person = {//object calling function
    name: "Jane",//outer this 

    greet: ()=> {
        console.log(this.name);
    }
};

person.greet();


function calculate(fn) {//headoffunction
    console.log(fn(5, 2));
}

calculate((a, b) => a - b);//callbackfunction