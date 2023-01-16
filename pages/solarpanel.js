import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Infovideo from "../components/Infovideo";
import Carinfobanner from "../components/Carinfobanner";
import Beyond from "../components/Beyond";
import Roofspecs from "../components/Roofspecs";

const Solarpanel = () => {

    useEffect(() => {
        document.title = 'Solar panel | Tesla';
    }, []);

    return (
        <div className="overflow-y-auto bg-black">
            <PageBanner 
                title="Solar for Existing Roofs"
                urlDesktop="/solarpanel/solarpanel.jpg"
                urlMobile="/solarpanel/solarpanel-mobile.jpg"
                description=" Lowest Cost Solar Panels" 
                infoheading1="Panel"
                infodescription1="Convert Sunlight to Energy"
                infoheading2="$"
                infodescription2="Guaranteed Lowest Price for Solar"
                infoheading3="24/7"
                infodescription3="Energy Monitoring"
                infoheading4="1,020 hp"
                infodescription4="Peak Power"
                white="false"
            />
            <Infovideo 
                url="/solarpanel/panel.mp4"
                semiheading="Design"
                heading="Sliik and Durable"
                description="Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Schedule a virtual consultation with an Energy Advisor to learn more."
                video="true"
                reverse="true"
                FMR="false"
            />
            <Carinfobanner 
                urlDesktop="/solarpanel/batteryback.jpg"
            />
            <Beyond 
                Beyondheading="Order and Installation"
                Beyondsemiheading="Power On"
                Beyonddescription="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
                black="false"
            />
            <Infovideo 
                url="/solarroof/solarproduction.jpg"
                semiheading="Efficiency"
                heading="Maximum Solar Production"
                description="Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful."
                video="false"
                reverse="true"
                FMR="false"
            />
            <Carinfobanner 
                urlDesktop="/solarroof/stock.jpg"
            />
            <Roofspecs />
        </div>
    )
}

export default Solarpanel;