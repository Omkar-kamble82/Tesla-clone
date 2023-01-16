import style from "../styles/components.module.css";
import { useState, useEffect } from "react";

const Navbar = ({fixed,white}) => {

    const [Toggle,setToggle] = useState(true);
    useEffect(() => {
        let handler = (e) => {
            if(e.target) {
                setToggle(true)
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("scroll",handler);
        return () => window.removeEventListener("scroll", handler);
    },[]);

    return (
        <div className={`flex ${fixed ? "fixed" : "absolute"} ${white === "true" ? "text-white" : "text-black"} justify-between z-10 items-center w-screen py-5 px-6 lg:px-16 lg:py-6`} id="nav">
                {white === "true" && <a className={`${style.font}`} href="/"><svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path></svg></a>}            
                {white === "false" && <a className={`${style.font}`} href="/"><svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path></svg></a>}            
                <div className="justify-between hidden text-sm font-bold xl:flex ">
                <a href="/models"><li className={`${style.list} cursor-pointer py-[4px] px-4`}>Model S</li></a>
                <a href="/model3"><li className={`${style.list} cursor-pointer py-[4px] px-4`}>Model 3</li></a>
                <a href="/modelx"><li className={`${style.list} cursor-pointer py-[4px] px-4`}>Model X</li></a>
                <a href="/modely"><li className={`${style.list} cursor-pointer py-[4px] px-4`}>Model Y</li></a>
                <a href="/solarroof"><li className={`${style.list} cursor-pointer py-[4px] px-4`}>Solar Roof</li></a>
                <a href="/solarpanel"><li className={`${style.list} cursor-pointer py-[4px] px-4`}>Solar Panels</li></a>
            </div>
            <div className={`${style.menu} ${style.list} cursor-pointer z-100 font-medium px-3 py-[2px] rounded-[5px] lg:px-4 lg:text-sm lg:py-1 lg:font-bold`} onClick={()=>{setToggle(!Toggle)}}>Menu</div>
            <div className={`${style.sidemenu} ${Toggle ? `translate-x-[100%]` : `translate-x-0`} transition-all duration-1000 fixed w-[240px] h-screen top-0 right-0 bottom-0 lg:w-[300px]`}>
                <div className={` ${style.close} h-[30px] w-[30px] p-2 rounded-[50%] absolute top-6 right-16 lg:h-[35px] lg:w-[35px]`} onClick={()=>{setToggle(true)}}><img src="/close.svg" alt="close-icon"/></div>
                <div className={`absolute top-16 left-10`}>
                    <a href="/models"><li className={`py-[4px] font-medium cursor-pointer lg:py-[6px]`}>Model S</li></a>
                    <a href="/model3"><li className={`py-[4px] font-medium cursor-pointer lg:py-[6px]`}>Model 3</li></a>
                    <a href="/modelx"><li className={`py-[4px] font-medium cursor-pointer lg:py-[6px]`}>Model X</li></a>
                    <a href="/modely"><li className={`py-[4px] font-medium cursor-pointer lg:py-[6px]`}>Model Y</li></a>
                    <a href="/solarroof"><li className={`py-[4px] font-medium cursor-pointer lg:py-[6px]`}>Solar Roof</li></a>
                    <a href="/solarpanel"><li className={`py-[4px] font-medium cursor-pointer lg:py-[6px]`}>Solar Panels</li></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;