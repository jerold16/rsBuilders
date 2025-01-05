import React from 'react'
import NavbarCom from './NavbarCom'

const HeroSection = () => {
    return (
        <div id='home' className=' min-h-[100vh] flex p-3 sm:px-10 ' >
            <main className=' min-h-[90vh] relative fixedimg w-full rounded-[1.5rem] sm:rounded-[2rem] px- overflow-hidden m-auto ' >
                <div className='w-full h-full bg-slate-50/20 min-h-90vh absolute  top-0 ' >

                </div>
                <NavbarCom />

                <section className='w-full min-h-[70vh] relative flex ' >
                    <article className='m-auto text-center' >
                        <h1 className='poppins text-3xl sm:text-5xl lg:text-6xl lg:w-[80%] mx-auto text-[rgb(15,56,97)] text-center ' >
                            Premium Designs & Superior Craftsmanship for All Your Construction Needs</h1>
                        <div className='flex gap-4 justify-center my-4 ' >
                            <a href='https://wa.me/9715048331' target='_blank' className='p-3 text-decoration-none rounded-xl bg-[rgb(15,56,97)] text-slate-200 inter fw-semibold ' >
                                Message Us
                            </a>
                            <a href='tel:+919715048331' className='text-decoration-none border-2 border-[rgb(15,56,97)] text-[rgb(15,56,97)] rounded-xl p-3 fw-semibold ' >
                                Call Us
                            </a>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default HeroSection