import React, { useState } from 'react'
import Slider from 'react-slick';

const OurProjects = ({ color, color1 }) => {
    let [hovered, setHovered] = useState(-1)
    var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        rtl: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        responsive: [
            {
                breakpoint: 1131,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let data = [
        {
            img: '../Assets/commercial.jpg',
            title: 'Commercial House(2BHK) ',
            content: 'A modern 2BHK designed for comfort and functionality, creating the perfect environment for both work and relaxation.',
        },
        {
            img: '../Assets/roofing.jpg',
            title: 'Economical House (2BHK) ',
            content: `Designed with practicality and affordability in mind, this 2BHK home offers smart use of space for a cozy lifestyle.`
        },
        {
            img: '../Assets/pillareva.jpg',
            title: 'Store Renovation',
            content: `Revamped stores that blend aesthetics with practicality, providing a fresh look that attracts customers and increases sales.`
        },
        {
            img: '../Assets/planning.jpg',
            title: 'Planning & Design',
            content: `Thoughtfully planned spaces, personalized to meet client’s unique needs, setting the foundation for functional and aesthetic structures.`
        },
    ]
    return (
        <div id='service' className='bg-blue-50 min-h-[60vh] py-5 lg:min-h-[100vh] flex ' >
            <main className=' container m-auto ' >
                <h2 className={` poppins tracking-wider text-center uppercase text-xl text-[${color1}] fw-semibold `} > Our Projects </h2>
                <p className='poppins text-3xl sm:text-5xl text-center fw-semibold my-3' >
                    Delivering Projects That Blend Innovation, Durability, & Outstanding Value </p>
                <p className=' poppins text-slate-600 my-4 w-[80%] lg:w-[60%] mx-auto text-center ' >
                Take a look at the spaces we’ve created, each one reflecting our passion for design and construction!
                </p>
                <Slider {...settings} className=' py-4 my-4 ' >
                    {
                        data.map((obj, index) => (
                            <div onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(-1)}
                                className='relative h-[30rem]  rounded-xl overflow-hidden ' >
                                <img src={obj.img} className={` ${hovered == index ? 'scale-[1.06] ' : ''} duration-500 rounded hover:scale-102 h-[30rem] object-cover  `} alt="Service Image" />
                                <div className='p-3 text-slate-200 absolute top-0 h-full 
                                flex flex-col justify-end w-full bg-slate-900/40 ' >
                                    <div className=' min-h-[12rem] ' >
                                        <h5 className={`fw-semibold text-2xl py-3 pb-2 poppins `} >{obj.title} </h5>
                                        <p className={`inter line-clamp-3  `} >
                                            {obj.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </main>
        </div>
    )
}

export default OurProjects