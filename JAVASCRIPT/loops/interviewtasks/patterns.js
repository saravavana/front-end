
for(let i=1;i<=5;i++){//increasing start
    let a='';
    for(let j=1;j<=i;j++){
        a+='*';
    }
 console.log(a) ;  
}

let n=4;//continues numbers (or) floyd's traingle
let num=1;
for(let i=1;i<=n;i++){
    let a='';
    for(let j=1;j<=i;j++){
        a+=num++;
    }
    
    console.log(a);
}

let r=5;//repeaing row &coloumn numbers
for(let i=1;i<=r;i++){
    let a='';
    for(let j=1;j<=i;j++){
        a+=j;
    }
    
    console.log(a);
}

let st=4;//repeating row  numbers

for(let i=1;i<=st;i++){
    let a='';
    for(let j=1;j<=i;j++){
        a+=i;
    }
    
    console.log(a);
}

let k=1;//decreasing start
for(let i=5;i>=k;i--){
    let a='';
    for(let j=1;j<=i;j++){
        a+='*';
    }
    console.log(a);
}
let m=5;//left increasing patterns
for(let i=1;i<=m;i++){
    let a='';
    for(let j=1;j<=m-i;j++){    

        a+=' ';
    }       

    for(let j=1;j<=i;j++){
        a+='*';
    }
    console.log(a);
}

let s=5;//pramid patterns
for(let i=1;i<=s;i++){
    let a='';
    for(let j=1;j<=s-i;j++){    

        a+=' ';
    }       

    for(let j=1;j<=2*i-1;j++){
        a+='*';
    }
    console.log(a);
}

let p=5;//right shifted increase patterns
for(let i=1;i<=p;i++){
    let a='';
    for(let j=1;j<=i-1;j++){
        a+=' ';
    }
    for(let j=1;j<=i;j++){
        a+='*';
    }
    console.log(a);
}

let q=5;//right shifted decrease patterns
for(let i=1;i<=q;i++){
    let a='';
    for(let j=1;j<=i-1;j++){
        a+=' ';
    }
    for(let j=1;j<=(q-i)+1;j++){
        a+='*';
    }
    console.log(a);
}

let b=5;//pyramid reverse patterns  
for(let i=b;i>=1;i--){
    let a='';
    for(let j=1;j<=b-i;j++){    

        a+=' ';
    } 
    for(let j=1;j<=2*i-1;j++)
        {
        a+='*';
    }

    console.log(a);
}

let w=5;//diamond patterns
for(let i=1;i<=w;i++){
    let a='';
for(let j=1;j<=w-i;j++){
    a+=' ';
}
for(let j=1;j<=2*i-1;j++){
    a+='*';
}
console.log(a);
}
for(let i=w;i>=1;i--){
    let a='';
    for(let j=1;j<=w-i;j++){
        a+=' ';
    }
    for(let j=1;j<=2*i-1;j++){
        a+='*';
    }
    console.log(a);
}

let c=5;//number pramid
for(let i=1;i<=c;i++){
    let a='';
    for(let j=1;j<=c-i;j++){
        a+=' ';
    }
    for(let j=1;j<=2*i-1;j++){
        a+=j;
    }
    console.log(a);

}
 let d=3;//continues number pramid
 let number=1;
 for(let i=1;i<=d;i++){
let a='';
for(let j=1;j<=d-i;j++){
    a+=' ';
}
for(let j=1;j<=2*i-1;j++){
    a+=number++;
}
console.log(a);
 }

 let e=5;//Hollow Square
 for(let i=1;i<=e;i++){
    let a='';
    for(let j=1;j<=e;j++){
        if(i === 1 || i === e || j === 1 || j === e){
            a+='*';
        }
        else{
            a+=' ';
        }
    }
    console.log(a);
 }

 let row=4;
 let colmn=7;//hollow rectangle
 for(let i=1;i<=row;i++){
    let a='';
    for(let j=1;j<=colmn;j++){
        if(i === 1 || i === row || j === 1 || j === colmn ){
            a+='*';
        }
        else{
            a+=' ';
        }
    }
    console.log(a);
 }
 let g=4;
 for(let i=1;i<=g;i++){
    let a='';
    for(let j=1;j<=g-i;j++){
         a+=' ';
    }
    for(let j=1;j<=2*i-1;j++){
        if( i === g || j === 1 || j === 2*i-1){
            a+='*';
        }
        else{
            a+=' ';
        }
    }
    console.log(a);
 }

 let h=5;//0-1 traingle
 for(let i=1;i<=h;i++){
    let value='';
    for(let j=1;j<=i;j++){
        if((i+j)%2===0){
            value+=1;
        }
        else{
            value+=0;
        }
    }
    console.log(value);
 }