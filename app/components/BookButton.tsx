import React from 'react'

const BookButton = () => {
  return (
    <div className='flex justify-center '>
        <div className='bg-blue border rounded-lg px-6 py-4 text-white  text-2xl bg-blue-700 flex mb-6'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg></div>
            <div className='pl-2'>Book now</div>
        </div>
    </div>
  )
}

export default BookButton