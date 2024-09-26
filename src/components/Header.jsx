import { useState } from "react";
import logo from "../assets/Britlex.png"
import HeaderLinks from "./HeaderLinks";

function Header() {
    const [show, setShow] = useState(false);
    return <div className="flex justify-between items-center my-14 header">
        <a href="#home" className="cursor-pointer">
        <div className="w-[106px] h-[54px] header__logo">
            <img src={logo} alt="logo" className="w-full h-full object-contain  "></img>
        </div>
        </a>
        <div className={"burger" + ` ${show}__burger`} onClick={
            () => setShow(!show)
        }>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={"header__list" + ` ${show}`}>
            <HeaderLinks/>
        </div>
        <button className="py-[17px] px-[57px] rounded-md text-2xl border-2 border-[#263238]
        hover:text-white hover:bg-[#263238] transition duration-500 header__button">
            Let's Talk
        </button>
    </div>
}
export default Header;