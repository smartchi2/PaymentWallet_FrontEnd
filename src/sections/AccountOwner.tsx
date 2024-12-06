import ButtonLink from "../common/ButtonLink"
import Movefundlogo from "../assets/moveFundsLogo.svg"
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import Login from "../sections/Login"
import Register from "../sections/RegisterForNewAccount"
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

function AccountOwner() {

    const [checked, setChecked] = useState(true);
    const handleChange = (Event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(Event.target.checked);
    }
  return (
    <>
     <ButtonLink 
          href="http://localhost:5174/#" 
          children={<img   className=
            "object-cover h-50 w-10  bg-white rounded border items-center justify-center "
          src={Movefundlogo} 
          alt="MoveFunds"/>}
          />
    <div className="ml:h-[95%] justify-center font-extrabold h-screen">
    <h1 className="flex flex-col justify-center font-semibold">Welcome back Customer</h1>
    <div className="w-[80%] mx-auto pt-10 ">

    <div style={{border: "1px solid blue", boxShadow:"0px 0px 70px rgb(blue / 50%)",     
    }}
     className="rounded-lg mt-3 text-white bg-black-500 p-5 w-[90%] m-auto lg lg:w-[800px] md:w-[800%] "
     align="center"
     >
    { checked ? (   
    <div className="text-3xl">
    <Chip  
    avatar={<Avatar>R</Avatar>}
    color="sucess" 
    label="OPEN AN ACCOUNT WITH US TODAY!!"
    />
    </div>
    ) : (
    <div className="text-3xl">
    <Chip  
    avatar={<Avatar>L</Avatar>}
    color="primary" 
    label="LOGIN TO ACCESS YOUR ACCOUNT"
    />
    </div>
  
    )}
    <Switch
     checked={checked}
     onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
   />

    {checked ? <Register/> : <Login/>}
    </div>

   
    </div>
    </div>
    </>
  )
}
export default AccountOwner;