import { useState } from "react"
import { allLetter, isEmail } from "../lb/Input-validator";
import  Women from "../assets/happyMan.jpg"

function Login() {

 
  const [emailInput, setEmailInput] = useState();
  const [emailError, setEmailError] = useState(false);




  const handleEmailError = () =>{
    if(!emailInput){
      setEmailError(true)
      return;
    }else if(!isEmail(emailInput)){
      setEmailError(true);
      return;
    }
    setEmailError(false);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(!emailInput || emailError){
        setFormVaild("Please fill in your first name");

      }
    }


  return (
  
    <div className="mt-5">
    <div className="mt-3 mb-2 text-[black]" align="left">
      Email:
    </div>
    <input type="text" 
    placeholder="Email here"
    onChange={(event) => setEmailInput(event.target.value)}
    onBlur={handleEmailError}
    className="input input-bordered input-accent w-full 
    max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
    />

<div className="mt-3 mb-2 text-[black]" align="left">
      Password:
    </div>
    <input type="text" 
    placeholder="Password"
    onChange={(event) => setEmailInput(event.target.value)}
    onBlur={handleEmailError}
    className="input input-bordered input-accent w-full 
    max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
    />
    <button onClick={handleSubmit} className="btn btn-wide btn-accent w-full bg-blue-500 mt-10 rounded">Login Now</button>
    <div className="flex flex-col">
    <img className="mt-20 mb-0.5 px-3" align="left"src={Women} alt="" />
    </div>
  </div>
    
  )
}

export default Login
