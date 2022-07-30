import React from 'react'
import { AiOutlineArrowLeft, AiOutlineCloud } from "react-icons/ai";
import { BiNavigation} from "react-icons/bi";



function DetailCard() {
  return (
      <div className='flex flex-col items-center mt-10'>
          <div className='bg-[#388ee7] w-[600px] h-[300px] rounded-t-md pt-3 px-5 sm:w-[340px] sm:h-[200px]'>
              <AiOutlineArrowLeft className='text-white'/>
              <div>
                  <h1 className='text-white font-medium'>Colombo, LK</h1>
                  <h2 className='text-white text-xs '>9.19am,Feb 8</h2>
              </div>

              <div className='flex  justify-center pt-10'>
                  <div className='flex flex-col justify-center items-center pr-5 border-solid border-r-2 border-white'>
                  <AiOutlineCloud className='text-white text-5xl '/>
                  <h2 className='text-white text-xs pt-3 '>Few Clouds </h2>
                  </div>

                  <div className='pl-5 flex flex-col items-start'>
                      <div className='text-white font-medium text-4xl pb-5'>27o C</div>
                      <div className='text-white  text-xs'>Temp Min:-7oc</div>
                      <div className='text-white  text-xs'>Temp Max:7oc</div>
                  </div>
                  
              </div>
              
          </div>
                 {/* bottom */}

                 <div className='bg-[#383b47] w-[600px] h-[100px] rounded-b-md grid grid-cols-3 sm:w-[340px]'>
                  {/* start */}
                  <div className='border-solid border-r-2 border-slate-500 flex justify-center items-center flex-col  my-5' >
                      <div className='flex flex-row  pb-1'>
                          <div className='text-white text-xs font-medium'>Pressure: </div>
                          <div className='text-white text-xs '>1018hPa</div>
                      </div>
                      <div className='flex flex-row pb-1'>
                          <div className='text-white text-xs font-medium'>Humidity: </div>
                          <div className='text-white text-xs '>78%</div>
                      </div>
                      <div className='flex flex-row pb-1'>
                          <div className='text-white text-xs font-medium'>Visibility: </div>
                          <div className='text-white text-xs '>8.0km</div>
                      </div>
                    
                  </div>

                  {/* center */}
                  <div className='border-solid border-r-2 flex justify-center flex-col items-center border-slate-500 my-5' >
                      <BiNavigation className="text-lg text-white pb-1" />
                      <div className='text-white text-xs '>4.0m/s 120 Degree</div>
                  </div>

                  {/* end */}

                  <div className=' my-3 flex flex-col justify-center items-center' >
                      <div className='flex flex-row  pb-1'>
                          <div className='text-white text-xs font-medium'>Sunrise: </div>
                          <div className='text-white text-xs '>6:05am</div>
                      </div>
                      <div className='flex flex-row pb-1'>
                          <div className='text-white text-xs font-medium'>Sunset: </div>
                          <div className='text-white text-xs '>6:05pm</div>
                      </div>

                  </div>

                  </div>
    </div>
  )
}

export default DetailCard