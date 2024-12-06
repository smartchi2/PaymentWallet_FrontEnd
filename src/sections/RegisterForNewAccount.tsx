import { useState } from "react"
import { allLetter, isEmail } from "../lb/Input-validator";
import { ClassNames } from "@emotion/react";
import Login from "./Login";
import { Link } from "react-router-dom";

 function RegisterForNewAccount(props) {

  const [firstNameInput, setFirstNameInput] = useState();
  const [lastNameInput, setLastNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  const [addressInput, setAddressInput] = useState();

  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);


  const [sucess, setSucess] = useState()

  const [loading, setLoading] = useState(false)

   const handleFirstNameError = () =>{
    if(!firstNameInput || !allLetter(firstNameInput)){
      setfirstNameError(true)
      return;
    }
    setfirstNameError(false);
   }

   const handleLastNameError = () =>{
    if(!lastNameInput || !allLetter(lastNameInput)){
      setlastNameError(true)
      return;
    }
    setlastNameError(false);
  }
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

      const handlePhoneNumberError = () =>{
        if(!phoneNumberInput || !allLetter(phoneNumberInput)){
          setPhoneNumberError(true)
          return;
        }
        setPhoneNumberError(false);
        }
        const handleAddressError = () =>{
          if(!addressInput || !allLetter(addressInput)){
            setAddressError(true)
            return;
          }
          setAddressError(false);
        }

      
        
  return (
    <div style={{margin: "10px"}}>
    <div className="mt-5">
      <div className="mt-3 mb-2 text-[black]" align="left">
        First Name:
      </div>
      <input type="text" 
      placeholder="First name here"
      onChange={(event) => setFirstNameInput(event.target.value)}
      onBlur={handleFirstNameError}
      className={`input input-bordered ${ firstNameError ?"input-error" : "input-accent"} w-full ||
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md`}
      />
    </div>
    <div className="mt-9">
      <div className="mt-3 mb-2 text-[black]" align="left">
        Last Name:
      </div>
      <input type="text" 
      placeholder="Last name here"
      onChange={(event) => setLastNameInput(event.target.value)}
      onBlur={handleLastNameError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />
    </div>

    <div className="mt-5">
      <div className="mt-3 mb-2 text-[black]" align="left">
        OtherName:
      </div>
      <input type="text" 
      placeholder="Other name here"
      onChange={(event) => setEmailInput(event.target.value)}
      onBlur={handleEmailError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />
    </div>

    <div className="mt-5">
      <div className="mt-3 mb-2 text-[black]" align="left">
        Email:
      </div>
      <input type="text" 
      placeholder="Email here"
      onChange={(event) => setPhoneNumberInput(event.target.value)}
      onBlur={handlePhoneNumberError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />
    </div>

    <div className="mt-5">
      <div className="mt-3 mb-2 text-[black]" align="left">
        Phone Number:
      </div>
      <input type="text" 
      placeholder="Phone number here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Alternate PhoneNumber:
      </div>
      <input type="text" 
      placeholder="Alternat Phone number here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Address:
      </div>
      <input type="text" 
      placeholder="Address here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        State of origin:
      </div>
      <input type="text" 
      placeholder="State of origin here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        City:
      </div>
      <input type="text" 
      placeholder="City here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Country:
      </div>
      <input type="text" 
      placeholder="Country here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Gender:   
        </div>
      <input type="text" 
      placeholder="Gender here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Account type:
      </div>
      <input type="text" 
      placeholder="Account type here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Valid Id card number:
      </div>
      <input type="text" 
      placeholder="Valid Id card number here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Bvn:
      </div>
      <input type="text" 
      placeholder="Bvn here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Transfer Pin:
      </div>
      <input type="text" 
      placeholder="Transfer Pin here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />

<div className="mt-3 mb-2 text-[black]" align="left">
        Password:
      </div>
      <input type="text" 
      placeholder="Password here"
      onChange={(event) => setAddressInput(event.target.value)}
      onBlur={handleAddressError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />
    
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

<button
  className={` ${loading ? "loading" : ""}inline-block cursor-pointer rounded-md bg-blue-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white mt-3 transition duration-200 ease-in-out hover:bg-gray-500`}
  >
    Verify
</button>
<div className="mt-3 text-black flex justify-center">
  Have an account?
  <div
   onClick={() => props.setChecked(false)}
   className="badge badge-info mx-2 cursor-pointer bg-blue-700 w-80 rounded text-white">
    Click the switch icon above  to login^
  </div>
</div>
    </div>
  )
} 
   
export default RegisterForNewAccount;