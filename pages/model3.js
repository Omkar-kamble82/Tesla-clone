import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Carinfobanner from "../components/Carinfobanner";
import Beyond from "../components/Beyond";
import Infovideo from "../components/Infovideo";
import Specs from "../components/Specs";
import Ordernow from "../components/Ordernow";

const model3 = () => {

    useEffect(() => {
        document.title = 'Model 3 | Tesla';
    }, []);

    return (
        <div className="overflow-y-auto bg-black">
            <PageBanner 
                title="Model 3"
                urlDesktop="/model3/model-3.jpg"
                urlMobile="/model3/model-3-mobile.jpg"
                description="Schedule a Demo Drive" 
                infoheading1="358 mi"
                infodescription1="Range (EPA est.)"
                infoheading2="3.1 s"
                infodescription2="0-60 mph*"
                infoheading3="AWD"
                infodescription3="Dual Motor"
                infoheading4="1,020 hp"
                infodescription4="Peak Power"
                white="true"
            />
            <Beyond 
                Beyondheading="Quickest Acceleration"
                Beyondsemiheading="Performance"
                Beyonddescription="Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today."
                black="false"
            />
            <Carinfobanner 
                urlDesktop="/model3/model-3-mountain.jpg"
                infoheading1="3.1s"
                infodescription1="Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds"
                infoheading2="162 mph"
                infodescription2="Improved handling and aerodynamics allow for a top speed of 162 mph"
                infoheading3="AWD Dual"
                infodescription3="Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions"
            />
            <Carinfobanner 
                urlDesktop="/model3/model-3-blue.jpg"
                infoheading1="2"
                infodescription1="Independent motors digitally control torque to the front and rear wheels"
                infoheading2="10 ms"
                infodescription2="Dual motors respond to changing conditions in as little as 10 milliseconds"
                infoheading3="Weather"
                infodescription3="Unparalleled traction and control, in all weather conditions"
            />
            <Beyond 
                Beyondheading="All-Wheel Drive"
                Beyondsemiheading="Dual Motor"
                Beyonddescription="Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control."
                black="false"
            />
            <Infovideo 
                url="/model3/model-3-red.jpg"
                semiheading="Range"
                heading="Go Anywhere"
                description="Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. "
                video="false"
                reverse="false"
            />
            <Beyond 
                Beyondheading="Future of Driving"
                Beyondsemiheading="Autopilot"
                Beyonddescription="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today."
                black="false"
            />
            <Carinfobanner 
                urlDesktop="/model3/model-3-interior.jpg"
            />
            <Beyond 
                Beyondheading="Built Around the Driver"
                Beyondsemiheading="Interior"
                Beyonddescription="The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat."
                black="false"
            />
            <Specs />
            <Ordernow 
                Ordernowheading="Experience Model 3"
                url="/model3/model-3-ordernow.jpg"
                black="false"
            />
        </div>
    )
}

export default model3;