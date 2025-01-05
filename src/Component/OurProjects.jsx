import React from 'react'
import Slider from 'react-slick';

const OurProjects = ({ color, color1 }) => {
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
            content: 'Functional spaces designed to welcome customers and support your business success every day.',
        },
        {
            img: '../Assets/roofing.jpg',
            title: 'Roofing',
            content: `Turn your current space into something new with fresh designs, personalized to your lifestyle.`
        },
        {
            img: '../Assets/pillareva.jpg',
            title: 'Pillar Work',
            content: `Build a home that’s kind to the planet, using eco-friendly materials and energy-saving designs.`
        },
        {
            img: '../Assets/planning.jpg',
            title: 'Planning',
            content: `Enhance your home’s outdoor area, creating a beautiful space for relaxation and play.`
        },
    ]
    return (
        <div id='service' className='bg-blue-50 min-h-[60vh] py-5 lg:min-h-[100vh] flex ' >
            <main className=' container m-auto ' >
                <h2 className={` poppins tracking-wider text-center uppercase text-xl text-[${color1}] fw-semibold `} > Our Projects </h2>
                <p className='poppins text-3xl sm:text-5xl text-center fw-semibold my-3' > Explore our diverse range of projects </p>
                <p className=' poppins text-slate-600 my-4 w-[80%] lg:w-[60%] mx-auto text-center ' >
                    We specialize in a wide range of construction services,
                    including residential, commercial, and industrial projects.
                </p>
                <Slider {...settings} className=' py-4 my-4 ' >
                    {
                        data.map((obj) => (
                            <div className='relative h-[30rem]  rounded-xl overflow-hidden ' >
                                <img src={obj.img} className='rounded hover:scale-102 h-[30rem] object-cover  ' alt="Service Image" />
                                <div className='p-3 text-slate-200 absolute top-0 h-full flex flex-col justify-end w-full bg-slate-900/30 ' >

                                    <h5 className={`fw-semibold text-2xl py-3 pb-2 poppins `} >{obj.title} </h5>
                                    <p className={`inter line-clamp-3  `} >
                                        {obj.content}
                                    </p>
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