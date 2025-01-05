import React from 'react'
import Slider from 'react-slick';

const OurService = ({ color, color1 }) => {
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
            title: 'Commercial Construction',
            content: 'From offices to retail spaces, we build commercial structures that combine strength, style, and functionality.',
        },
        {
            img: '../Assets/roofing.jpg',
            title: 'Roofing',
            content: `We offer reliable roofing solutions that protect your property, using top-grade materials for lasting results.`
        },
        {
            img: '../Assets/pillareva.jpg',
            title: 'Pillar Work',
            content: `Strong, durable pillars are the backbone of every project, which are crafted to ensure stability and support.`
        },
        {
            img: '../Assets/planning.jpg',
            title: 'Planning & Design',
            content: `We collaborate with you to create thoughtful, functional 
            designs that reflect your vision in the projects we deliver.`
        },



        {
            img: '../Assets/residentalservice.jpg',
            title: 'Residential Construction',
            content: `We build homes that are safe, comfortable, and personalized to meet the needs of every family.`
        },
        {
            img: '../Assets/renovationservice.jpg',
            title: 'Renovations & Extensions',
            content: `Whether upgrading a room or expanding your space, we bring new life to existing structures with care.`
        },
        {
            img: '../Assets/interiorservice.jpg',
            title: 'Interior & Exterior Finishing',
            content: `From smooth finishes to vibrant exteriors, we perfect every detail for a flawless final look.`
        },

    ]
    return (
        <div id='service' className='bg-slate-100 py-4 min-h-[60vh] lg:min-h-[100vh] flex ' >
            <main className=' container m-auto ' >
                <h2 className={` poppins tracking-wider uppercase text-xl text-[${color}] `} > Our Service </h2>
                <p className='poppins text-3xl my-3 lg:w-[80%] sm:text-5xl fw-semibold ' >Innovative Solutions for Every Construction Challenge </p>
                <Slider {...settings} className=' py-4 my-4 ' >
                    {
                        data.map((obj) => (
                            <div>
                                <img src={obj.img} className='rounded hover:scale-102 ' alt="Service Image" />
                               
                                    <h5 className={` text-[${color1}] py-3 pb-2 poppins `} >{obj.title} </h5>
                                    <p className={`inter line-clamp-3  `} >
                                        {obj.content}
                                    </p>
                            </div>
                        ))
                    }
                </Slider>
            </main>
        </div>
    )
}

export default OurService