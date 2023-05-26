// import Librarty
import  {Component} from 'react';

// import icon
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

// import image 
import Avatar from '../img-page/Avatar.webp';

class CardPersonal extends Component {
    render() {
        return(
            <section id="section6 " className="mt-[100px] relative">
                <h2 className="text-2xl text-center font-semibold text-[#002157]">Apa kata mereka</h2>
                <div className="flex justify-center gap-10 flex-wrap mt-[50px]">
                    {/* card 1 */}                    
                        <div className=" w-[350px] h-[500px] pl-[20px] flex flex-col justify-evenly md:text-center lg:text-left shadow-lg rounded-md  ">
                            <img src={Avatar} alt="" className="w-[150px]  md:w-[200px] md:h-[200px] mx-auto" />
                            <div className="card-paragaf">
                                <h5 className="text-xl font-medium">Nama</h5>
                                <p className="font-extralight mt-[5px] text-base ">Card Subtitle</p>
                            </div> 
                            <div className="mr-[30px] text-base ">
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                            </div>
                            <div className=" text-indigo-600 text-base ">
                                <a href="" className="mr-[20px]">social media 1</a>
                                <a href="">social media 2</a>
                            </div>
                        </div>
                        <div className="flex top-[50%] xl:top-[50%] lg:top-[30%] w-full lg:w-[89%] justify-between absolute md:hidden  text-[#002157]  ">
                            <SlArrowLeft size={23} />
                            <SlArrowRight size={23}/>
                        </div>                 
                    {/* card 2 */}
                    <div className="hidden w-[350px] h-[500px] pl-[20px] md:flex flex-col justify-evenly md:text-center lg:text-left shadow-lg rounded-md  ">
                            <img src={Avatar} alt="" className="w-[150px]  md:w-[200px] md:h-[200px] mx-auto" />
                            <div className="card-paragaf">
                                <h5 className="text-xl font-medium">Nama</h5>
                                <p className="font-extralight mt-[5px] text-base ">Card Subtitle</p>
                            </div> 
                            <div className="mr-[30px] text-base ">
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                            </div>
                            <div className=" text-indigo-600 text-base ">
                                <a href="" className="mr-[20px]">social media 1</a>
                                <a href="">social media 2</a>
                            </div>
                        </div>
                   
                    {/* card 3 */}
                    <div className="hidden w-[350px] h-[500px] pl-[20px] md:flex flex-col justify-evenly md:text-center lg:text-left shadow-lg rounded-md  ">
                            <img src={Avatar} alt="" className="w-[150px]  md:w-[200px] md:h-[200px] mx-auto" />
                            <div className="card-paragaf">
                                <h5 className="text-xl font-medium">Nama</h5>
                                <p className="font-extralight mt-[5px] text-base ">Card Subtitle</p>
                            </div> 
                            <div className="mr-[30px] text-base ">
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                            </div>
                            <div className=" text-indigo-600 text-base ">
                                <a href="" className="mr-[20px]">social media 1</a>
                                <a href="">social media 2</a>
                            </div>
                        </div>
                   
                </div>
            </section>
        )
    }
}



export default CardPersonal;