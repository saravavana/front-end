// // let n=583292;
// // let frequency=2;
// // let count=0;

// //  while(n>0){
// //    let digit=n%10;
// //     if(frequency===digit){
// //         count++;
// //     }
// //     n=Math.floor(n/10);
// //  }
// //  console.log(count);

//  let n = 1122333;

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;

// while (n > 0) {
//     let digit = n % 10;

//     if (digit === 1) {
//         count1++;
//     }

//     if (digit === 2) {
//         count2++;
//     }

//     if (digit === 3) {
//         count3++;
//     }

//     n = Math.floor(n / 10);
// }
// let largest=count1;
// let mostfrequent=1;

// if(largest<count2){
//     largest=count2;
//     mostfrequent=2;
// } if(largest<count3){
//     largest=count3;
//     mostfrequent=3;
// }


// console.log("Most frequent digit:", mostfrequent);
// console.log("Frequency:", largest);



let n = 583292;
let digit=n%10;
let smalest=digit;

while(n>0){
  digit=n%10;
if(digit%2===0 && digit<smalest){
smalest=digit;
}
n=Math.floor(n/10);
}
console.log(smalest);

let f = 583292;
let sum=0;
while(f>0){
    let digits=f%10;
    if(digits%2===1){
        sum=sum+digits;
    }
    f=Math.floor(f/10);
}
console.log(sum);
// let n = 583292;
// let largest = 0;

// while (n > 0) {
//     let digit = n % 10;

//     if (digit > largest) {
//         largest = digit;
//     }

//     n = Math.floor(n / 10);
// }