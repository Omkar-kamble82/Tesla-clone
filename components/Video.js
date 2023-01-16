import { useState } from 'react';

const Video = () => {

    const slides = [
        {
        url: '/models/Cinematic-Experience.mp4',
        heading:"Cinematic Experience",
        description:"A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more."
        },
        {
        url: '/models/Yoke-Steering.mp4',
        heading:"Yoke Steering",
        description:"A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip."
        },
        {
        url: '/models/Perfect-Environment.mp4',
        heading:"Perfect Environment",
        description:"Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment."
        },
        {
        url: '/models/Redsigned-Second-Row.mp4',
        heading:"Redesigned Second Row",
        description:"Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging."
        },
        {
        url: '/models/Console-Grade-Gaming.mp4',
        heading:"Console-Grade Gaming",
        description:"Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility."
        }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-[100vw] h-[100%] transition-all duration-700">
            <div className=' h-auto'><div className='w-[90vw] h-auto ml-[5vw] mt-[5vw] rounded-2xl bg-center overflow-hidden transition-all bg-cover object-cover duration-500'>
                <video className={`object-fill w-[100%] h-[40vh] transition-all duration-500 overflow-hidden sm:h-[90vh]`} onEnded={() =>nextSlide()} autoPlay muted src={`${slides[currentIndex].url}`} alt="" />
            </div>
            <div className='flex top-8 justify-start py-2 width-[100vw] ml-[5%] lg:ml-[25%]'>
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-3xl cursor-pointer text-white flex text-start justify-start items-start'
                >
                    <div className={`${slideIndex === currentIndex ? "bg-white" : "bg-gray-600"} h-[14px] w-[14px] rounded-[50%] bottom-2 m-1 mt-10`}/>
                </div>
                ))}
            </div></div>
            <div className='text-white ml-[5%] mr-[2%] mb-[8%] lg:ml-[25%] lg:mr-[30%]'>
                <h1 className='text-xl font-bold mb-4'>{slides[currentIndex].heading}</h1>
                <p className='text-sm font-normal'>{slides[currentIndex].description}</p>
            </div>
        </div>
    )
}

export default Video;