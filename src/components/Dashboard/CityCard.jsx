import React from 'react'
import cloud from '../../assets/cloud2.png'
import { BiNavigation} from "react-icons/bi";

function CityCard() {
  return (
      <div className='grid grid-cols-2  gap-y-4 justify-items-center mt-10 xl:px-72 sm:grid-cols-1 ' >
          
          {/* card */}
          <div>
              <div className='bg-blue-bg w-96 h-40 bg-cover bg-center rounded-t-md sm:w-[340px]'>
                  <div className='flex flex-row justify-end pr-6 pt-3'>
                  <div className='text-white text-sm ' >X</div>
              </div>
                  
              <div className='  grid grid-cols-2 gap-y-4 px-5 pt-1 items-center pb-1 '>
                  
                  <div>
                      <div className='text-white font-medium text-lg'>Colombo,LK</div>
                      <div className='text-white text-xs'>9.19am, Feb 8</div>
                  </div>
                  
                  <div className='text-white font-medium text-4xl'>27o C</div>
                  
                  <div className='flex flex-row items-center'>
                      <img src={cloud} className='w-6 h-4' alt="cloud"/>
                      <div className='text-white pl-3 '>Few Clouds</div>
                  </div>

                  <div>
                      <div className='text-white pl-3 text-xs'>Temp Min:-7oc</div>
                      <div className='text-white pl-3 text-xs'>Temp Max:7oc</div>
                  </div>

                  </div>
                  
              </div>
              {/* bottom */}

              <div className='bg-[#383b47] w-96 h-24 rounded-b-md grid grid-cols-3 sm:w-[340px]'>
                  {/* start */}
                  <div className='border-solid border-r-2 border-slate-500 flex justify-center flex-col pl-3 my-5' >
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

           {/* card */}
           <div>
              <div className='bg-brown-bg w-96 h-40 bg-cover bg-center rounded-t-md sm:w-[340px]'>
                  <div className='flex flex-row justify-end pr-6 pt-3'>
                  <div className='text-white text-sm ' >X</div>
              </div>
                  
              <div className='  grid grid-cols-2 gap-y-4 px-5 pt-1 items-center pb-1 '>
                  
                  <div>
                      <div className='text-white font-medium text-lg'>Colombo,LK</div>
                      <div className='text-white text-xs'>9.19am, Feb 8</div>
                  </div>
                  
                  <div className='text-white font-medium text-4xl'>27o C</div>
                  
                  <div className='flex flex-row items-center'>
                      <img src={cloud} className='w-6 h-4' alt="cloud"/>
                      <div className='text-white pl-3 '>Few Clouds</div>
                  </div>

                  <div>
                      <div className='text-white pl-3 text-xs'>Temp Min:-7oc</div>
                      <div className='text-white pl-3 text-xs'>Temp Max:7oc</div>
                  </div>

                  </div>
                  
              </div>
              {/* bottom */}

              <div className='bg-[#383b47] w-96 h-24 rounded-b-md grid grid-cols-3 sm:w-[340px]'>
                  {/* start */}
                  <div className='border-solid border-r-2 border-slate-500 flex justify-center flex-col pl-3 my-5' >
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

              {/* card */}
              <div>
              <div className='bg-brown-bg w-96 h-40 bg-cover bg-center rounded-t-md sm:w-[340px]'>
                  <div className='flex flex-row justify-end pr-6 pt-3'>
                  <div className='text-white text-sm ' >X</div>
              </div>
                  
              <div className='  grid grid-cols-2 gap-y-4 px-5 pt-1 items-center pb-1 '>
                  
                  <div>
                      <div className='text-white font-medium text-lg'>Colombo,LK</div>
                      <div className='text-white text-xs'>9.19am, Feb 8</div>
                  </div>
                  
                  <div className='text-white font-medium text-4xl'>27o C</div>
                  
                  <div className='flex flex-row items-center'>
                      <img src={cloud} className='w-6 h-4' alt="cloud"/>
                      <div className='text-white pl-3 '>Few Clouds</div>
                  </div>

                  <div>
                      <div className='text-white pl-3 text-xs'>Temp Min:-7oc</div>
                      <div className='text-white pl-3 text-xs'>Temp Max:7oc</div>
                  </div>

                  </div>
                  
              </div>
              {/* bottom */}

              <div className='bg-[#383b47] w-96 h-24 rounded-b-md grid grid-cols-3 sm:w-[340px]'>
                  {/* start */}
                  <div className='border-solid border-r-2 border-slate-500 flex justify-center flex-col pl-3 my-5' >
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
    </div>
  )
}

export default CityCard