import useWindowSize from "./windowsize";

const Photo = ({urlDesktop,urlMobile}) => {
    const { width } = useWindowSize()
    return (
        <div>
            {width < 480 ? <img className="w-screen h-screen object-cover" src={urlMobile} alt="model-y-image" /> : <img className="w-screen object-cover md:h-screen lg:h-auto" src={urlDesktop} alt="model-y-image" />}
        </div>
    )
}

export default Photo;