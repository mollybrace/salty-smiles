"use client"
import React from 'react'
import GoogleMap from './GoogleMap'

const Directions = () => {
  return (
    <div className='flex bg-cyan-600 flex-col text-white '>
      <div>
        <h2 className='text-xl md:text-5xl pt-4 pl-4 flex justify-center object-center'>
            How to find Salty Smiles Anjuna
        </h2>
      </div >

        <div className='flex flex-row-reverse justify-center text-center border object-center '>
         
            <ul className="my-4 m-4 text-xl border rounded-lg w-[200px] flex flex-col justify-center object-center ">
                <li>Mazal Waddo</li>
                <li>Anjuna</li>
                <li>Goa</li>
                <li>403509</li>
            </ul>

          <button className='mb-10'>
          <a
            href="https://www.google.com/maps/dir//Salty+Smiles+Stay,+Post+office,+Mazal+Waddo,+Anjuna,+Goa/@15.5835472,73.6666619,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bbfeb00388ff5b1:0x325421a3c6a92ef3!2m2!1d73.7490625!2d15.5835625!3e0?entry=ttu"
            target="blank"
            className="bg-black hover:bg-cyan-900 py-2 px-10 text-white rounded shadow-xl mb-5">
             Get directions
          </a>

          </button>
     

        </div>

      <div className='flex justify-center w-full h-auto'>
         <GoogleMap />
      </div>
      </div>

  )
}

export default Directions