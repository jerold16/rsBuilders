import React from 'react'
import HeroSection from '../Component/HeroSection'
import RightArrow from '../Component/RightArrow'
import OurService from '../Component/OurService'

const Home = () => {
  let color = 'rgb(15,56,97)'
  let color1 = 'rgb(47,153,195)'
  return (
    <div>
      <HeroSection />
      {/* ABout us */}
      <main className='min-h-[100vh] container-fluid px-3 flex ' id='about' >
        <section className='row w-full m-auto h-full ' >
          <article className='col-lg-6 ' >
            <img src={require('../Assets/aboutUs.jpg')} alt="AboutUs Image" />
          </article>
          <article className='col-lg-6 m-auto ' >
            <h2 className={` poppins text-3xl sm:text-4xl text-[${color}] `} >About Us </h2>
            <p className='poppins text-4xl sm:text-5xl my-3 text-slate-800 sm:leading-[120%] ' >
              Crafting structures that
              last a lifetime
            </p>
            <p className='inter leading-[170%] ' >
              Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design,
              regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.
            </p>
            <button className={` flex items-center gap-3 bg-[${color}] p-3 rounded text-slate-100 fw-semibold `} >
              Get a Quote
              <RightArrow />
            </button>
          </article>
        </section>
      </main>
      {/* Service */}
      <OurService color={color1} color1={color} />

    </div>
  )
}

export default Home