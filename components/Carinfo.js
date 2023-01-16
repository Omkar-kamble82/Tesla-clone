import { motion } from "framer-motion";
import { textVariant } from "../constants/motion";

const Carinfo = ({carinfoheading1,carinfodescription1,carinfourl1,carinfoheading2,carinfodescription2,carinfourl2,carinfoheading3,carinfodescription3,carinfourl3,video,reverse}) => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-[1000px] mt-12 mx-auto text-white overflow-hidden">
            <motion.div variants={textVariant(0.5)} className={`flex items-center justify-center mx-4 mb-10 flex-col ${reverse==="true" ? "md:flex-row-reverse" :"md:flex-row"}`}>
                <img className="max-w-[500px] mb-4 md:mr-[50px]" src={carinfourl1} alt="stay-connected-image"/>
                <div className='max-w-[500px] mb-4 md:mr-12 '>
                    <h1 className="font-bold mb-4">{carinfoheading1}</h1>
                    <p className='text-sm'>{carinfodescription1}</p>
                </div>
            </motion.div>
            <motion.div variants={textVariant(1)} className={`flex items-center justify-center mx-4 mb-10 flex-col ${reverse==="true"? "md:flex-row" :"md:flex-row-reverse"}`}>
                { video === "true" ? <video className="max-w-[500px] mb-4 md:mr-[50px]" autoPlay loop muted src={carinfourl2} alt="stay-connected-image"/> : <img className="max-w-[500px] mb-4 md:mr-[50px]" src={carinfourl2} alt="stay-connected-image"/> }
                <div className='max-w-[500px] mb-4 md:mr-12 '>
                    <h1 className="font-bold mb-4">{carinfoheading2}</h1>
                    <p className='text-sm'>{carinfodescription2}</p> 
                </div>
            </motion.div>
            <motion.div variants={textVariant(1.5)} className={`flex items-center justify-center mx-4 mb-10 flex-col ${reverse==="true"? "md:flex-row-reverse" :"md:flex-row"}`}>
                <img className="max-w-[500px] mb-4 md:mr-[50px]" src={carinfourl3} alt="stay-connected-image"/>
                <div className='max-w-[500px] mb-4 md:mr-12 '>
                    <h1 className="font-bold mb-4">{carinfoheading3}</h1>
                    <p className='text-sm'>{carinfodescription3}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Carinfo;