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
              Crafting structures that
              last a lifetime
            </p>
            <p className='inter leading-[170%] ' >
              Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design,
              regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.
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
            <h5 className={`my-4 text-5xl sm:text-6xl poppins text-slate-200 `} > Manage construction properly </h5>
            <hr className=' w-[20%] opacity-100 my-4 border-2  border-slate-200 ' />

            <p className=' inter my-4 text-slate-200 ' >
              Nunc varius ipsum sed ultricies scelerisque.
              Vivamus posuere venenatis orci et vehicula. Aliqu id rhoncus neque, eu fermentum sem. Maecenas ac.
            </p>
            {/* First point */}
            <div className='flex gap-2 items-start my-3 ' >
              <span className=' border-[1px] border-slate-200 p-2 text-slate-200 rounded-sm ' >
                <ClockIcon size={20} />
              </span>
              <div className='  ' >
                <h4 className={` poppins sm:text-4xl text-2xl  text-[${color1}] `} > Speed Builder </h4>
                <p className='text-slate-300 inter my-3 text-sm ' >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                  odio quis turpis elementum condimentum ut sed lectus.
                </p>
              </div>
            </div>
            {/* Second point */}
            <div className='flex gap-2 items-start my-3 ' >
              <span className=' border-[1px] border-slate-200 p-2 text-slate-200 rounded-sm ' >
                <WalletIcon size={20} />
              </span>
              <div className='  ' >
                <h4 className={` poppins sm:text-4xl text-2xl  text-[${color1}] `} > Affordable Price </h4>
                <p className='text-slate-300 inter my-3 text-sm ' >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                  odio quis turpis elementum condimentum ut sed lectus.
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
              <h2 className=' poppins text-2xl sm:text-4xl lg:text-6xl ' > Have Any Project   With Us ? </h2>
              <hr className='w-[20%] opacity-70 border-2 ' />
              <p className='inter w-[80%] my-4 text-sm ' >
                Nunc varius ipsum sed ultricies scelerisque. Vivamus posuere
                venenatis orci et vehicula. Aliqu id rhoncus neque, eu fermentum sem. Maecenas ac.
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