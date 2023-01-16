import style from "../styles/components.module.css";
import useWindowSize from "./windowsize";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, buttonVariant ,buttonrightVariant } from "../constants/motion";

export const Banner = ({title,urlDesktop,urlMobile,description,underline}) => {
    const { width } = useWindowSize();
    return (
        <motion.div className={`${style.banner} relative overflow-hidden`}variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
            {width < 480 ? <img className="w-screen h-screen object-cover" src={urlMobile} alt="model-y-image" /> : <img className="w-screen h-screen object-cover" src={urlDesktop} alt="model-y-image" />}
            <div className={`${style.bannerdescription} absolute top-[20%] left-[50%]`}>
                <motion.h1 variants={textVariant(1)} className={`${style.bannerheading} text-3xl m-1 lg:text-4xl lg:my-[6px]`}>{title}</motion.h1>
                <motion.p variants={textVariant(1.4)} className={`${underline ? `${style.demo}` : ""} text-xs lg:text-sm`}>{description}</motion.p>
            </div>
            <div className={`${style.bannerbutton} absolute top-[80%] left-[50%] flex flex-col md:flex-row`}>
                <motion.button variants={buttonVariant(1.8)} className={`${style.herobutton1} my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 text-white lg:w-[340px]`}>Custom Order</motion.button>
                <motion.button variants={buttonrightVariant(1.8)} className={`${style.herobutton2} my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 bg-white text-black lg:w-[340px]`}>View Inventory</motion.button>
            </div>
        </motion.div>
    )
}

export default Banner;