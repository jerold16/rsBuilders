import React from 'react'
import RightArrow from '../SvgIcon/RightArrow'
import CallIcon from '../SvgIcon/CallIcon'
import MailIcon from '../SvgIcon/MailIcon'
import AddressIcon from '../SvgIcon/AddressIcon'
import InstagramIcon from '../SvgIcon/InstagramIcon'
import TwitterIcon from '../SvgIcon/TwitterIcon'
import FaceBookIcon from '../SvgIcon/FaceBookIcon'

const Footer = ({ txtclr }) => {
    return (
        <div className='lg:min-h-[40vh] py-5 bg-slate-700/5 ' >
            <main className=' row container mx-auto  ' >
                <section className='col-sm-6 col-lg-4  ' >
                    <img src={require('../Assets/rsbuildersLogo.png')} alt="RSBuilders Logo"
                        className=' w-[] ' width={180} />
                    <p className='inter my-3 sm:w-[80%] ' >
                        Get the best value for your investment with cost-effective
                        construction solutions that don’t compromise on quality or safety.
                    </p>
                </section>
                <section className=' col-6 col-lg-4 ' >
                    <h3 className={` text-[${txtclr}] text-2xl fw-medium poppins  `} > Page Links </h3>
                    <a href="#home" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <RightArrow /></span>   Home </a>
                    <a href="#about" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <RightArrow /></span>   About </a>
                    <a href="#service" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <RightArrow /></span>   Service </a>
                    <a href="#project" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <RightArrow /></span>   Project </a>
                    <a href="#contact" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <RightArrow /></span>   Contact </a>
                </section>
                <section className=' col-6 col-lg-4 ' >
                    <h3 className={` text-[${txtclr}] text-2xl fw-medium poppins  `} > Contact Us </h3>

                    <a href="tel:+919715048331" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <CallIcon /></span>   +91-97150-48331 </a>
                    <a href="mailto:rsbuilders2k21@gmail.com" className='flex items-center inter gap-2 my-3
                    text-wrap  break-words text-slate-900 text-decoration-none' >
                        <span className={` text-[${txtclr}] `} > <MailIcon /></span>
                        <span style={{
                            wordBreak: "break-word",
                            overflowWrap: "break-word",
                            whiteSpace: "normal",
                        }}
                            className=' text-wrap  break-words' >rsbuilders2k21@gmail.com
                        </span>  </a>
                    <a href="#contact" className='flex items-center inter text-slate-900 text-decoration-none gap-2 my-3 ' >
                        <span className={` text-[${txtclr}] `} > <AddressIcon /></span> Kumaramangalam,
                        Thirucengode (TK), Namakkal (DT) - 637 205 </a>
                </section>
                <hr className=' w-[90%] mx-auto my-3 opacity-60 ' />
                <div className='w-[90%] mx-auto py-1 flex-wrap gap-2 flex justify-center sm:justify-between items-center ' >
                    <button className=' poppins fw-medium ' >
                        Copyright © 2024 RS.Builders All Rights Reserved.
                    </button>
                    <div className='flex items-center justify-center gap-2 ' >
                        <a href="" className='p-2 border-[1px] hover:bg-slate-100 text-slate-800 hover:scale-[1.05] duration-500 border-slate-800 rounded-full ' >
                            <InstagramIcon />
                        </a>
                        <a href="" className='p-2 border-[1px] hover:bg-slate-100 text-slate-800 hover:scale-[1.05] duration-500 border-slate-800 rounded-full ' >
                            <TwitterIcon />
                        </a>
                        <a href="" className='p-2 border-[1px] hover:bg-slate-100 text-slate-800 hover:scale-[1.05] duration-500 border-slate-800 rounded-full ' >
                            <FaceBookIcon />
                        </a>
                    </div>
                </div>
                <hr className=' w-[90%] mx-auto my-3 opacity-60 ' />
            </main>
        </div>
    )
}

export default Footer