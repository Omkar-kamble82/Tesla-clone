import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";

const Beyond = ({Beyondheading,Beyondsemiheading,Beyonddescription,black}) => {
    return (
        <motion.div 
            className={`${black === "true" ? "bg-black text-white" : "bg-white text-black"} overflow-hidden`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            >
            <div className="max-w-[1000px] mx-auto my-12 overflow-hidden">
                <div className="flex flex-col mb-5 mx-4 md:flex-row overflow-hidden">
                    <motion.div variants={textVariant(0.6)} className="flex-1/2 mr-24">
                        <p className="text-2sm">{Beyondsemiheading}</p>
                        <h1 className="font-bold text-xl overflow-hidden mb-3 mt-1 sm:text-3xl md:font-medium">{Beyondheading}</h1>
                    </motion.div>
                    <motion.div variants={textVariant(1.1)} className="flex-1">
                        <p className="text-sm overflow-hidden">{Beyonddescription}</p>
                    </motion.div>
                </div>
                <motion.button variants={textVariant(1.3)} className={`mr-14 overflow-hidden w-[220px] text-[18px] font-medium mx-4 border-2  px-4 py-1 rounded-[5px] ${black === "true" ? "hover:bg-white border-white hover:text-black" : "hover:bg-black border-black hover:text-white"} sm:mb-10 lg:w-[240px] lg:mr-10  hover:duration-700`}>order now</motion.button>
            </div>
        </motion.div>
    )
}

export default Beyond