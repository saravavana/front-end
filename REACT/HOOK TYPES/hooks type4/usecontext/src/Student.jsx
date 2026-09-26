import StudentContext from "./StudentContext";
import { useContext } from "react";
function Student(){
    const name=useContext(StudentContext)
    return(
        <>
        <h1>student name:{name}</h1>
        </>
    )
}
 export default Student;