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

const models = () => {


    useEffect(() => {
        document.title = 'Model S | Tesla';
    }, []);

    return (
        <div className="overflow-y-auto bg-black">
            <PageBanner 
                title="Model S"
                urlDesktop="/models/model-s.jpg"
                urlMobile="/models/model-s-mobile.jpg"
                description="Plaid" 
                infoheading1="396 mi"
                infodescription1="Range (EPA est.)"
                infoheading2="1.99s"
                infodescription2="0-60 mph*"
                infoheading3="200 mph"
                infodescription3="Top Speed"
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
                carinfoheading2="Immersive Sound"
                carinfodescription2="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."
                carinfourl2="/models/Immersive-sound.mp4"
                carinfoheading3="Room for Everything"
                carinfodescription3="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
                carinfourl3="/models/room-for-everything.jpg"
                video="true"
                reverse="false"
            />
            <Carinfobanner 
                urlDesktop="/models/model-s-blue.jpg"
                infoheading1="1,020 hp"
                infodescription1="Peak Power"
                infoheading2="9.23 s"
                infodescription2="@155 mph 1/4 mile"
                infoheading3="1.99 s"
                infodescription3="0-60 mph*"
            />
            <Beyond 
                Beyondheading="Beyond Ludicrous"
                Beyondsemiheading="Plaid"
                Beyonddescription="Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
                black="false"
            />
            <Electricpowertrain 
                url1="/models/model-s-battery.jpg"
                epheading1="Model S"
                epdescription1="Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control."
                epstatheading11="3.1 s"
                epstatheading12="405 mi"
                epstatheading13="670 hp"
                epstatdescription11="0-60 mph"
                epstatdescription12="Range (EPA est.)"
                epstatdescription13="Peak Power"
                url2="/models/model-s-plaid-battery.jpg"
                epheading2="Model S Plaid"
                epdescription2="Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors."
                epstatheading21="1.99 s*"
                epstatheading22="396 mi"
                epstatheading23="1,020 hp"
                epstatdescription21="0-60 mph"
                epstatdescription22="Range (EPA est.)"
                epstatdescription23="Peak Power"
            />
            <Carinfobanner 
                urlDesktop="/models/models-wave.jpg"
            />
            <Beyond 
                Beyondheading=" Designed for Efficiency"
                Beyondsemiheading="Exterior"
                Beyonddescription="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
                black="true"
            />
            <Carinfo 
                carinfoheading1="Relentless Performance"
                carinfodescription1="Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."
                carinfourl1="/models/relentless-performance.jpg"
                carinfoheading2="Optimized Aerodynamics"
                carinfodescription2="Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
                carinfourl2="/models/optimized-aerodynamics.jpg"
                carinfoheading3="Refined Styling"
                carinfodescription3="An iconic silhouette meets refreshed, elegant proportions."
                carinfourl3="/models/refined-styling.jpg"
                video="false"
                reverse="true"
            />
            <Infovideo 
                url="/models/models-range.mp4"
                semiheading="Range"
                heading="Go Anywhere"
                description="With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
                video="true"
                reverse="false"
            />
            <Beyond 
                Beyondheading="Future of Driving"
                Beyondsemiheading="Autopilot"
                Beyonddescription="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today."
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
                url="/models/models-ordernow.jpg"
                black="false"
            />
        </div> 
    )
}

export default models;