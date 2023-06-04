import {useState,useEffect} from 'react';

// import icon
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';


// import image
import Rectangle49 from '../img-page/Rectangle-49.webp';
import Rectangle50 from '../img-page/Rectangle-50.webp';
import Rectangle47 from '../img-page/Rectangle-47.webp';
import Carousel from '../img-page/Carousel.webp';
import onePiece from '../img-page/onePiece.png';
import imageLinh from '../img-page/linh-le.webp';




const imageSlide = [
    {
        url: Rectangle50
    },
    {
        url: onePiece
    },
    {
        url: Carousel
    },
    {
        url: Rectangle50
    },
]


let count = 0;
const Registration = () => {

    useEffect(() => {
        starSlider()
    }, [])

    const starSlider = () => {
        setInterval(() =>{
            nextSlide();

        }, 5000)
    }

    const [currentIndex,setCurrentIndex] = useState(0);


    const nextSlide = () => {
        count = (count + 1) % imageSlide.length 
        setCurrentIndex(count)
    }    

    const prevSlide = () => {
        const imageLength = imageSlide.length;
        count = ( currentIndex +  imageLength - 1) % imageLength
        setCurrentIndex(count)
       }


    return(
        <div className='mt-20 '> 
            <img className=" w-full h-[500px] lg:h-[800px] absolute -top-10 -z-30"  src={Rectangle47} alt="backgroundS"/>
            <div className="w-full  h-[300px] p-2 lg:h-[700px] flex justify-around mt-20 lg:m-0">
                {/* text */}
                <div className=' h-[120px] mt-[50px] lg:w-[500px] lg:flex flex-col gap-8'>
                    <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#002157]  ">Konseling Satir Indonesia</h1>
                    <p className=" font-extralight text-xs sm:text-lg md:text-xl lg:text-3xl text-[#5B5B5B]">Berproses & Bertumbuh Menjadi<br/>  Manusia Utuh</p>

                    <div className="bg-[#002157] hidden w-[200px] h-[50px] lg:flex rounded-xl py-3">
                        <a className=" text-slate-100 text-xl font-bold m-auto" href="#">Daftar Sekarang</a>
                     </div>
                </div>
                {/* image */}
                <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[400px] xl:w-[500px] relative lg:mr-10 lg:mt-0">
                    <img className="absolute -z-10 right-0" src={Rectangle49} alt="background-people"/>
                    <div style={{backgroundImage:`url(${imageSlide[currentIndex].url})`}} className='w-full h-full lg:w-[400px] lg:h-[400px]  rounded-lg bg-center bg-cover duration-500 lg:mt-[60px] lg:ml-[50px] '></div>
                     {/* left arrow */}
                    <div className='hidden absolute group-cover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer md:text-3xl'>
                        <BsChevronCompactLeft onClick={prevSlide} />
                    </div> 
                     {/* right arrow */}
                    <div className='hidden absolute group-cover:block  top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer md:text-3xl'>
                        <BsChevronCompactRight onClick={nextSlide}/>
                    </div>
                </div>
            </div>
        </div>

        )
    }
    
    export default Registration;