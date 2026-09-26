import { useEffect } from "react";
function Index(){
   
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>
    {
        return res.json()
        .then((data)=>
        {
            console.log(data)})
    })
})

}
export default Index