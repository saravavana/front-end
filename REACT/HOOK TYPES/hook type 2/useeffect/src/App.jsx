// import { TypeAnimation } from "react-type-animation";
// import { useState,useEffect } from "react";
// import  "./App.css";
// function App(){
//   const[value,setvalue]=useState(0)
//   useEffect(() => {
//      },[]);

//   function inc(){
//       setvalue(value+1)
//   }
//   function dec(){
//       setvalue(value-1)
//   }

//   return(
//     <>
//     <div id="app">
//   <h2 id="heading">
//   <TypeAnimation
//   sequence={["Counter Application",2000]}
//   wrapper="h3"
//   speed={50}
//   repeat={Infinity}></TypeAnimation>
//   </h2>
//   <h1 id="count">{value}</h1>
//   <div id="Countbuttons">
//     <button onClick={inc} id="bone">Increment</button>
//   <button onClick={dec} id="btwo">Decrement</button>

//   </div>
//     </div>
//   </>
//   )
// }
// export default App

import Index from "./index.jsx"
function App(){
  return(
    <>
    <Index/>
    </>
  )
}
export default App