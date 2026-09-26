// import {use,useState} from "react";
// function App(){
// const[name,setname]=useState("");
// const[password,setpassword]=useState("");
// const[nameerr,setnameerr]=useState("");
// const[passerr,setpasserr]=useState("");
// function handle(e){
//   e.preventDefault();

// if(name===""){
//   setnameerr("name is empty")
// }
// else if(password===""){
//   setpasserr("password is empty")
// }
// else{
//   setnameerr("")
//   setpasserr("")
//   alert("success")
// }

// }
//   return(
//     <>
//     <div>
//       <form onSubmit={handle}>
//         <h1>Login</h1>
//         <label htmlFor="">name</label>
//         <input type="text" placeholder="enter your name"
//          value={name} 
//         onChange={(e)=>setname(e.target.value)} />
//         <br />
//       <p>{nameerr}</p>
//         <label htmlFor="">password</label>
//         <input type="password" placeholder="enter your password" value={password} 
//         onChange={(e)=>setpassword(e.target.value)} />
//         <br />
//         <p>{passerr}</p>
//         <button type="submit" onClick={handle}> submit</button>
//       </form>

//     </div>
    
//     </>
//   )
// }
// export default App
import { use, useState } from "react";

function App() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [nameerr, setnameerr] = useState('');
  const [passerr, setpasserr] = useState('');

  function handle(e) {
    if (name === '') {
      setnameerr('name is required')

    }
    else if (password === '') {
      setpasserr('password is required')
    }
    else {
      setnameerr ('');
      setpasserr ('')
      alert ('successfully sumbitted')
    }

  }


  return (
    <>
      <div>
        
        <form onSubmit={handle}>
          <h1>LOGIN</h1>
          <label htmlFor="">NAME</label>
          <input value={name} placeholder="Enter Your Name" onChange={(e) => setname(e.target.value)} />
          <br />
          <label htmlFor="">PASSWORD</label>
          <input type="password" value={password} placeholder="Enter Your Password" onChange={(e) => setpassword(e.target.value)} />
          <br />
          <button type="submit" onClick={handle}>submit</button>
        </form>

      </div>

    </>
  )
}
export default App