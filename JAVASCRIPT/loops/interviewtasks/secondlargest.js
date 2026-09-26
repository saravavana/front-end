// // let n = 583292;//second larget
// // let largest=0;
// // let secondlargest=0;
// // while(n>0){
// //     let digit=n%10;
// //     if(digit>largest){
// //          secondlargest=largest;
// //         largest=digit;
// //     }
// //     else if(digit>secondlargest){
// //         secondlargest=digit;
// //     }
// //     n=Math.floor(n/10);
// // }
// // console.log(secondlargest);

// let n = 729477;//second distinct largest

// let largest=0;
// let secondlargest=0;

// while(n>0){
//     let digit=n%10;
//     if(digit>largest){
//         secondlargest=largest;
//         largest=digit;
//     }
//     else if(digit<largest && digit>secondlargest){
//         secondlargest=digit;
//     }
//     n=Math.floor(n/10);
// }
// console.log(secondlargest);


let n = 583292;
let largesteven;
let secondlargesteven;
while(n>0){
    let target=n%10;
    if(target%2===0){
        if(largesteven===undefined){
            largesteven=target;
        }
         else if(target>largesteven){
            secondlargesteven=largesteven;
            largesteven=target;
        }
        else if(secondlargesteven===undefined && target>secondlargesteven){
            secondlargesteven=target;
        }
    }
    n=Math.floor(n/10);
}
console.log(secondlargesteven);