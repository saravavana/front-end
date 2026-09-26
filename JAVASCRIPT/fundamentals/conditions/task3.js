let username = "saran";
let password = "1234";
let isBlocked = false;
let isAdmin = true;
if(isBlocked===true){
    console.log("Account Blocked");
}
else{
    if(username==="saran" && password==="1234"){
        console.log("Login Successful");
        if(isAdmin===true){
            console.log("Welcome Admin");
        }
        else{
            console.log("Welcome User");
        }
    } 
    else{
        console.log("Invalid username or Password")
    }
}