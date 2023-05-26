

// import icon
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
// import image
import Rectangle51 from '../img-page/Rectangle-51.webp';
import Image from  '../img-page/Image.webp';



const Consultation = () => {
    

    return(
    <section id="section3" className="relative mt-10 xl:mt-[100px] ">
        <div className="p-4 w-[400px] text-center mx-auto ">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157]">Kenapa harus konsultasi di Konseling Satir</h3>
        </div>
        {/* content card */}
        <div className="flex justify-evenly gap-10 flex-wrap mt-7 ">
            {/* card 1 */}
            <div className=" w-[300px] h-[380px] shadow-lg rounded-md ">
                <img src={Image} alt="" className=" w-[100%]  mb-[25px]"/>
                <div className=" w-full h-[200px] px-2 ">
                    <h3 className="text-xl  mb-[15px]  ">Judul</h3>
                    <p className="text-lg ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                </div>
            </div>  
            {/* end card 1 */}
            {/* card 2 */}
            <div className="hidden md:block w-[300px] h-[380px] shadow-lg rounded-md ">
                <img src={Image} alt="" className=" w-[100%]  mb-[25px]"/>
                <div className=" w-full h-[200px] px-2 ">
                    <h3 className="text-xl  mb-[15px]  ">Judul</h3>
                    <p className="text-lg ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                </div>
            </div>  
           
            {/* end card 2 */}
            {/* card 3 */}
            <div className="hidden md:block w-[300px] h-[380px] shadow-lg rounded-md ">
                <img src={Image} alt="" className=" w-[100%]  mb-[25px]"/>
                <div className=" w-full h-[200px] px-2 ">
                    <h3 className="text-xl  mb-[15px]  ">Judul</h3>
                    <p className="text-lg ">Bisa didampingi dengan psikolog selama beberapa hari sekaligus.Lorem ipsum dolor amet.</p>
                </div>
            </div>  
                        {/* end card 3 */}
            {/* arrow */}
            <div className="flex top-[60%] w-[95%] justify-between absolute md:hidden  text-[#002157]  ">
                <SlArrowLeft size={23} />
                <SlArrowRight size={23}/>
            </div>  
            {/* arrow */}
        </div>
            {/* end content card */}
        <img src={Rectangle51} alt="" className="hidden lg:block lg:absolute w-[100%] h-[300px] bottom-[28px]"/>
   </section>
    )
}






export default Consultation;