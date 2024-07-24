import Hero from "../components/hero"
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div>
        <header className=" flex flex-row text-[#FFFFFF]  bg-gradient-to-r from-[#6C00A2] to-[#001152] font-semibold">
            <nav className="flex flex-row-reverse p-1 px-20 gap-x-10 w-full  bg-gradient-to-r from-[#6C00A2] to-[#001152] border-b-2 border-gray-600 sticky">
                <div className="flex">
                <div className="flex flex-row p-3">
                    <button className=" rounded-xl h-[36px] w-[146px] -mt-1 bg-[#4b035d] hidden md:block hover:scale-125 hover:bg-[#33448e] transition-all duration-300">
                        <Link to={"/recommendations"} className="hidden text-base md:block">Recommend</Link>
                    </button>
                    <a className="block w-[26px] h-[26px]  md:hidden "
                        ><div className="ham bg-auto object-contain h-full w-full"></div></a>
                </div>
                <div className="flex flex-row p-3 ">
                    <button className=" rounded-xl h-[36px] w-[106px] -mt-1 bg-[#4b035d] hidden md:block hover:scale-125 hover:bg-[#33448e] transition-all duration-300">
                        <Link to={"/search"}className="hidden text-base md:block">Search</Link>
                    </button>
                    <a className="block w-[26px] h-[26px]  md:hidden "
                        ><div className="ham bg-auto object-contain h-full w-full"></div></a>
                </div>
                </div>
            </nav>
        </header>

        <Hero></Hero>
    </div>
    )
}