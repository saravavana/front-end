function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        return x + y;
    }

    return inner();
}

console.log(outer());