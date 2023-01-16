import style from "../styles/components.module.css";
import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";

export const Carinfobanner = ({urlDesktop,infoheading1,infodescription1,infoheading2,infodescription2,infoheading3,infodescription3}) => {
    return (
        <div className="relative lg:h-auto overflow-hidden">
            <img className="w-screen object-contain lg:h-auto" src={urlDesktop} alt="model-y-image" />
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${style.ordernow} overflow-hidden absolute w-[100%] text-white top-[80%] flex items-center flex-col justify-center mx-8 md:top-[80%] md:flex-row `}>
                <div className="flex items-center overflow-hidden justify-center mr-12 sm:mr-0">
                    <motion.div variants={textVariant(1)} className="mr-8 mb-4 md:mb-8 sm:mr-12 lg:mr-28">
                        <h2 className="text-xs overflow-hidden font-bold text-center mb-1 sm:text-xl lg:text-2xl">{infoheading1}</h2>
                        <p className="text-center text-[6px] sm:text-[10px] md:text-[8px] lg:text-xs">{infodescription1}</p>
                    </motion.div>
                    <motion.div variants={textVariant(1.2)} className="mr-8 mb-4 md:mb-8 sm:mr-12 lg:mr-28">
                        <h2 className="text-xs overflow-hidden font-bold text-center mb-1 sm:text-xl lg:text-2xl">{infoheading2}</h2>
                        <p className="text-center text-[6px] sm:text-[10px] md:text-[8px] lg:text-xs">{infodescription2}</p>
                    </motion.div>
                    <motion.div variants={textVariant(1.4)} className="mr-8 mb-4 md:mb-8 sm:mr-12 lg:mr-28">
                        <h2 className="text-xs overflow-hidden font-bold text-center mb-1 sm:text-xl lg:text-2xl">{infoheading3}</h2>
                        <p className="text-center text-[6px] sm:text-[10px] md:text-[8px] lg:text-xs">{infodescription3}</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Carinfobanner;