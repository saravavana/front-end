// // let sum=0;
// // let n=20;
// // for(let i=0;i<=n;i++){
// //     if(i%2===0){
// //         sum=sum+i;
// //     }
// // }
// // console.log(sum)

// let count=0;
// let sum=0;
// let n=20;
// for(let i=1;i<=n;i++){
// if(i%2==0){
//     count++;
//     sum=sum+i;
    
// }    

// }
// console.log(count);
// console.log(sum);

let n = 68453721;
 let evensum =0;
 let odddigit;
while(n>0){
    let digit=n%10;
    if(digit%2===0){
        evensum+=digit;
    }
    else{
        if(odddigit===undefined){
            odddigit=digit;
        }
        else{
        odddigit*=digit;
        }
    }
    n=Math.floor(n/10);

}
console.log(evensum);
console.log(odddigit);