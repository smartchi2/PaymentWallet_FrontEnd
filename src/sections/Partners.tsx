import LogoWall from "../common/LogoWall"
import Klara from "../assets/Klara.png"
import Strip from "../assets/Strip.png"
import PayPal from "../assets/PayPal.png"
import MoniePoint from "../assets/moniePoint.svg"
import FirstBank from "../assets/FirstBank.png"
import Opay2 from "../assets/Opay2.png"
import Dstv from "../assets/Dstv.png"
import Ikeja from "../assets/Ikeja.png"
import Artime from "../assets/Artime.png"
import Visa from "../assets/Visa.png"
import Payoneer from "../assets/Payoneer.png"
import Mtn from "../assets/Mtn.png"

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
    <article className="mb-10 w-full px-8 text-center lg:px-12">
    <h2 className="mb-4 text-4xl font-semibold text-gray-800">Transact seamlessly with....</h2>
    <p>
     Connect your other accounts to moveFunds seamlessly. <span className="text-[blue] font-semibold">moveFunds</span> supports
     <span className="text-[orange] font-semibold"> 500+</span> <br /> 
     integrations with other payment platforms like strip, paypal,
     payoneer and others   
    </p>
    </article>
    <div className="xl:flex xl:justify-center ">
    <LogoWall 
    src1={Klara} 
    src2={Strip} 
    src3={PayPal} 
    alt1="Klarna logo" 
    alt2="strip logo"
    alt3="Paypal logo" 
    />
     <LogoWall 
    src1={MoniePoint} 
    src2={FirstBank} 
    src3={Opay2} 
    alt1="Monie Point" 
    alt2="First Bank"
    alt3="Opay" 
    />
    </div>
    <div className="xl:flex xl:justify-center ">
    <LogoWall 
    src1={Dstv} 
    src2={Ikeja} 
    src3={Artime} 
    alt1="Dstv" 
    alt2="Ikeja"
    alt3="Artime" 
    />
     <LogoWall 
    src1={Visa} 
    src2={Payoneer} 
    src3={Mtn} 
    alt1="Visa" 
    alt2="Payoneer"
    alt3="Mtn" 
    />
    </div>
    </section>
  )
}

export default Partners