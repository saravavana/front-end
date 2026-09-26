function run(a,b){//parameter
    let result=a+b;
    console.log(result);
}
run(4,5);//arguments

run(4,5);//hoisting
function run(a,b){
    let result=a+b;
    console.log(result);
}

function runs(a,b){//function declaration
    let result=a+b;//local scope
    return result;//statement exit
    
}
let answer=runs(6,5);
console.log(answer);

 let runer=function(a,b){//function expression
    let result=a+b;
    return result;
    
}
let ans=runer(4,5);
console.log(ans);

let greet = function sayHello() {//function expression
    console.log("Hello");
};

let x = 10;//globalscope

function test(x) {//function declaration
    x = x + 5;//local scope
    return x;//sendback value
}

let result = test(20);

console.log(x);
console.log(result);