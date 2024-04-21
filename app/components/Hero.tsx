import React from 'react'
import BookButton from './BookButton'


const Hero = () => {
  return (

    <div className='h-screen w-screen'>
    <div className="bg-[url('/background.jpg')] h-full w-full bg-no-repeat bg-center bg-cover absolute z-[-1] top-0">
        <div className='absolute bottom-[180px] left-7 text-5xl md:bottom-[175px] text-white md:left-16 md:text-7xl bg-slate-200 bg-opacity-50 font-s'>Salty Smiles Stay
        </div>

        <div className='absolute bottom-[100px] left-7 text-xl md:bottom-[55px] md:left-16 md:text-5xl bg-slate-200 text-white bg-opacity-50'>Explore the beaches and restaurants in the heart of <span className='font-extrabold'>Anjuna</span> 
        </div>
        <BookButton  />
        </div>

    </div>
  //   <div className="p-0 m-0 h-screen hero relative flex flex-col justify-center bg-[url('/logo.jpg')] w-full bg-no-repeat bg-center bg-cover object-cover md:bg-contain lg:bg-auto ">
  // <div className='absolute bottom-[45px] left-7 text-5xl md:bottom-[15px] text-white md:left-16 md:text-7xl lg:object-con'>
  //     <h5
  //       className="
  //         md:text-7xl
  //         mb-6
  //         md:mb-8
  //         sm:w-auto
  //         font-serif
  //         flex flex-col items-center border
  //       "
  //     >
  //       <span className="bg-black/30 text-3xl drop-shadow px-1 py-2 inline-block">Explore the beaches and restaurants in the heart of </span><span className="bg-black/30 text-3xl drop-shadow px-1 py-2 inline-block font-bold">Anjuna</span>
  //     </h5>

  //           <BookButton />
  //   </div>



  //   <a
  //     href="https://wa.me/+447876231402?text=Hello%20Flying%20Pig%20Lets%21"
  //     target="blank"
  //     className="inline-flex items-center bg-emerald-600 hover:bg-emerald-800 py-2 px-6 text-white rounded-full fixed bottom-2 right-2 z-50 border-2">
 
  //     <span className="font-normal">Get in touch</span>
  //   </a>
  // </div>


  )
}

export default Hero;