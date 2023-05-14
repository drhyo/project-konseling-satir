import React from 'react';


import Carousel from '../img-page/Carousel.webp'
import logos_youtube_icon from '../img-page/logos_youtube-icon.webp' 



const About = () => {
    return(
    <section id="section2">
        <div className="w-full lg:mx-auto lg:flex lg:flex-row-reverse lg:justify-evenly">
            <div className='text-center lg:w-[400px]  lg:text-left lg:mt-[80px] px-5 mb-10 lg:mb-0 '>
                <h3 className="text-6xl font-semibold text-[#002157] lg:text-3xl">Tentang Konseling Satir</h3>
                <p className="font-extralight text-3xl  text-[#5B5B5B] mt-[50px] lg:text-xl">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="h-[350px] relative px-5 md:flex md:justify-center">
                <img  src={Carousel} alt="" className=" w-full lg:w-[680px] lg:h-[350px] md:w-[80%] md:h-[350px]  h-[250px]  rounded-lg"/>
                <img src={logos_youtube_icon} alt="logo-youtube" className="absolute top-[30%] lg:top-[50%] md:top-[45%] md:left-[50%] left-[50%]"/>
            </div>
        </div>
    </section>
    )
}

export default About;