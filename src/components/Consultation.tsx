import React from 'react';

import Rectangle51 from '../img-page/Rectangle-51.webp';
import Image from  '../img-page/Image.webp';



const Consultation = () => {
    // const contentCardConsultation =  [
    //     {   
    //         judul:"",
    //         image: "",
    //         title:"Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet."
    //     },
    //     {
    //         judul:"",
    //         image: "",
    //         title:"Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet."
    //     },
    //     {
    //         judul:"",
    //         image: "",
    //         title:"Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet."
    //     }
    // ]

    return(
    <section id="section3" className="w-full  lg:h-[650px] relative lg:mt-[100px]">
        <div className="w-full p-4 lg:w-[400px] text-center mx-auto ">
            <h3 className="text-5xl lg:text-3xl font-semibold text-[#002157]">Kenapa harus konsultasi di Konseling Satir</h3>
        </div>
        <div className="flex justify-evenly gap-10 flex-wrap mt-[80px] lg:mt-7  p-4">
            <div className=" lg:w-[300px] lg:h-[380px] md:w-[40%] sm:w-[50%] shadow-lg rounded-md ">
                <img src={Image} alt="" className=" w-[100%]  mb-[25px]"/>
                <div className="ml-[15px] mr-[15px] h-[200px]  md:h-[220px] sm:h-[250px] ">
                    <h3 className="text-3xl lg:text-xl mb-[15px]  ">Judul</h3>
                    <p className="text-2xl lg:text-base ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                </div>
            </div>
            <div className=" lg:w-[300px] lg:h-[380px] md:w-[40%] sm:w-[50%] shadow-lg rounded-md ">
                <img src={Image} alt="" className=" w-[100%]  mb-[25px]"/>
                <div className="ml-[15px] mr-[15px] h-[200px]  md:h-[220px] sm:h-[250px] ">
                    <h3 className="text-3xl lg:text-xl mb-[15px]  ">Judul</h3>
                    <p className="text-2xl lg:text-base ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                </div>
            </div>
            <div className=" lg:w-[300px] lg:h-[380px] md:w-[40%] sm:w-[50%] shadow-lg rounded-md ">
                <img src={Image} alt="" className=" w-[100%]  mb-[25px]"/>
                <div className="ml-[15px] mr-[15px] h-[200px]  md:h-[220px] sm:h-[250px] ">
                    <h3 className="text-3xl lg:text-xl mb-[15px]  ">Judul</h3>
                    <p className="text-2xl lg:text-base ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                </div>
            </div>
           
            
        </div>
        <img src={Rectangle51} alt="" className="hidden lg:block lg:absolute w-[100%] h-[300px] bottom-[28px]"/>
   </section>
    )
}






export default Consultation;