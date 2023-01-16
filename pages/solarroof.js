import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Carinfobanner from "../components/Carinfobanner";
import Beyond from "../components/Beyond";
import Infovideo from "../components/Infovideo";
import Installation from "../components/Installation";
import Roofspecs from "../components/Roofspecs";

const Solarroof = () => {

    useEffect(() => {
        document.title = 'Solar Roof | Tesla';
    }, []);

    return (
        <div className="overflow-y-auto bg-black">
            <PageBanner 
                title="Solar Roof"
                urlDesktop="/solarroof/solarroof.webp"
                urlMobile="/solarroof/solarroof-mobile.webp"
                description="Transform your roof and produce clean energy" 
                infoheading1="Panel"
                infodescription1="Beautiful Solar"
                infoheading2="25-Year"
                infodescription2="Tile Warranty"
                infoheading3="24/7"
                infodescription3="Outage Protection"
                infoheading4="1,020 hp"
                infodescription4="Peak Power"
                white="true"
            />
            <Carinfobanner 
                urlDesktop="/solarroof/solarroofbanner.webp"
            />
            <Beyond 
                Beyondheading="Complement Your Home’s Aesthetic"
                Beyondsemiheading="Design"
                Beyonddescription="Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Schedule a virtual consultation with an Energy Advisor to learn more."
                black="false"
            />
            <Infovideo 
                url="/solarroof/energy-storage.webp"
                semiheading="Energy Storage"
                heading="Protection Against Outages"
                description="Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage."
                video="false"
                reverse="true"
                FMR="false"
            />
            <Infovideo 
                url="/solarroof/durability.webm"
                semiheading="Durability"
                heading="Take on the Elements"
                description="Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof."
                video="true"
                reverse="false"
                FMR="false"
            />
            <Beyond 
                Beyondheading="Trusted Expertise"
                Beyondsemiheading="Installation"
                Beyonddescription="Our in-house team of energy professionals has installed nearly 4.0 GW of solar across approximately 480,000 roofs—cumulatively generating over 25.0 TWhs of clean energy. From design to power on, we take care of everything. Chat with an Energy Advisor to ask any questions about Solar Roof."
                black="false"
            />
            <Installation 
                Feature1="Design"
                Feature1Description="Aerial imagery and 3D modeling determine your custom design"
                Feature2="Installation"
                Feature2Description="Our integrated design enables quick tile and Powerwall installation"
                Feature3="Power On"
                Feature3Description="Final cleanup is completed before system activation"
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
            <Beyond 
                Beyondheading="Monitor and Optimize"
                Beyondsemiheading="Control"
                Beyonddescription="With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access."
                black="false"
            />
            <Infovideo 
                url="/solarroof/payless.webp"
                semiheading="Value"
                heading="Pay Less for Electricity"
                description="Solar Roof helps pay for itself with the energy it produces. As a fully integrated system, Solar Roof can maximize your solar generation and help you take control of your monthly electricity bill."
                video="false"
                reverse="true"
                FMR="false"
            />
            <Roofspecs />
        </div>
    )
}

export default Solarroof;