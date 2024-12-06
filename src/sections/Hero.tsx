
import Phone from "../assets/moveFunds1.svg"
import HeroImage from "../assets/—Pngtree—happy young man shopping on_8941463.png"
import StoreLinks, { Btntypes } from "../common/StoreLinks";
import ButtonLink from "../common/ButtonLink";

function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 
    sm:gap-16 md:my-0  md:h-[85vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
        <div className="sm:w-full md:w-3/6">
            <h1 className="mx-auto mb-8 text-center w-[12ch] text-4xl
            font-semibold text-gray-800 sm:text-6xl md:mx-0 md:text-left">
            Start spending the smart way
            </h1>
            <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
                Take control of Your Finances Anytime, Anywhere with <span className="text-[blue] font-semibold">moveFunds</span>.
                Discover the Smart Way to Use Your Money!
            </p>
            <StoreLinks type={Btntypes.Standard} />

            
            <ButtonLink 
              
              // onClick={()=>navigate('/roleLoginSection')} 
               href="/roleLoginSection"
               target="_blank " 
               children={"Get started for free"}
               className=" active:bg-blue-600 xl:overflow-hidden sm:flex font-bold   bg-black  
              text-white rounded-xl px-20 py-3  md:animate-pulse  md:w-3/6 pt-6 mt-6 w-[15ch] hover:bg-blue-900"
              // onClick={handleClick} 
              />
        </div>
        <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <img className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 md:animate-bounce  xl:mt-32 xl-80" src={Phone}
         alt="moveFunds app frame" />
        <img className="hidden rounded-2xl xl:flex  pl-20" src={HeroImage} alt="A person happily using moveFunds" />
        </div>
    </section>
  )
}

export default Hero