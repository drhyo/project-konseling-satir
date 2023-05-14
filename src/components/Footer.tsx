import React from 'react';
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return(
    
    <div className="bg-[#002157] w-[100%] text-[#FFFFFF] font-semibold text-sm box-border mt-[200px]">
        <div className="flex flex-col justify-evenly pt-[60px] lg:flex-row">
            <div className='text-4xl flex flex-col justify-center items-center lg:text-base '>
                <h2>Hall of collaborator</h2>
                <br/>
                <img src={require('../img-page/image-114.webp')} className='' />
            </div>
    
             <div className='mt-20 text-3xl flex flex-col items-center justify-center lg:text-base lg:block lg:gap-0 lg:mt-0'>
                <h4>Contact Us</h4>
                <br/>
                <p> <span className="font-light">Jakarta</span> 743 4646 <br/><span className="font-light">po box</span>  01 8000 184646<br/><br/><span className="font-light">Phone</span> +62 8000 184646 </p>
            </div>
    
            <div className='mt-20 text-3xl flex flex-col items-center justify-center lg:text-base lg:block lg:gap-0 lg:mt-0 '>
                <h4>Address</h4>
                <br/>
                <p><span className="font-light">JL K.H Abdullah No 57B</span><br/>Jakarta Selatan</p>
            </div>
    
            
            <div className='mt-20 text-3xl flex flex-col items-center  lg:text-base lg:block lg:gap-0 lg:mt-0'>
                <h4>Social Media bawahnya</h4>
                <br/>
                <div className="flex justify-between w-[150px] lg:w-[80px] h-[30px]">
                    <TfiFacebook size={30}/>
                    <BsInstagram size={30}/>
                </div>
            </div>
        </div> 
        <div className="font-extralight text-center text-xl pt-[120px] lg:text-base lg:block ">
            <p>Copyright © 2021 Konseling Satir Indonesia</p>
        </div>   
    </div>
    )
}

export default Footer;