import StoreLink from "./StoreLink"
import AppleLogo from "../assets/appleLogo2.svg"
import GoogleLogo from "../assets/googleLogo3.svg"

interface StoreLinkProps{
  type: Btntypes;
}

export enum  Btntypes {
  Standard,
  Variant
}

function StoreLinks({type} : StoreLinkProps ) {
  if (type === Btntypes.Standard){
  return (
         <div className="mt-10 justify-center space-x-2 sm:flex hidden md:justify-normal">
       

       <StoreLink 
       href="https://apple.com/app-store"
       upperText="Download on the" 
       lowerText="App Store"
       logo={AppleLogo}
       target="_blank"
       className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white
        hover:bg-zinc-950 active:bg-zince-800"
        />
        <StoreLink 
       href="https://www.play.google.com"
       upperText="Get it on" 
       lowerText="Google play"
       logo={GoogleLogo}
       target="_blank"
       className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white
        hover:bg-zinc-950 active:bg-zince-800"
        />    
    </div>
  );
}

if (type === Btntypes.Variant){
  return (
         <>
       <StoreLink 
       href="https://apple.com/app-store"
       upperText="Download on the" 
       lowerText="App Store"
       logo={AppleLogo}
       target="_blank"
       className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white
        hover:bg-zinc-950 active:bg-zince-800"
        />
        <StoreLink 
       href="https://www.play.google.com"
       upperText="Get it on" 
       lowerText="Google play"
       logo={GoogleLogo}
       target="_blank"
       className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white
        hover:bg-zinc-950 active:bg-zince-800"
        />
    </>
  )
}
}

export default StoreLinks