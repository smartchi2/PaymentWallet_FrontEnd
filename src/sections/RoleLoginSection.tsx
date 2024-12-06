import HeroImage from "../assets/HappyShe.png"
import StoreLinks, { Btntypes } from "../common/StoreLinks";
import ButtonLink from "../common/ButtonLink";
import Movefundlogo from "../assets/moveFundsLogo.svg"
import { Link } from "react-router-dom";

function RoleLoginSection() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 
    sm:gap-16 md:my-0  md:h-[95vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">

        <div className="sm:w-full md:w-3/6 pr-3">
        <div className="flex flex-col justify-center">
        <Link to={'/'}>
        <ButtonLink 
          href="" 
          children={<img   className=
            "object-cover h-50 w-10 bg-white rounded border "
          src={Movefundlogo} 
          alt="MoveFunds"/>}
          />
          </Link>
          </div>
            <div className="justify-center items-center">
            <h1 className=" text-7xl
            font-semibold text-gray-800 sm:text-6xl ">
            Welcome pick Registration,if you don't have account
            </h1>
            </div>
            <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left ">
              Own an account with  <span className="text-[blue] font-semibold">moveFunds</span>. today!!!
              
            </p>
            <div className="flex flex-col m-auto xl:overflow-hidden animate-pulse">
            <Link to={'/verifyEmail'}>
            <ButtonLink 
              
              href="/roleLoginSection"
              target="_blank " 
              children={"Register as admin"}
              className=" active:bg-blue-600 xl:overflow-hidden sm:flex font-bold   bg-black  
             text-white rounded-xl px-20 py-3  md:w-3/6 pt-6 mt-6 w-[15ch] hover:bg-blue-900"
             />
             </Link>

             <Link to={'/customercarelogin'} >
              <ButtonLink 
              href="/roleLoginSection"
              target="_blank " 
              children={" Customer care role Registration"}
              className=" active:bg-blue-600 xl:overflow-hidden sm:flex font-bold   bg-black  
             text-white rounded-xl px-20 py-3  md:w-3/6 pt-6 mt-6 w-[15ch] hover:bg-blue-900"
             />
             </Link>
           

              <Link to={'/openaccount'}>
            <ButtonLink 
               href="/roleLoginSection"
               target="_blank " 
               children={"Open new Wallet"}
               className=" active:bg-blue-600 xl:overflow-hidden sm:flex font-bold   bg-black  
              text-white rounded-xl px-20 py-3  md:w-3/6 pt-6 mt-6 w-[15ch] hover:bg-blue-900"
              />
              </Link>

            <Link to={'/derictlogin'}>
            <ButtonLink 
              
              href="/derictlogin"
              target="_blank " 
              children={"Login to your moveFunds account "}
              className=" active:bg-blue-600 xl:overflow-hidden sm:flex font-bold  bg-black  
             text-white rounded-xl px-20 py-3  md:w-4/5 pt-6 mt-6 w-[15ch] hover:bg-blue-900"
             />
             </Link>
               </div>
        </div>
        <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <img className="hidden rounded-2xl xl:flex  pl-20" src={HeroImage} alt="A person happily using moveFunds" />
        <StoreLinks type={Btntypes.Standard} />
        </div>
    </section>
  )
}

export default RoleLoginSection;
