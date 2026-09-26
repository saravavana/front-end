let numbers = [10, 20, 30, 40, 50];
for(i=0;i<=numbers.length;i++){
    console.log(numbers[i]);
}

let n=[10,20,30,40];
for(run of n){
    console.log(run);
}
let fruits = ["Apple", "Mango", "Orange", "Grapes"];
for(fruit of fruits){
    console.log(fruit);
}


let number = [5, 10, 15, 20];
number.forEach(function(run){
    console.log(run);
});

let numbereven = [12, 7, 24, 9, 18, 5];
for(i=0;i<=numbereven.length;i++){
    if(numbereven[i]%2===0){
        console.log(numbereven[i]);
    }
}

let evensum = [12, 7, 24, 9, 18, 5];
let sum=0;
for(even of evensum){
    if(even%2===0){
        sum=sum+even;
    }
}
console.log(sum)

let evennumber = [3, 8, 11, 14, 20, 7];
let count=0;
evennumber.forEach(function(counts){
    if(counts%2===0){
        count++;
    }
})
console.log(count)

let ns = [12, 7, 24, 9, 18, 5];
let sums=0;//evensum
ns.forEach(function(num){
    if(num%2===0){
        sums=sums+num;
    }
})
console.log(sums)

let fruitu = ["Apple", "Mango", "Orange"];
fruitu.forEach(function(fruit,index){
    console.log(index,fruit);
})

let dnumbers = [10, 45, 20, 80, 30];
let large=dnumbers[4];//largenum
for(let i=0;i<dnumbers.length;i++){
    if(large<dnumbers[i]){
        large=dnumbers[i];
    }
}
console.log(large);

let numbe = [12, 7, 25, 18, 30];
let small=numbe[0];//smallnum
for(let i=0;i<numbe.length;i++){
    if(small>numbe[i]){
        small=numbe[i];
    }
}
console.log(small);

let numberis = [10, 25, 8, 40, 15, 30];
let countr=0;//greater
for(let i=0;i<numberis.length;i++){
    if(numberis[i]>25){
        countr++;
    }
}
console.log(countr);

let numbu = [10, 20, 30, 20, 40, 10];
for(let i=0;i<numbu.length;i++){
    for(let j=i+1;j<numbu.length;j++){
    if(numbu[i]===numbu[j]){
        console.log("Duplicate values Exist")
    }
}
}