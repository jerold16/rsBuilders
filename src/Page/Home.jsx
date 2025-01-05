import React from 'react'
import HeroSection from '../Component/HeroSection'
import RightArrow from '../Component/RightArrow'
import OurService from '../Component/OurService'
import ClockIcon from '../SvgIcon/ClockIcon'
import WalletIcon from '../SvgIcon/WalletIcon'
import Footer from '../Component/Footer'
import OurProjects from '../Component/OurProjects'

const Home = () => {
  let color = 'rgb(15,56,97)'
  let color1 = 'rgb(47,153,195)'
  return (
    <div>
      <HeroSection />
      {/* ABout us */}
      <main className=' min-h-[60vh] py-5 lg:min-h-[100vh] container-fluid px-3 flex ' id='about' >
        <section className='row w-full m-auto h-full ' >
          <article className='col-lg-6 ' >
            <img src={require('../Assets/aboutUs.jpg')} alt="AboutUs Image" />
          </article>
          <article className='col-lg-6 m-auto ' >
            <h2 className={` poppins text-3xl sm:text-4xl text-[${color}] `} >About Us </h2>
            <p className='poppins text-4xl sm:text-5xl my-4 text-slate-800 sm:leading-[120%] ' >
              Building Excellence with Every Brick We Lay
            </p>
            <p className='inter leading-[170%] ' >
              We create spaces that last a lifetime, using high-quality materials and expert craftsmanship. At RS Builders,
              every project reflects our dedication to precision, resilience, and excellence, ensuring your vision becomes a solid reality.
            </p>
            <a href='tel:+919715048331' className={`text-decoration-none w-fit flex items-center gap-3 my-4 bg-[${color}] p-3 rounded text-slate-100 fw-semibold `} >
              Get a Quote
              <RightArrow />
            </a>
          </article>
        </section>
      </main>
      {/* Service */}
      <OurService color={color1} color1={color} />
      {/* Why choose us */}
      <main className={` bg-[${color}] flex min-h-[60vh] py-5 lg:min-h-[80vh] `} >
        <article className='row container  m-auto items-center ' >
          <section className=' col-lg-7  ' >
            <h2 className={` text-3xl sm:text-4xl poppins text-[${color1}] `} > Why Choose us </h2>
            <h5 className={`my-4 text-4xl sm:text-5xl poppins text-slate-200 `} >Turning Raw Concepts into Concrete Masterpieces </h5>
            <hr className=' w-[20%] opacity-100 my-4 border-2  border-slate-200 ' />

            <p className=' inter my-4 text-slate-200 ' >
              We combine creativity, expertise, and dedication to ensure every project reflects the highest standards of quality!
            </p>
            {/* First point */}
            <div className='flex gap-2 items-start my-3 ' >
              <span className=' border-[1px] border-slate-200 p-2 text-slate-200 rounded-sm ' >
                <ClockIcon size={20} />
              </span>
              <div className='  ' >
                <h4 className={` poppins sm:text-4xl text-2xl  text-[${color1}] `} > Professional Craftsmanship </h4>
                <p className='text-slate-300 inter my-3 text-sm ' >
                  Our skilled team uses only top-quality materials and techniques to
                  ensure your project lasts a lifetime through sustainable designs.
                </p>
              </div>
            </div>
            {/* Second point */}
            <div className='flex gap-2 items-start my-3 ' >
              <span className=' border-[1px] border-slate-200 p-2 text-slate-200 rounded-sm ' >
                <WalletIcon size={20} />
              </span>
              <div className='  ' >
                <h4 className={` poppins sm:text-4xl text-2xl  text-[${color1}] `} > Affordable Solutions </h4>
                <p className='text-slate-300 inter my-3 text-sm ' >
                  We offer cost-effective construction services without compromising
                  on quality, making your dream project more achievable.
                </p>
              </div>
            </div>
          </section>
          <section className='col-lg-5 ' >
            <img src={require('../Assets/whyChooseUs.jpg')} alt="WhyChooseUs"
              className=' rounded  ' />
          </section>
        </article>
      </main>
      <OurProjects color={color1} color1={color} />
      {/* Contact */}
      <main className='relative min-h-[50vh] overflow-hidden ' id='contact' >
        <img src={require('../Assets/planstech.jpg')} alt="Plans Tech" className='absolute w-full h-full object-cover ' />
        <div className='bg-slate-900/40 absolute h-full top-0 w-full ' ></div>
        <div className='container relative mx-auto  min-h-[50vh] ' >
          <section className={` col-lg-6 bg-[${color}] flex min-h-[50vh] text-slate-200 p-4 `} >
            <div className='my-auto ' >
              <h2 className=' poppins text-2xl sm:text-4xl lg:text-6xl ' > Have a project in mind? </h2>
              <hr className='w-[20%] opacity-70 border-2 ' />
              <p className='inter w-[80%] my-4 text-sm ' >
                Your dream project is just one call away! Reach out now,
                let us know your requirements, and our team will handle the rest.
              </p>
              <a href='tel:+919715048331' target='_blank'
                className={` p-2 px-3 rounded-sm bg-slate-200 text-[${color}] text-decoration-none my-4 inter fw-medium  `}>
                Contact Us
              </a>
            </div>
          </section>

        </div>
      </main>
      {/* Footer */}
      <Footer txtclr={color} />
    </div>
  )
}

export default Home