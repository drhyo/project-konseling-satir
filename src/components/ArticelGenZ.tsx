
import {Component} from 'react';
import {BsWhatsapp} from 'react-icons/bs';
import {VscChevronRight} from 'react-icons/vsc'


//import img
import imageRectangle66 from '../img-page/Rectangle-66.webp';
import imageLinh from '../img-page/linh-le.webp';



class ArticelGenZ extends Component {
    render(){
        return(
            <>


                <section className='p-2'>
                    <div className=" flex gap-2 justify-center  text-lg mt-[30px] mb-[30px] items-center lg:justify-start lg:ml-28 ">
                        <p className="text-[#6F6F6F] font-light">Webminar </p>
                        <VscChevronRight className="text-[#002157]"/> 
                        <p className="text-[#002157]">Webinar Belajar Life Planning untuk Gen Z</p>
                        </div>
                    <img src={imageLinh} alt="" className="w-[100%] h-[300px] lg:h-[500px]"/>
                </section>

                <section>
                    <div className=" w-full mx-auto mt-10 relative p-4 lg:mt-[80px] lg:w-[60%]">
                        <h1 className="text-[#002157] text-6xl sm:text-5xl font-semibold text-center lg:pt-[50px]">Webinar Belajar Planning Life untuk GenZ</h1>
                        <img src={imageRectangle66} alt="" className="w-[122px] h-[115] absolute -z-10 top-[25%] right-0 hidden lg:block"/>
                    </div>
                    <div className="flex justify-center mt-10"> 
                        <div className=" bg-[#1FAF38] font-semibold text-slate-100 text-xl flex justify-center items-center w-[250px] py-[11px] rounded-md hover:bg-green-700 active:bg-[#1FAF38] ">
                            <a href="#">Daftar Sekarang</a>
                            <BsWhatsapp size={23} className='ml-[15px]'/>
                        </div>
                    </div>
                </section>

                {/* section articel */}
                <section id="section 2" className='mt-[80px]'>
                    <div className="text-center xl:ml-[80px] xl:text-left text-[#4B4B4B] font-light">
                        <h3 className="text-6xl xl:text-4xl text-[#002157] font-semibold">Webinar ini ?</h3>
                        <div className="w-[90%]  text-2xl mt-[50px] text-center p-4 mx-auto lg:mx-0 xl:text-xl xl:text-left">
                            <p>Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                        </div>
                        <div className="w-[90%]  text-2xl mt-[50px] text-center p-4 mx-auto lg:mx-0 xl:text-xl xl:text-left">
                            <p>Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                        </div>
                        <div className="w-[90%]  text-2xl mt-[50px] text-center p-4 mx-auto lg:mx-0 xl:text-xl xl:text-left">
                            <p>Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                        </div>

                        
                        
                    </div>
                </section>
            </>
        )
    }
}


export default ArticelGenZ;