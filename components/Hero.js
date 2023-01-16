import Navbar from "../components/Navbarbanner";
import { Bannerinfos } from "../constants/data";
import Banner from "../components/Banner"; 
import style from "../styles/components.module.css";

const Hero = () => {
    return (
        <div>
            <Navbar fixed={true} white={"false"}/>
            <div className={`${style.hero}`}>
                {Bannerinfos.map((Bannerinfo)=>{
                    return (
                        <Banner 
                            title={Bannerinfo.title} 
                            key={Bannerinfo.id} 
                            id={Bannerinfo.id} 
                            urlDesktop={Bannerinfo.urlDesktop} 
                            urlMobile={Bannerinfo.urlMobile} 
                            description={Bannerinfo.description} 
                            underline={Bannerinfo.underline}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Hero;