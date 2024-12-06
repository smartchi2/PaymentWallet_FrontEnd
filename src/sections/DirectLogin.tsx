import ButtonLink from "../common/ButtonLink"
import Movefundlogo from "../assets/moveFundsLogo.svg"
import Chip from '@mui/material/Chip';
import Avatar from "@mui/material/Avatar";
import Direct from "../sections/Login";

function DirectLogin() {
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
    <h1 className="flex flex-col justify-center font-semibold">Welcome back customer</h1>
    <div className="w-[80%] mx-auto pt-10 ">

    <div style={{border: "1px solid blue", boxShadow:"0px 0px 70px rgb(blue / 50%)",     
    }}
     className="rounded-lg mt-3 text-white bg-black-500 p-5 w-[90%] m-auto lg lg:w-[800px] md:w-[800%] "
     align="center"
     >

    <div className="text-3xl">
    <Chip  
    avatar={<Avatar>L</Avatar>}
    color="primary" 
    label="WELCOME BACK TO moveFunds"
    />
    <Direct/>
    </div>

    </div>
    </div>
    </div>
    </>
  )
}
export default DirectLogin;