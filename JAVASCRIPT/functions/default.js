function test(a = 10, ...numbers) {//a-10 is default 
    console.log(a);//...numbers is called rest parameter
    console.log(numbers);
}

test();