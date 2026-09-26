// import {useRef} from "react";
// function App() {
//   const input = useRef();
//   function focus(){
//     input.current.focus();
//     input.current.value="";
//   }
 
//   return (
//     <>
//       <input ref={input} type="text" placeholder="Type something..." />
//       <br />
//       <button onClick={focus}>Focus</button>
//     </>
//   );
// }
// export default App;

//use memo-used to handle multple data handle
import { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(1);

  const multiCount = useMemo(() => {
    let fact=1;
    for(let i=1;i<=count;i++){
      fact=fact*i;
    }
    return fact;
  });

  return (
    <>
      <h1>Count: {multiCount}</h1>
      <input type= "number"
       value={count}
       onChange={(e) => setCount(Number(e.target.value))} />
    </>
  );
}
export default App;