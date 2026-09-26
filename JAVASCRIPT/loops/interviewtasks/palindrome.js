let n = 1215;
let original=n;
let reverse = 0;

while (n > 0) {

    let digit = n % 10;// get last digit

    reverse = reverse *10 + digit;// remove last digit

    n = Math.floor(n / 10); // add digit to reverse
}

if(original===reverse){
    console.log("this is palindrome")
}
else{
    console.log("not polindrome");
}