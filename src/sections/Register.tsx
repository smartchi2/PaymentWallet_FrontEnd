import { useState } from "react"
import { allLetter, isEmail } from "../lb/Input-validator";

function Register() {

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


  const [formVaild, setFormVaild] = useState();

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

      const handleSubmit = (event) => {
        event.preventDefault();

        if(!firstNameInput || firstNameError){
          setFormVaild("Please fill in your first name");

        }

      };
        
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
        Email:
      </div>
      <input type="text" 
      placeholder="Email here"
      onChange={(event) => setEmailInput(event.target.value)}
      onBlur={handleEmailError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />
    </div>

    <div className="mt-5">
      <div className="mt-3 mb-2 text-[black]" align="left">
        Phone number:
      </div>
      <input type="text" 
      placeholder="Phone number here"
      onChange={(event) => setPhoneNumberInput(event.target.value)}
      onBlur={handlePhoneNumberError}
      className="input input-bordered input-accent w-full 
      max-w-xs border-2 border-indigo-400 text-[black] rounded-md"
      />
    </div>

    <div className="mt-5">
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
    </div>
    {formVaild && [

    ]}


    <button onClick={handleSubmit} className="btn btn-wide btn-accent w-full bg-blue-500 mt-10 rounded hover:bg-gray-700">Register Now</button>
    </div>
  )
} 
   
export default Register