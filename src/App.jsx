import UserInput from "./components/UserInput"
import Header from "./components/header"
import Result from "./components/resutls";
import { useState } from "react";


function App() {
  const [useInput, setUserInput] =   useState({
    initialInvestment : 100,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration: 10
})

const validInput = useInput.duration >= 1;

function handleChange(userInputType, value){
setUserInput(prevInput=>{
    return{...prevInput, 
        [userInputType] : +value
    };
})
} 
  return (
    <>
      <Header/>
      <UserInput onChange = {handleChange} useInput = {useInput}/>
      {!validInput && <p className="center">please add valid data</p>}
      {validInput && <Result input={useInput}/>}
    </>
  )
}

export default App
