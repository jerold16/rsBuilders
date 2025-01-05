import React from 'react'
import Slider from 'react-slick';

const OurService = ({ color ,color1}) => {
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
        <div id='service' className='bg-slate-100 min-h-[100vh] flex ' >
            <main className=' container m-auto ' >
                <h2 className={` poppins tracking-wider uppercase text-xl text-[${color}] `} > Our Service </h2>
                <p className='poppins text-3xl sm:text-5xl fw-semibold ' > What we do </p>
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