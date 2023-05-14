import React from 'react';
import { CgArrowTopRightO } from "react-icons/cg";
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

import Corousel1 from '../img-page/Carousel1.webp';

const ArticelWebimar = () => {
    return(
        <section id="section5">
        <div className="flex justify-center flex-wrap xl:flex-nowrap mt-[150px] relative p-10" >
            <img src={Corousel1}alt="image" className="w-full lg:w-[800px] h-[400px] snap-center"/>
            <div className=" lg:ml-[50px] xl:text-left xl:mt-0 xl:w-[500px] lg:text-center text-center mt-28" >
                <div className="xl:text-3xl lg:text-6xl text-5xl font-semibold text-[#002157] ">
                    <h2>Webminar</h2>
                </div>
                <div className=" w-[450px] xl:text-xl lg:text-4xl lg:w-full text-3xl font-extralight text-[#5B5B5B] mt-[50px]">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="text-2xl lg:text-2xl font-semibold text-[#002157]  mt-[50px] flex items-center justify-center xl:justify-start">
                    <a href='#'>Lihat selengkapnya</a>
                    <CgArrowTopRightO className='ml-[5px]'/>
                </div>
            </div>
            <div className="flex top-[25%] xl:top-[50%] lg:top-[30%] w-full lg:w-[89%] justify-between absolute  text-[#002157]  ">
                    <SlArrowLeft size={23} />
                    <SlArrowRight size={23}/>
            </div> 
        </div>
     </section>
    )
}

export default ArticelWebimar;