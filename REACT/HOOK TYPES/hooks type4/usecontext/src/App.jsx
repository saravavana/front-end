// import { useReducer } from "react";
// const initialState={
//   coun:0,
// };
// function reducer(state,action){
//   switch (action.type){
//     case "increment" :
//       return{count:state.count +1};
//        case "decrement":
//       return{count:state.count -1};
//        case "reset":
//       return{count:0};
//       default:
//         return state;`12qwe`
//   }
// }
// function App(){
//   const [state,dispatch]=useReducer(reducer,initialState);
//   return(
//     <>
//      <div style={{textAlign:"center"}}>
//       <h1>Count:{state.count}</h1>
//       <button onClick={()=>dispatch({type:"increment"})}>increment</button>
//       <button onClick={()=>dispatch({type:"decrement"})}>deccrement</button>
//       <button onClick={()=>dispatch({type:"reset"})}>reset</button>
//      </div>
//     </>
//   )
// }
// export default App

import Student from './Student.jsx'
import StudentContext from './StudentContext'

function App(){
  return(
    <>
    <StudentContext.Provider value={"karthi"}>
      <Student></Student>

    </StudentContext.Provider>
    </>
  )
}
export default App;