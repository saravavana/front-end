// let n=583292;//second smalest
// let smallest=9;
// let secondsmallest=9;
// while(n>0){
//     let digit=n%10;
//     if(digit<smallest){
//         secondsmallest=smallest;
//         smallest=digit;
//     }
//     else if(digit<secondsmallest){
//         secondsmallest=digit;
//     }
//     n=Math.floor(n/10);
// }
// console.log(secondsmallest);

let n = 583292;// distinct smallest

let smallest = 9;
let secondSmallest = 9;

while (n > 0) {
    let digit = n % 10;

    if (digit < smallest) {
        secondSmallest = smallest;
        smallest = digit;
    }
    else if (digit > smallest && digit < secondSmallest) {
        secondSmallest = digit;
    }

    n = Math.floor(n / 10);
}

console.log(secondSmallest);