// // let n = 58329;

// // let digit = n % 10;
// // let smallest = digit;

// // n = Math.floor(n / 10);

// // while (n > 0) {
// //     digit = n % 10;

// //     if (digit < smallest) {
// //         smallest = digit;
// //     }

// //     n = Math.floor(n / 10);
// // }

// // console.log(smallest);

// let n=583291;
// let digit=n%10;
// let largest=digit;
// let smalest=digit;
// n=Math.floor(n/10);
// while(n>0){
//     digit=n%10;
//     if(digit>largest){
//         largest=digit;
//     }
//     if(digit<smalest){
//         smalest=digit;
//     }
//     n=Math.floor(n/10);
// }
// console.log(largest);
// console.log(smalest);

let n=583292;
let smallestodd;
while(n>0){
    let digit=n%10;
    if(digit%2==1){
    if(smallestodd===undefined){
        smallestodd=digit;
    }
    else if(digit<smallestodd ){
        smallestodd=digit;
    }
}
    n=Math.floor(n/10);
}
console.log(smallestodd);