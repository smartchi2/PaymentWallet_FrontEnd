import Appframe from "../assets/moveFunds.png"
import Secured from "../assets/secured.png"
import Coins from "../assets/coins.png"
import List from "../assets/listOfBank.png"

function Features() {
  return (
    <section id="features" className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 
    xl:m-auto xl:pt-20"
    >
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">Make every penny count</h2>
        <p>
        Spend smarter, lower your bills, get cashback on everything you buy,
        <br/>
        and unlock credit to grow your business.
        </p>
        </article>

        <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100  px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
        <div className="mt-10 flex flex-col justify-center gap-4  text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
        <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 
        sm:w-[18ch] md:m-0 md:text-left">
        Pay with <span className="text-[blue]">moveFunds</span>. Quick, simple and easy
        </h2>
        <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left"> 
        Paying your bills on <span className="text-[blue] font-semibold">moveFunds</span> has never been easier. Whether you are
        paying for electricity or internet, <span className="text-[blue] font-semibold">moveFunds</span> gets it done within 
        seconds.</p>
        </div>
        <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <img src={Appframe} alt="moveFunds app frame" />
        </div>
        </div>
        
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
        <div className="w-fit rounded-full bg-indigo-200 p-4">
            <img src={Secured} alt="" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800">Bank level security</h2>
        <p className="text-gray-500">
          Your money is 100% safe secure on moveFunds. No hassles, no 
          glitches, get access to your money anytime.
        </p>
        </div>
        </article>

        <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3">
        <div className="w-fit rounded-full bg-indigo-200 p-4">
            <img src={Coins} alt="" />
        </div>

        <h2 className="text-3xl font-semibold text-gray-800">Cost reduction</h2>
        <p className="text-gray-500">
         Transfers, payments all work on <span className="text-[blue] font-semibold">moveFunds</span>. Get your alert message
         immediately after a completed transaction.
        </p>
        </div>

         <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100  px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
        <div className="mt-10 flex flex-col justify-center gap-4  text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:mt-0 md:text-left">
        <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 
        sm:w-[18ch] md:m-0 md:text-left">
         Send, receive and Exchange money
        </h2>
        <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left"> 
        Paying your bills on <span className="text-[blue] font-semibold">moveFunds</span> has never been easier. Whether you are
        paying for electricity or internet, <span className="text-[blue] font-semibold">moveFunds</span> gets it done within 
        seconds.</p>
        </div>
        <div className="m-auto max-w-96  md:w-1/2 md:mt-36">
            <img src={List} alt="frame displaying logo of various payment solutions" />
        </div>
        </div>
        </article>
    </section>
  )
}

export default Features