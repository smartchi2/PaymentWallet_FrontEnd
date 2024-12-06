import Carousel from "../common/Carousel";
import StoreLinks, { Btntypes } from "../common/StoreLinks";
function Reviews() {
    const slides =[
        {
            src:"https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&amp;w=928&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            text:'"moveFunds has helped me send and received money with little to no complication. It is what everyone who wants to be on top of their money need!"',
            name: "Smart Chinemerem Sunday",
            country: "USA",
        },
        {
            src:"https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&amp;w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            text:'"Using moveFunds has streanlined my financial transactions like never before. Highly recommeded for anyone looking to simplify their finances!"',
            name: "Rose Mary",
            country: "Nigeria",
        },
        {   
            src: "https://images.unsplash.com/photo-1554196038-950a8ab51827?q=80&amp;w=987&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text:'"moveFunds has been a game changer for my daily financial dealings. It allows for quickand secure money transfers, which saves me a lot of time and effort!"',
            name: "Elena Rodriguez",
            country: "Spain",
        },
        {
            src:{}, 
            text:'"moveFunds is the best banking platForm i have used for far!"',
            name: "Peter Ik",
            country: "France",
        },
        {
            src:{}, 
            text:'"I love moveFunds, All the way from Ghana !"',
            name: "Jame Ugobo ",
            country: "Ghana",
        }


    ];
  return (
    <section id="reviews" className="flex  flex-7xl flex-col items-center 
    px-8 py-11 lg:m-auto lg:flex-row lg:px-12"
    >
    <article className="mb-10 flex flex-col items-center  lg:w-1/2 lg:items-start">
    <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 
    lg:w-full, ">
    Join other millions of people growing with <span className="text-[blue] font-semibold">moveFunds</span></h2>
    <StoreLinks type={Btntypes.Standard}/>
    </article>
    <Carousel slides={slides}/>
    </section>
  )
}

export default Reviews