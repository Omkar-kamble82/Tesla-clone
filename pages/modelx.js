import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { textVariant } from "../constants/motion";
import { motion } from "framer-motion";
import Photo from "../components/photo";
import Video from "../components/Video";
import Carinfo from "../components/Carinfo";
import Carinfobanner from "../components/Carinfobanner";
import Beyond from "../components/Beyond";
import Electricpowertrain from "../components/Electricpowertrain";
import Infovideo from "../components/Infovideo";
import Features from "../components/Features";
import Specs from "../components/Specs";
import Ordernow from "../components/Ordernow";

const modelX = () => {

    useEffect(() => {
        document.title = 'Model X | Tesla';
    }, []);

    return (
        <div className="overflow-y-auto bg-black">
            <PageBanner 
                title="Model X"
                urlDesktop="/modelx/model-x.jpg"
                urlMobile="/modelx/model-x-mobile.jpg"
                description="Plaid" 
                infoheading1="333 mi"
                infodescription1="Range (EPA est.)"
                infoheading2="2.5s"
                infodescription2="0-60 mph*"
                infoheading3="9.9s"
                infodescription3="1/4 Mile"
                infoheading4="1,020 hp"
                infodescription4="Peak Power"
                white="false"
            />
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }} className="h-[20vh] bg-black flex items-center justify-center overflow-hidden text-white">
                <motion.h1 variants={textVariant(1.6)} className="text-xl font-medium overflow-hidden sm:text-3xl lg:text-4xl">Interior of the Future</motion.h1>
            </motion.div>
            <Photo 
                urlDesktop="/models/interior.jpg"
                urlMobile="/models/interior-mobile.jpg"
            />
            <Video />
            <Carinfo 
                carinfoheading1="Stay Connected"
                carinfodescription1="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
                carinfourl1="/models/stay-connected.jpg"
                carinfoheading2="Sublime Sound"
                carinfodescription2="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
                carinfourl2="/modelx/sublime-sound.jpg"
                carinfoheading3="Room for Everything"
                carinfodescription3="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
                carinfourl3="/models/room-for-everything.jpg"
                video="false"
                reverse="false"
            />
            <Carinfobanner 
                urlDesktop="/modelx/model-x-grey.jpg"
                infoheading1="1,020 hp"
                infodescription1="Peak Power"
                infoheading2="9.9s"
                infodescription2="1/4 mile"
                infoheading3="1.99 s"
                infodescription3="0-60 mph*"
            />
            <Beyond 
                Beyondheading="Beyond Ludicrous"
                Beyondsemiheading="Plaid"
                Beyonddescription="With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today."
                black="false"
            />
            <Electricpowertrain 
                url1="/models/model-s-battery.jpg"
                epheading1="Model X"
                epdescription1="Dual Motor All-Wheel Drive platform has the longest range, and now delivers insane power and acceleration."
                epstatheading11="3.8 s"
                epstatheading12="348 mi"
                epstatheading13="670 hp"
                epstatdescription11="0-60 mph"
                epstatdescription12="Range (EPA est.)"
                epstatdescription13="Peak Power"
                url2="/models/model-s-plaid-battery.jpg"
                epheading2="Model X Plaid"
                epdescription2="Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains 1,000+ horsepower all the way to top speed."
                epstatheading21="2.5 s*"
                epstatheading22="333 mi"
                epstatheading23="1,020 hp"
                epstatdescription21="0-60 mph"
                epstatdescription22="Range (EPA est.)"
                epstatdescription23="Peak Power"
            />
            <Infovideo 
                url="/modelx/even-more-capable.jpg"
                semiheading="Utility"
                heading="Even More Capable"
                description="With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go."
                video="false"
                reverse="true"
            />
            <Carinfobanner 
                urlDesktop="/modelx/model-x-wave.jpg"
            />
            <Beyond 
                Beyondheading="Designed for Efficiency"
                Beyondsemiheading="Exterior"
                Beyonddescription="Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort."
                black="true"
            />
            <Carinfo 
                carinfoheading1="Relentless Performance"
                carinfodescription1="Performance wheels and tires keep the SUV planted, transferring even more power down to the road."
                carinfourl1="/modelx/relentless-performance.jpg"
                carinfoheading2="Optimized Aerodynamics"
                carinfodescription2="Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth."
                carinfourl2="/modelx/optimized-aerodynamics.jpg"
                carinfoheading3="Refined Styling"
                carinfodescription3="Exterior design combines an iconic look with elegant details."
                carinfourl3="/modelx/refined-styling.jpg"
                video="false"
                reverse="true"
            />
            <Infovideo 
                url="/modelx/go-anywhere.jpg"
                semiheading="Range"
                heading="Go Anywhere"
                description="With up to 348 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today."
                video="false"
                reverse="false"
            />
            <Beyond 
                Beyondheading="Future of Driving"
                Beyondsemiheading="Autopilot"
                Beyonddescription="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today."
                black="false"
            />
            <Features 
                url1="/models/model-s-battery.jpg"
                Featureheading="Features"
                Featuredescription="Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:"
                Feature1="Navigate on Autopilot"
                Feature1Description="Active guidance from on-ramp to off-ramp"
                Feature2="Auto Lane Change"
                Feature2Description="Automatically change lanes while driving on the highway"
                Feature3="Summon"
                Feature3Description="Automatically retrieve your car"
                Feature4="Autopark"
                Feature4Description="Parallel and perpendicular parking with a single touch"
            />
            <Specs />
            <Ordernow 
                Ordernowheading="Model S"
                url="/modelx/modelx-ordernow.jpg"
                black="false"
            />
        </div>
    )
}

export default modelX;