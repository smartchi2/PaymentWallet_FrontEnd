import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";
import Movefundslogo from '../assets/moveFundsLogo.svg'
import ButtonLink from "../common/ButtonLink";

function Nav() {

  
  const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

   const navLinks = [
    { href: "#features", Children: "Features"},
    { href: "#partners", Children: "Partners"},
    { href: "#reviews", Children: "Reviews"},

   ];
  return (
    <Disclosure as="nav">
      {({open}) => (
        <>
     <div className="flex  items-center ml-8 h-[15vh] max-w-7xl px-8 justify-between xl:m-auto lg:px-12  ">

        <ButtonLink 
          href="#" 
          children={<img  className=
            "object-cover h-50 w-10 animate-spin  "
          src={Movefundslogo} 
          alt="MoveFunds"/>}
          />
          <div className="ml-4 sm:flex space-x-4 items-center 
          hidden sm:ml-6 lg:ml-8 lg:space-x-8">

            {navLinks.map((link, index) =>(
              <ButtonLink key={index} 
               href={link.href} 
               children={link.Children}
               className={textLinkClasses}
               
              />
            ))}

          </div>

          <ButtonLink  
               href="https://play.google.com"
               target="_blank " 
               children={"Install moveFunds"}
               className=" active:bg-blue-600 hidden sm:flex    bg-blue-800
         text-white rounded-xl px-5 py-3   hover:bg-blue-900"
              />
              


      
        <DisclosureButton 
        className="sm:hidden rounded-md p-2 text-gray-500
        hover:bg-blue-700 hover:text-white">

          {open ? (
            <XMarkIcon className="block h-6 w-6"
            />
          ) : <Bars3Icon className="block h-6 w-6"
          />
          }
          
        </DisclosureButton>
        </div>
        <DisclosurePanel className="space-y-1 px-4 
        sm:hidden">
        {navLinks.map((link, index) =>(
              <DisclosureButton 
              className="block"
              as="a" 
              href="#features"
              key={index}
              >
                {link.Children}
                </DisclosureButton>
            ))}

        </DisclosurePanel>
        </>

      )}
    </Disclosure>
  );
}
export default Nav
