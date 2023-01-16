import { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";


const Features = ({Feature1,Feature1Description,Feature2,Feature2Description,Feature3,Feature3Description}) => {

    const slides = [
        {url: '/solarroof/design.webm'},
        {url: '/solarroof/installation.webm'},
        {url: '/solarroof/poweron.mp4'},
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bg-white py-8">
            <div>
                <div className="max-w-[90vw] mx-auto mb-14 rounded-2xl bg-white max-h-[100vh] overflow-hidden"><video className="object-contain w-[100%] h-[100%]" autoPlay muted src={`${slides[currentIndex].url}`} onEnded={() =>nextSlide()} alt="model-s-battery"/></div>

                <div className="flex justify-center max-w-[90vw] mx-auto flex-wrap">
                    <div onClick={() => {setCurrentIndex(0)}} className={`bg-white cursor-pointer relative max-w-[250px] min-w-[170px] mb-4 mr-2 px-2 py-4 flex-1 border-black ${currentIndex === 0 ? "border-t-[2px]" : "border-t-[1px]"} transition-all duration-300 overflow-hidden sm:px-6`}>
                        {currentIndex !== 0 && <div className=" absolute top-0 right-0 left-0 bottom-0 bg-white/60 border-t-2 border-white/60"/>}
                        <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature1}</h1>                    
                        <p className="text-xs">{Feature1Description}</p>
                    </div>
                    <div onClick={() => {setCurrentIndex(1)}} className={`bg-white cursor-pointer relative max-w-[250px] min-w-[170px] mb-4 mr-2 px-2 py-4 flex-1 border-black ${currentIndex === 1 ? "border-t-[2px]" : "border-t-[1px]"} transition-all duration-300 overflow-hidden sm:px-6`}>
                    {currentIndex !== 1 && <div className=" absolute top-0 right-0 left-0 bottom-0 bg-white/60 border-t-2 border-white/60"/>}
                        <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature2}</h1>                    
                        <p className="text-xs">{Feature2Description}</p>
                    </div>
                    <div onClick={() => {setCurrentIndex(2)}} className={`bg-white cursor-pointer relative max-w-[250px] min-w-[170px] mb-4 mr-2 px-2 py-4 flex-1 border-black ${currentIndex === 2 ? "border-t-[2px]" : "border-t-[1px]"} transition-all duration-300 overflow-hidden sm:px-6`}>
                    {currentIndex !== 2 && <div className=" absolute top-0 right-0 left-0 bottom-0 bg-white/60 border-t-2 border-white/60"/>}
                        <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature3}</h1>                    
                        <p className="text-xs">{Feature3Description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features;