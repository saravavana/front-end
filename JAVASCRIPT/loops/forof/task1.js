// // let fruits = ["Apple", "Mango", "Orange"];

// // for (let fruit of fruits) {
// //     console.log(fruit);
// // }//get value one by one

// // let numbers=[10,20,30,40,50];
// // for(let num of numbers){
// //     console.log(num);
// // }
// // for( let number of numbers){
// //     if(number%2===0){
// //         console.log(number);
// //     }
// // }

// let numbers = [12, 7, 25, 30, 41, 50, 18, 33];
// for(let num of numbers){
//     if(num%5===0){
//         continue;
//     }
//     if(num%2===0){
//         console.log(num);
//     }
// }

let numbersu = [12, 5, 8, 21, 30, 17, 40, 9, 50];
for(let num of numbersu){
    if(num%5===0){
        continue;
    }
    if(num===40){
        break;
    }
    if(num%2===0){
        console.log(num);
    }
}