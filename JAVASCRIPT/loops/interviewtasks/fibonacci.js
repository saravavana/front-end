let a=0; //first n fibonacci numbers
let b=1;
console.log(a)
console.log(b)
for(let i=0;i<=4;i++){
    let c=a+b;
    a=b;
    b=c;
    console.log(c);
}
let p=0;//nth fibonacci number
let q=1;
let n=6;
for(let i=1;i<=n;i++){
let r=p+q;
p=q;
q=r;
if(i===n){
    console.log(r);
}
}

let s=0;//fibonacci with limit
let t=1;
let z=20;
console.log(s);
console.log(t);
for(let i=1;i<=z;i++){
    let u=s+t;
    s=t;
    t=u;
    if(u>20){
        break;
    }
    console.log(u);
    
    
}
