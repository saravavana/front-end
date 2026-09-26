// let n = 583291;
// let largest = 0;

// while (n > 0) {
//     let digit = n % 10;

//     if (digit > largest) {
//         largest = digit;
//     }

//     n = Math.floor(n / 10);
// }

// console.log(largest);

let n=583292;
let largesteven;
while(n>0){
    let digit=n%10;
    if(digit%2===0){
        if(largesteven===undefined){
            largesteven=digit;
        }
        else if(digit>largesteven){
            largesteven=digit;
        }
    }
    n=Math.floor(n/10);
}