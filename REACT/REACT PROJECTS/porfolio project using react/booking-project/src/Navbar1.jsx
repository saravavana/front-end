// import './Navbar.css';

// function Navbar(props){
//     return(
//         <>
        
//         <div className="card">
//             <img src={props.img} alt="" />
//             <h1>{props.name}</h1>
//             <p>{props.price}</p>
//             <a href="" className='btn btn-primary'>buy now</a>
//         </div>
        
//         </>
//     )
// }
// export default Navbar

function Navbar1(){
    const array=[{
        name:"apple",
        age:18
    },
    {
        name:"orenge",
        age:19
    },
    {
        name:"mango",
        age:20
    }
    
];

const mapping=array.map((result)=>{
    return(
    <div className="card">
        <h1>{result.name}</h1>
        <h1>{result.age}</h1>


    </div>
    )
});
return(
    <>
    {mapping}
    </>
)
}
export default Navbar1