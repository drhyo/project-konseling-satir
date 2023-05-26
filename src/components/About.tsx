import React from 'react';


import Carousel from '../img-page/Carousel.webp'
import logos_youtube_icon from '../img-page/logos_youtube-icon.webp' 



const About = () => {
    return(
    <section className='mt-5 lg:mt-0'>
        <div className="w-full flex flex-row-reverse justify-center">
            <div className='w-full md:w-[40%] flex flex-col gap-1 lg:gap-10 lg:ml-10'>
                <h3 className="text-lg font-semibold text-[#002157] sm:text-xl md:text-2xl lg:text-3xl">Tentang Konseling Satir</h3>
                <p className="font-extralight text-xs text-[#5B5B5B] sm:text-base md:text-lg lg:text-xl">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className="bg-[#002157] w-[120px] flex rounded-md py-2 lg:hidden mx-auto mt-2">
                        <a className=" text-slate-100 text-xs font-bold m-auto" href="#">Daftar Sekarang</a>
                </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-[40%] h-full relative px-5 flex items-center justify-center mt-5 md:mt-0">
                <img  src={Carousel} alt="" className=" rounded-lg"/>
                <img src={logos_youtube_icon} alt="logo-youtube" className="absolute top-[45%] left-[45%] w-[8%]"/>
            </div>
        </div>
    </section>
    )
}

export default About;