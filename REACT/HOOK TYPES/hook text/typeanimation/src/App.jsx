import {TypeAnimation} from 'react-type-animation'
function App(){

  return(
    <>
    <h2>
      <TypeAnimation
      sequence={["hello am i suufering ",2000,"iam sk add data",2000,]}
        wrapper='h3'
        speed={0}
        repeat={Infinity}>


      </TypeAnimation>

    </h2>
    </>
  )
}
export default App