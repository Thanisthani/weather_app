import React, { useState,useEffect} from 'react'
import { AiOutlineArrowLeft, AiOutlineCloud } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";
import axios from "axios";
import { Link } from 'react-router-dom';
import date from 'date-and-time';


function DetailCard({ item,index }) {
    const [forecast, setForecast] = useState();
    const now = new Date();

    const color = ['bg-[#388ee7]', 'bg-[#df944d]', 'bg-[#38b781]', 'bg-[#6056a5]', 'bg-[#9c3a3b]','bg-[#388ee7]', 'bg-[#df944d]', 'bg-[#38b781]', 'bg-[#6056a5]', 'bg-[#9c3a3b]'];

    const getForecast = async () => {
        await axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?id=${item}&units=metric&appid=1fc7bb3360d9a0dc1ee6edf72b006c7c`
        )
        .then((res) => {
                setForecast( res.data);
                console.log(res.data);     
        })
    }

    useEffect(() => {
        getForecast();
         
      }, []);


  return forecast &&(
      <div className='flex flex-col items-center mt-10'>
          <div className={`${color[index]} w-[600px] h-[300px] rounded-t-md pt-3 px-5 sm:w-[340px] sm:h-[200px]`}>
              <Link to={`/`}>
                  <AiOutlineArrowLeft className='text-white' />
                  
              </Link>
             
              <div className='flex flex-col items-center'>
                  <h1 className='text-white text-2xl font-medium'>{forecast.name}, {forecast.sys.country }</h1>
                  <h2 className='text-white text-xs pt-2'>{date.format(now, 'hh:mm A')}, {date.format(now, 'MMM DD') }</h2>
              </div>

              <div className='flex  justify-center items-center pl-20 pt-10'>
                  <div className='flex flex-col justify-center items-center py-2 pr-8 border-solid border-r-2 border-slate-300'>
                  <AiOutlineCloud className='text-white text-5xl '/>
                  <h2 className='text-white  pt-3 '>{forecast.weather[0].description }</h2>
                  </div>

                  <div className='pl-8 flex flex-col items-start'>
                      <div className='text-white font-medium text-5xl pb-5'>{ forecast.main.temp}<sup> 0</sup>C</div>
                      <div className='text-white'>Temp Min: { forecast.main.temp_min}<sup> 0</sup>C</div>
                      <div className='text-white '>Temp Max: { forecast.main.temp_max}<sup> 0</sup>C</div>
                  </div>
                  
              </div>
              
          </div>
                 {/* bottom */}

                 <div className='bg-[#383b47] w-[600px] h-[100px] rounded-b-md grid grid-cols-3 sm:w-[340px]'>
                  {/* start */}
                  <div className='border-solid border-r-2 border-slate-500 flex justify-center items-center flex-col  my-5' >
                      <div className='flex flex-row  pb-1'>
                          <div className='text-white text-xs font-medium'>Pressure: </div>
                          <div className='text-white text-xs '> { forecast.main.pressure}hPa</div>
                      </div>
                      <div className='flex flex-row pb-1'>
                          <div className='text-white text-xs font-medium'>Humidity: </div>
                          <div className='text-white text-xs '> { forecast.main.humidity} %</div>
                      </div>
                      <div className='flex flex-row pb-1'>
                          <div className='text-white text-xs font-medium'>Visibility: </div>
                          <div className='text-white text-xs '>{ forecast.visibility/1000} km</div>
                      </div>
                    
                  </div>

                  {/* center */}
                  <div className='border-solid border-r-2 flex justify-center flex-col items-center border-slate-500 my-5' >
                      <BiNavigation className="text-lg text-white pb-1" />
                      <div className='text-white text-xs '>{ forecast.wind.speed}m/s { forecast.wind.deg} Degree</div>
                  </div>

                  {/* end */}

                  <div className=' my-3 flex flex-col justify-center items-center' >
                      <div className='flex flex-row  pb-1'>
                          <div className='text-white text-xs font-medium'>Sunrise: </div>
                          <div className='text-white text-xs '> 6:05am</div>
                      </div>
                      <div className='flex flex-row pb-1'>
                          <div className='text-white text-xs font-medium'>Sunset: </div>
                          <div className='text-white text-xs '> 6:05pm</div>
                      </div>

                  </div>

                  </div>
    </div>
  )
}

export default DetailCard