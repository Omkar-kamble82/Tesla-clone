import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";

const Infovideo = ({url,semiheading,heading,description,video,reverse,FMR}) => {
    return (
        <div className={`flex bg-white flex-col ${reverse === "true" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div className="relative">
                {video === "true" ? <video className="w-[100%]" autoPlay loop muted src={url} alt="range-video"/>:<img src={url} alt="range-image"/>}
            </div>
            <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="py-10 px-4 flex flex-col overflow-hidden justify-between">
                <motion.div variants={textVariant(0.7)}>
                    <p className="text-2sm">{semiheading}</p>
                    <h1 className="font-bold text-xl overflow-hidden mb-3 mt-1 sm:text-3xl md:font-medium">{heading}</h1>
                    <p className="text-sm overflow-hidden">{description}</p>
                </motion.div>
                <motion.div variants={textVariant(1.4)} className="md:mx-2">
                    <button className={`mr-14 overflow-hidden w-[220px] text-[18px] font-medium border-2 mt-4 px-4 py-1 rounded-[5px] hover:bg-black border-black hover:text-white sm:mb-2 md:w-[340px] lg:mr-10  hover:duration-700`}>order now</button>
                    {FMR === "false" ? "" : <button className={`mr-14 overflow-hidden w-[220px] text-[18px] bg-[#f4f4f4] font-normal my-4  px-4 py-1 rounded-[5px] sm:mb-6 md:w-[340px] lg:mr-10  hover:duration-700`}>Find My Route</button>}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Infovideo;