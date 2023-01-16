import { useState } from 'react';

const Video = () => {

    const slides = [
        {
        url: '/modely/model-y-versatile.jpg',
        description:"Versatile seating and storage for cargo and passengers"
        },
        {
        url: '/modely/model-y-room.jpg',
        description:"Room for up to seven with optional third row"
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    setTimeout((nextSlide), 4000);

    return (
        <div className="w-[100vw] h-[100%] transition-all duration-700 bg-white">
            <div className=' h-auto'><div className='w-[90vw] h-auto ml-[5vw] mt-[5vw] rounded-2xl bg-center overflow-hidden transition-all bg-cover object-cover duration-500'>
                <img className={`object-fill w-[100%] h-[40vh] transition-all duration-500 overflow-hidden sm:h-[90vh]`} src={`${slides[currentIndex].url}`} alt="" />
            </div>
            <div className='flex top-8 justify-start py-2 width-[100vw] ml-[5%] lg:ml-[25%]'>
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-3xl cursor-pointer text-black flex text-start justify-start items-start'
                >
                    <div className={`${slideIndex === currentIndex ? "bg-black" : "bg-gray-200"} h-[14px] w-[14px] rounded-[50%] bottom-2 m-1 mt-10`}/>
                </div>
                ))}
            </div></div>
            <div className='text-black ml-[5%] mr-[2%] mb-[8%] lg:ml-[25%] lg:mr-[30%]'>
                <p className='text-sm font-normal'>{slides[currentIndex].description}</p>
            </div>
        </div>
    )
}

export default Video;