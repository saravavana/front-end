let n=583292;
let smallestodd;
let secondsmallestodd;
while(n>0){
    let digit=n%10;
    if(digit%2===1){
        if(smallestodd===undefined){
            smallestodd=digit;
        }
        else if(digit<smallestodd){
            secondsmallestodd=smallestodd;
            smallestodd=digit;
        }
        else if(digit>smallestodd && secondsmallestodd===undefined ||digit<secondsmallestodd){
            secondsmallestodd=digit;
        }
    }
    n=Math.floor(n/10);
}
console.log(secondsmallestodd);