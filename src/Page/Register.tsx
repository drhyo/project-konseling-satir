import { useState } from "react";

// import icons
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"

// import img
import FrameImg from '../img-page/Frame32.png';
import Logo from '../img-page/image-109.webp';

const Register = () => {

    const [animation, setAnimation] = useState(true)

    const handleEyeAnimation = () => {
        setAnimation(!animation)
    }   

    return (
        <div className='max-w-[1785px] h-[927px] lg:h-[1117px] mx-auto relative flex flex-col '>
            <div className='w-full h-full bg-[#010d1f] absolute top-0 -z-20'>
            </div>
            <img src={FrameImg} className='h-full absolute top-0 -z-10' alt="" />
            <div className="flex w-[150px] lg:w-[200px] h-[80px] my-10 ml-5 lg:ml-20"  > 
                <img src={Logo} alt="logo" className="w-[60px] h-[50px] lg:w-[70px] lg:h-[69px] my-auto mr-3" />
                <h1 className="text-white text-base lg:text-xl my-auto font-semibold leading-[20px]">Konsultan Satir Indonesia</h1>
            </div>

                {/* form */}
            <div className=' rounded-md bg-white shadow-2xl w-[90%] p-10 md:w-[70%] lg:w-[40%] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D]  xl:absolute top-0 right-0 lg:h-full xl:w-[50%]'>
                <h2 className='text-3xl font-medium text-black'>Create an account</h2>
                <form className="flex flex-col gap-10 lg:w-[70%]">
                     {/* email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='font-medium'>Email</label>
                        <div className='border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5] '>
                            <input type="email" id='email' name='email' placeholder='your email' className='outline-0 w-full'/>
                        </div>
                    </div>
                     {/* end email */}

                        {/* password */}
                    <div className='flex flex-col gap-2'>
                        <div className="flex justify-between"> 
                            <label htmlFor="password" className='font-medium' >Password</label>
                        </div>
                        <div className="flex items-center lg:justify-between border-2 p-3 rounded-md hover:border-sky-400/[.5] focus:border-sky-400/[.5]"> 
                            <input type="password" id="password" name="password" placeholder='your password' className="outline-0 w-full"/>
                             <div onClick={handleEyeAnimation} className='w-[15px]'>
                                    {animation ? <AiOutlineEye size={20}/> : <AiOutlineEyeInvisible  size={20}/>}
                             </div>
                        </div>
                    </div>
                        {/* end password */}
                </form>
                <div className='bg-[#007DFA] lg:w-[70%] text-white w-[270px] text-center font-medium p-3 rounded-md'>
                    <a href="#"> Creat account</a>
                </div>
                <div className='bg-[#E0EFFE] text-[#007DFA]  lg:w-[70%] w-[270px] text-center font-medium p-3 rounded-md flex items-center justify-center gap-2'>
                    <FcGoogle size={20} />
                    <a href="#"> Continue with Google</a>
                </div>
                <div className="flex gap-2">
                    <p className="">Already Have An Account ?</p>
                    <a href="#" className='text-[#007DFA] hover:underline underline-offset-1'>Log in</a>
                </div>
            </div>
                {/* end form */}

            <div className="text-white text-4xl w-[300px] my-20 ml-5 lg:text-5xl lg:w-[400px] italic font-thin xl:absolute bottom-0 left-10">
                <h1>
                    Welcome to. Konseling Satir Indonesia
                </h1>
            </div>

        </div>
    )
}

export default Register;