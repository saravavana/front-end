let n = 12345;
let reverse = 0;

while (n > 0) {

    let digit = n % 10;// get last digit

    reverse = reverse *10 + digit;// remove last digit

    n = Math.floor(n / 10); // add digit to reverse
}

console.log(reverse);

//num reverse using string
let s=12345;
let run=String(s);
let reverseing=run.split("").reverse().join("");
console.log(reverseing);

