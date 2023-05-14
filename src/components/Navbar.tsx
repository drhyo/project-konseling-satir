import {useState} from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
 
import img1 from '../img-page/image-109.webp'


const Navbar = () => {
    const [nav, setNav] = useState(true);
    const[animation ,setAnimation] = useState(true);

    const handleHamburgerMenu = () :void => {
        setNav(!nav)
    };

    const handleAnimation = () : void => {
        setAnimation(!animation)
    }


    return(
        <header className="flex items-center w-full ">
            {/* Desktop */}
            <div className="w-full flex justify-around ">
                <div className="flex w-[200px] h-[80px] ml-5 "   >
                    <img src={img1} alt="logo" className="w-[70px] h-[69px] my-auto mr-3" />
                    <h1 className="text-[#002157;] text-xl my-auto font-semibold leading-[20px]">Konsultan Satir Indonesia</h1>
                </div>
                <nav className="w-[40%] lg:w-[50%] text-xl my-auto" >
                    <ul className="hidden lg:flex justify-evenly text-[#4B4B4B] font-extralight ">
                        <li className="w-[60px] hover:font-medium hover:text-[#002157;]"><a href="#" className=''>Home</a></li>
                        <li className="w-[100px] hover:text-[#002157;] hover:font-medium">
                            <div onClick={handleAnimation} className='flex justify-between items-center' >
                                <a href="#">Layanan </a>
                                {animation ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                            </div>
                        </li>
                        <li className='w-[40px] hover:font-medium hover:text-[#002157;]  '><a href="#">Blog</a></li>
                        <li  className='hover:font-medium hover:text-[#002157;] w-[90px]' ><a href="#">About Us</a></li>
                    </ul>
                </nav>
                <div className="bg-[#002157] w-[104px] h-[40px] my-auto hidden lg:flex rounded-md lg:mr-8 sm:mr-2 hover:bg-[#001942] hover:text-[#C4D6F5]   ">
                    <a className="text-slate-100 text-xl font-bold m-auto" href="#" >Masuk</a>
                </div>
            </div>
            {/* End Deskstop */}

            {/* Mobile view */}
            <div onClick={handleHamburgerMenu} className='max-w-[1785px] block lg:hidden  '>
                { nav ?  <AiOutlineMenu size={30} className='mr-5'/> :  
                <div className={!nav ? 'fixed z-50 left-0 top-0 w-full md:w-[50%] bg-white p-4 ease-in-out duration-500' : ' fixed top-[-999999px] '}>
                    <div className="flex w-[200px] h-[80px] mx-auto"  >
                        <img src={img1} alt="logo" className="w-[70px] h-[69px] my-auto mr-3" />
                        <h1 className="text-[#002157;] text-xl my-auto font-semibold leading-[20px]">Konsultan Satir Indonesia</h1>
                    </div>
                    <div className="w-full h-full relative">
                        <AiOutlineClose size={30} className='absolute top-[-80px] right-0'/>
                    </div>
                    <ul className="mt">
                        <li className="p-4 border-b-2 border-black text-center">HOME</li>
                        <li className="p-4 border-b-2 border-black text-center">LAYANAN</li>
                        <li className="p-4 border-b-2 border-black text-center">BLOG</li>
                        <li className="p-4 border-b-2 border-black text-center">ABOUT US</li>

                    </ul>
                    <div className="bg-[#002157] w-[104px] h-[40px] flex rounded-md  hover:bg-[#001942] hover:text-[#C4D6F5] m-4 mx-auto">
                        <a className="text-slate-100 text-xl font-bold m-auto" href="#" >Masuk</a>
                    </div>
                </div>}
            </div>
             {/* End Mobile view */}
            
        </header>
        
    )
}



 


export default Navbar;


