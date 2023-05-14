import  React, {Component} from 'react';


import Avatar from '../img-page/Avatar.webp';

class CardPersonal extends Component {
    render() {
        return(
            <section id="section6 " className="mt-[100px]">
                <h2 className="text-3xl text-center font-semibold text-[#002157]">Apa kata mereka</h2>
                <div className="flex justify-center gap-10 flex-wrap mt-[50px]">
                    {/* card 1 */}
                    <div className=" w-[450px] h-[500px] pl-[20px] flex flex-col justify-evenly text-center lg:text-left shadow-lg rounded-md ">
                        <img src={Avatar} alt="" className="w-[200px] h-[200px] mx-auto" />
                        <div className="card-paragaf">
                            <h5 className="text-3xl lg:text-xl font-medium">Nama</h5>
                            <p className="font-extralight mt-[5px] text-xl lg:text-base ">Card Subtitle</p>
                        </div> 
                        <div className="mr-[30px] text-xl lg:text-base ">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        </div>
                        <div className=" text-indigo-600 text-xl lg:text-base ">
                            <a href="" className="mr-[20px]">social media 1</a>
                            <a href="">social media 2</a>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className=" w-[450px] h-[500px] pl-[20px] flex flex-col justify-evenly text-center lg:text-left shadow-lg rounded-md">
                        <img src={Avatar} alt="" className="w-[200px] h-[200px] mx-auto" />
                        <div className="card-paragaf">
                            <h5 className="text-3xl lg:text-xl font-medium">Nama</h5>
                            <p className="font-extralight mt-[5px] text-xl lg:text-base ">Card Subtitle</p>
                        </div> 
                        <div className="mr-[30px] text-xl lg:text-base ">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        </div>
                        <div className=" text-indigo-600 text-xl lg:text-base ">
                            <a href="" className="mr-[20px]">social media 1</a>
                            <a href="">social media 2</a>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className=" w-[450px] h-[500px] pl-[20px] flex flex-col justify-evenly text-center lg:text-left shadow-lg rounded-md">
                        <img src={Avatar} alt="" className="w-[200px] h-[200px] mx-auto" />
                        <div className="card-paragaf">
                            <h5 className="text-3xl lg:text-xl font-medium">Nama</h5>
                            <p className="font-extralight mt-[5px] text-xl lg:text-base ">Card Subtitle</p>
                        </div> 
                        <div className="mr-[30px] text-xl lg:text-base ">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        </div>
                        <div className=" text-indigo-600 text-xl lg:text-base ">
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