import React from 'react';


import image52 from '../img-page/Rectangle-52.webp';
import image53 from '../img-page/Rectangle-53.webp';
import image54 from '../img-page/Rectangle-54.webp';
import image55 from '../img-page/Rectangle-55.webp';


const Articel = () => {

    // const contentCard = [
    //     {
    //         image: image52,
    //         title:"come quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         image: image53,
    //         title:"come quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         image: image54,
    //         title:"come quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         image: image55,
    //         title:"come quick example text to build on the card title and make up the bulk of the card's content."
    //     }
    // ]


    return(
        <section id="section8" className="mt-10 lg:mt-[100px]">
        <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Artikel</h2> 
        <div className="font-extralight flex justify-evenly flex-wrap gap-10 mt-[50px]">   
            <div className="h-[270px] relative  ">
                <img src={image52} alt="" className=" w-[350px] h-[270px]" />
                <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                    <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="h-[270px] relative  ">
                <img src={image53} alt="" className=" w-[350px] h-[270px]" />
                <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                    <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="h-[270px] relative  ">
                <img src={image54} alt="" className=" w-[350px] h-[270px]" />
                <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                    <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="h-[270px] relative  ">
                <img src={image55} alt="" className=" w-[350px] h-[270px]" />
                <div className="w-[100%] h-[100px] bg-[rgba(0,0,0,0.5)] absolute bottom-0 text-slate-100 p-[15px]" >
                    <p>come quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            
        </div>
     
        <div className="bg-[#002157] w-[200px] h-[40px] text-slate-100 font-semibold rounded-[5px] shadow-lg mx-auto mt-10 lg:mt-[80px] text-center pt-[8px]">
            <a href="#" >Lihat semua artikel</a>   
        </div>
    </section>
    )
}



export default Articel;