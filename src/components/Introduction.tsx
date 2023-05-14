
import Vector from '../img-page/Vector.webp';
import Mask_group1 from '../img-page/Mask-Group-1.webp';
import Mask_group from '../img-page/Mask-Group.webp';
import logos_youtube_icon from '../img-page/logos_youtube-icon.webp';

const Introduction = () => { 
    return(
    <section id="section7 " className="mt-[200px] h-[550px] lg:h-[700px] sm:h-[780px] ">
        <h2 className="text-5xl lg:text-3xl text-center font-semibold text-[#002157]">Berkenalan dengan Konseling Satir</h2>
        <div className="relative mt-[100px]">
            <div className=''>
                <img src={Vector} alt="background" />
                <img src={Mask_group1} alt="garis-setengah-lingkaran" className=" absolute w-[80%] top-[15%]  lg:w-[750px] xl:top-[15%] 2xl:top-[15%]"/>
            </div>
            <div className="absolute w-[80%] h-[200px] top-[20%] left-[10%] sm:h-[300px] lg:h-[450px] lg:top-[15%] md:h-[350px] " >
                <img src={Mask_group} alt="" className="w-full h-full"/>
                <img src={logos_youtube_icon} alt="" className="absolute top-[45%] left-[45%] lg:left-[50%]"/>
            </div>
        </div>
      
    </section>
    )
}


export default Introduction;