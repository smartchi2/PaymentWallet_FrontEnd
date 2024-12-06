import { useState } from "react"
import { allLetter, isEmail } from "../lb/Input-validator";
import { ClassNames } from "@emotion/react";
import Login from "./Login";
import { Link } from "react-router-dom";
import ButtonLink from "../common/ButtonLink";
import Movefundlogo from "../assets/moveFundsLogo.svg"
import EmailSender from "../assets/emailSender.svg"

 function VerifyEmail(props) {


  const [emailInput, setEmailInput] = useState();
 
  
  const [emailError, setEmailError] = useState(false);


  const [sucess, setSucess] = useState()

  const [loading, setLoading] = useState(false)

   

  
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

    

      
        
  return (
    <div style={{margin: "10px"}}>
        <div className="justify-center flex pt-20 ">
        <Link to={'expense-tracker'}>
        <ButtonLink 
          href="" 
          children={<img   className=
            "object-cover bg-white h-50 w-10 rounded border"
          src={Movefundlogo} 
          alt="MoveFunds"/>}
          />
          </Link>
        </div>

        <div className="pt-20 flex  justify-center">
        <div className="flex  gap-8 overflow-hidden rounded-2xl bg-sky-100  px-4 sm:px-0 md:flex-row md:gap-8 xl:w-1/2 ">
        <div className="mt-10 flex flex-col justify-center gap-4  text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:mt-0 md:text-left">
        <h1 className="m-auto text-center text-3xl font-semibold text-gray-800 
        sm:w-[16ch] md:m-0 md:text-left">
           Please enter your email below
        </h1>
        </div>
        <div className="m-auto max-w-96  md:w-1/2 md:mt-36">
        </div>
        <div className=
            " bg-white h-[20vh] w-60  flex justify-center animate-pulse">
      <img src={EmailSender} alt="" />

    </div>
        </div>

      
        
  
 {sucess && [
  <div role="alert" className="alert alert-success mt-3 bg-green-500">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current "
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{sucess}</span>
</div>
]} 



    </div>
    <div className="flex justify-center pt-32">
      <div className="mt-3 mb-2 text-black font-black items-center gap-4" >
     
        Email:
      </div>
      <input type="text" 
      placeholder="Enter email"
      onChange={(event) => setEmailInput(event.target.value)}
      onBlur={handleEmailError}
      className="input input-bordered input-accent w-full 
      max-w-xs h-10 border-2 border-indigo-400 text-[black] rounded-md "
      />
    </div> 

    <div className="flex justify-center">
   <Link to={"/otpverification"}>
<button
  className={` ${loading ? "loading" : ""}inline-block cursor-pointer    rounded-md bg-blue-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white mt-3 transition duration-200 ease-in-out hover:bg-gray-500`}
  >
  Verify Now
</button>
</Link> 
</div>
    </div>
    
  )
} 
   
export default VerifyEmail;