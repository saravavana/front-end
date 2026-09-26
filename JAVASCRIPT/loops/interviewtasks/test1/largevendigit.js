// // // // let n = 583292;
// // // //  let largesteven=0;
// // // //  while(n>0){
// // // //   let digit=n%10;
// // // //   if(digit%2===0){
// // // //     if(digit>largesteven){
// // // //         largesteven=digit;
// // // //     }
    
// // // //   }
// // // //   n=Math.floor(n/10); 
// // // //  }
// // // //  console.log(largesteven)

// // //  let n = 583292;
// // //  let largesteven=0;
// // //  let secondlargesteven=0;
// // // while(n>0){
// // //     let digit=n%10;
// // //     if(digit%2===0){
// // //         if(digit>largesteven){
// // //             secondlargesteven=largesteven;
// // //             largesteven=digit;
// // //         }
// // //         else if(digit<largesteven && digit>secondlargesteven ){
// // //             secondlargesteven=digit;
// // //         }
// // //     }
// // //     n=Math.floor(n/10);
// // // } 
// // // console.log(secondlargesteven);

// // let n = 74652381;
// // let sum=0;
// // while(n>0){
// //     let digit=n%10;
// // let i=1;
// // let count=0;
// // while(i<=digit){
// //     if(digit%i===0){
// //        count++;
// //     }
// //     i++;
// // }
// // if(count===2){
// //     sum=sum+digit;
// // }
// //     n=Math.floor(n/10);
// // }
// // console.log(sum);

// let n = 9284735261;
// let countprime=0;
// while(n>0){
//     let digit=n%10;
//     let i=1;
//     let count=0;
//     while(i<=digit){
//         if(digit%i===0){
//             count++;
//         }
//         i++;
//     }
//     if(count===2){
//         countprime++;
//     }
//     n=Math.floor(n/10);

// }
// console.log(countprime);

let n = 68453721;
let sumeven=0;
let productodd;
while(n>0){
    let digit=n%10;
    if(digit%2===0){
        sumeven+=digit;
    }
    else{
        if(productodd===undefined){
            productodd=digit;
        }
        else{
            productodd*=digit;
        }
        
    }
    n=Math.floor(n/10);
}
console.log(sumeven);
console.log(productodd);