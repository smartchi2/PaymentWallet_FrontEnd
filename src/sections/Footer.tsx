import StoreLinks from "../common/StoreLinks"
import { Btntypes } from "../common/StoreLinks"
import ButtonLink from "../common/ButtonLink"
import Movefundlogo from "../assets/moveFundsLogo.svg"
import X from "../assets/X.svg"
import Facebook from "../assets/facebook.svg"
import Linkedin from "../assets/linkedIn.svg"

function Footer() {
  return (
    <section className="bg-gray-800">
    <div className="flex max-w-7xl flex-col py-12 px-8 text-gray-300 lg:px-12 xl:m-auto">
    <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
    <div>
    <ButtonLink 
          href="#" 
          children={<img   className=
            "object-cover h-50 w-10  bg-white rounded border animate-spin"
          src={Movefundlogo} 
          alt="MoveFunds"/>}
          />
        <p>Start spending the smart way with   
         <span className="text-[orange] font-semibold">  moveFund</span>
        </p>
    </div> 
    <div className="flex gap-10">
    <div className="flex flex-col gap-2">
    <p className="text-gray-400">Product</p>
    <a href="#">Overview</a>
    <a href="#">Features</a>
    <a href="#">Solution</a>
    <a href="#">Contact</a>
    <a href="#">Release</a>
    </div>

    <div className="flex flex-col gap-2"> 
    <p className="text-gray-400">Resources</p>
    <a href="#">Blog</a>
    <a href="#">Newsletter</a>
    <a href="#">Events</a>
    <a href="#">Help Centre</a>
    <a href="#">Support</a>
    </div>
    </div>
    <div className="w-fit">
        <h2>Get the app</h2>
        <StoreLinks type={Btntypes.Variant}/>
    </div>
    </div>
    <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
    <p className="w-[16ch] text-gray-400 md:w-full">
      &copy; 2024 <span className="text-[orange] font-semibold"> moveFunds</span>. All rights reserved 
    </p>
    <div className="flex gap-6 animate-pulse">
      <a href="https://twitter.com" target="_blank">
      <img src={X} alt="Twitter loho" />
      </a>
      <a href="https://www.facebook.com" target="_blank">
      <img src={Facebook} alt="Facebook loho" />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
      <img src={Linkedin} alt="Linkedin loho" />
      </a>
    </div>
    </div>
    <p className="w-[16ch] text-gray-500 md:w-full " >
      Designed and Developed By Smart Chinemerem Sunday</p>
    </div>
    </section>
  )
}

export default Footer