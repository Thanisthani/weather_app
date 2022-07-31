import React from 'react'

function Header() {
    return (
        <div className='flex flex-col items-center'>
            
      <div className='flex justify-center items-center pt-16'>
          <img src="https://i.pinimg.com/originals/4b/8f/a9/4b8fa90b8cabcd4a0ec4f82122913da1.png" className='w-12' alt='logo' />
          <h2 className='text-white pl-3 text-xl '>Weather App</h2>


            </div>
        <div>
            <input type="text" className='mt-5 bg-[#1f2128]  py-2 pl-5 w-64 rounded-l-lg ' placeholder="Enter a city" />
          <button className='text-white bg-[#6c5dd3] py-2 px-4 rounded-lg'>Add City</button>
        </div>
        
        </div>
        
  )
}

export default Header