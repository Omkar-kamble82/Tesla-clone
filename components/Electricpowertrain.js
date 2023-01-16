import { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";


const Electricpowertrain = ({url1,epheading1,epdescription1,epstatheading11,epstatheading12,epstatheading13,epstatdescription11,epstatdescription12,epstatdescription13,url2,epheading2,epdescription2,epstatheading21,epstatheading22,epstatheading23,epstatdescription21,epstatdescription22,epstatdescription23}) => {

    const Powertrain = [
        {url: url1},
        {url: url2}
    ];

    const [currentIndex, setCurrentIndex] = useState(false);
    setTimeout(() => setCurrentIndex(!currentIndex), 4000);

    return (
        <div className="bg-[#f4f4f4] pt-14 py-10">

            <div className="max-w-[1000px] mx-auto my-16 overflow-hidden">
                <motion.div initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}  className="flex-1/2 mx-5 max-w-[700px] sm:mr-24 overflow-hidden">
                    <motion.h1 variants={textVariant(1)} className="font-bold text-2xl overflow-hidden mb-5 mt-1 sm:text-3xl md:font-medium">Electric Powertrain</motion.h1>
                    <motion.p variants={textVariant(1.2)} className="text-sm text-gray-700 overflow-hidden">Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</motion.p>
                </motion.div>
            </div>

            <div>
                <div className="max-w-[90vw] mx-auto mb-14 rounded-2xl bg-white max-h-[100vh] overflow-hidden"><img className="object-contain w-[100%] h-[100%]" src={currentIndex ? Powertrain[0].url : Powertrain[1].url} alt="model-s-battery"/></div>

                <div className="flex justify-center max-w-[90vw] mx-auto">
                    <div onClick={() => {setCurrentIndex(false)}} className={`bg-white cursor-pointer relative max-w-[500px] w-[160px] mb-4 mr-2 px-2 py-4 flex-1 border-black ${currentIndex === false ? "border-t-[2px]" : "border-t-[1px]"} transition-all duration-300 overflow-hidden sm:px-6`}>
                        {currentIndex === true && <div className=" absolute top-0 right-0 left-0 bottom-0 bg-white/60 border-t-2 border-white/60"/>}
                        <h1 className="font-bold text-xl mb-2 sm:text-2xl">{epheading1}</h1>                    
                        <p className="text-xs">{epdescription1}</p>
                        <div className="flex justify-center items-center text-center mt-4 flex-col sm:flex-row sm:justify-start">
                            <div className="mb-3 mr-4 md:mr-10">
                                <h1 className="font-bold text-2sm lg:text-2xl">{epstatheading11}</h1>
                                <p className="text-xs">{epstatdescription11}</p>
                            </div>
                            <div className="mb-3 mr-4 md:mr-10">
                                <h1 className="font-bold text-2sm lg:text-2xl">{epstatheading12}</h1>
                                <p className="text-xs">{epstatdescription12}</p>
                            </div>
                            <div className="mb-3 mr-4 md:mr-10">
                                <h1 className="font-bold text-2sm lg:text-2xl">{epstatheading13}</h1>
                                <p className="text-xs">{epstatdescription13}</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {setCurrentIndex(true)}} className={`bg-white cursor-pointer relative max-w-[500px] w-[160px] mb-4 mr-2 px-2 py-4 flex-1 border-black ${currentIndex === true ? "border-t-[2px]" : "border-t-[1px]"} transition-all duration-300 overflow-hidden sm:px-6 `}>
                        { currentIndex === false && <div className=" absolute top-0 right-0 left-0 bottom-0 bg-white/60"/>}
                        <h1 className="font-bold text-xl mb-2 sm:text-2xl">{epheading2}</h1>                    
                        <p className="text-xs">{epdescription2}</p>
                        <div className="flex justify-center items-center text-center mt-4 flex-col sm:flex-row sm:justify-start">
                            <div className="mb-3 mr-4 md:mr-10">
                                <h1 className="font-bold text-2sm lg:text-2xl">{epstatheading21}</h1>
                                <p className="text-xs">{epstatdescription21}</p>
                            </div>
                            <div className="mb-3 mr-4 md:mr-10">
                                <h1 className="font-bold text-2sm lg:text-2xl">{epstatheading22}</h1>
                                <p className="text-xs">{epstatdescription22}</p>
                            </div>
                            <div className="mb-3 mr-4 md:mr-10">
                                <h1 className="font-bold text-2sm lg:text-2xl">{epstatheading23}</h1>
                                <p className="text-xs">{epstatdescription23}</p>
                            </div>
                        </div>
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

export default Electricpowertrain;