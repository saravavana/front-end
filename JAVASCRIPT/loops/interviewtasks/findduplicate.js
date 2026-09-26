// let n=583292;//singleduplicate
// let found=false;
// while(n>0){
//     let target=n%10;
//     let temp=Math.floor(n/10);
//     while(temp>0){
//         let digit=temp%10;
//         if(target===digit){
//             console.log("duplicate:",target)
//             found=true;
//             break;
//         }
//         temp=Math.floor(n/10);
//     }
//     if(found){
//         break;
//     }
//     n=Math.floor(n/10);
// }

let n=11223345;//multi duplicate 
let original=n;
while(n>0){
    let target=n%10;
    let temp=Math.floor(original/10);
    let count=0;
    while(temp>0){
        let digit=temp%10;
        if(target===digit){
          count++;  
        }
        temp=Math.floor(temp/10);
    }
    if(count>0){
        console.log("Duplicate:",target)
    }

    n=Math.floor(n/10);
}