import { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";


const Features = ({Featureheading,Featuredescription,Feature1,Feature1Description,Feature2,Feature2Description,Feature3,Feature3Description,Feature4,Feature4Description}) => {

    const slides = [
        {url: '/models/navigate-on-autopilot.mp4'},
        {url: '/models/auto-lane-change.mp4'},
        {url: '/models/summon.mp4'},
        {url: '/models/autopark.mp4'}
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bg-white pt-14 py-10">

            <div className="max-w-[1000px] mx-auto my-16 overflow-hidden">
                <motion.div initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}  className="flex-1/2 mx-5 max-w-[700px] sm:mr-24 overflow-hidden">
                    <motion.h1 variants={textVariant(1)} className="font-bold text-2xl overflow-hidden mb-5 mt-1 sm:text-3xl md:font-medium">{Featureheading}</motion.h1>
                    <motion.p variants={textVariant(1.2)} className="text-sm text-gray-700 overflow-hidden">{Featuredescription}</motion.p>
                </motion.div>
            </div>

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
                    <div onClick={() => {setCurrentIndex(3)}} className={`bg-white cursor-pointer relative max-w-[250px] min-w-[170px] mb-4 mr-2 px-2 py-4 flex-1 border-black ${currentIndex === 3 ? "border-t-[2px]" : "border-t-[1px]"} transition-all duration-300 overflow-hidden sm:px-6`}>
                    {currentIndex !== 3 && <div className=" absolute top-0 right-0 left-0 bottom-0 bg-white/60 border-t-2 border-white/60"/>}
                        <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature4}</h1>                    
                        <p className="text-xs">{Feature4Description}</p>
                    </div>
                </div>
            </div>

            <motion.p initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }} 
                variants={textVariant(0.7)}
                className="my-4 overflow-hidden text-sm text-center text-gray-500">* With rollout subtracted</motion.p>
        </div>
    )
}

export default Features;