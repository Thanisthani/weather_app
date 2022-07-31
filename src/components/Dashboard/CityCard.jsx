import React, { useEffect, useState } from "react";
import cloud from "../../assets/cloud2.png";
import { BiNavigation } from "react-icons/bi";
import axios from "axios";
import List from "../../api/cities.json";
import date from 'date-and-time';
import { Link } from 'react-router-dom';

function CityCard() {
    const [newforecast, setForecast] = useState([]);
    let cities = [];
    const bgimg = ['bg-blue-bg', 'bg-brown-bg', 'bg-green-bg', 'bg-purple-bg', 'bg-red-bg', 'bg-blue-bg', 'bg-brown-bg', 'bg-green-bg', 'bg-purple-bg', 'bg-red-bg', 'bg-blue-bg', 'bg-brown-bg', 'bg-green-bg', 'bg-purple-bg', 'bg-red-bg'];
    const now = new Date();


    // fetch city code
    
    const getCity = async () => {
        cities.length = 0;
     await List.List.map((city) => {
            cities.push(city.CityCode);
     });
        
     getForecast();
    };

    // fetch forcast
    const getForecast = () => {
        try {
            console.log(cities);
            setForecast([]);
            cities &&
                cities.map(async (cityCode, index) => (
                 
                    await axios
                        .get(
                            `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&units=metric&appid=1fc7bb3360d9a0dc1ee6edf72b006c7c`
                        )
                        .then((res) => {

                            if (index < 8) {
                                setForecast(newforecast => [...newforecast, res.data]);
                                console.log(res.data); 
                            }
                            
                            
                        })
                        
                    
                ));
              
      
        } catch (error) {
            console.log(error);
      } 

    };

  useEffect(() => {
    if (cities.length === 0) {
      getCity();
      }
     
  }, []);

  useEffect(() => {
     
      
      setInterval(() => {
          console.log("hello");
          getForecast();
      }, 300000);
  }, []); 

  return ( 
      <>
          <div className='grid grid-cols-2  gap-y-4 justify-items-center mt-10 xl:px-72 sm:grid-cols-1 ' >
      {newforecast &&
              newforecast.map((item,index) => 
              (
                //   ${bgimg[index]}
                  <div key={index} >
                      <Link to={`/detail/${item.id}/${index}`}>
                <div className={`${bgimg[index]} w-96 h-40 bg-cover bg-center rounded-t-md sm:w-[340px]`}>
                    <div className='flex flex-row justify-end pr-6 pt-3'>
                    <div className='text-white text-sm ' >X</div>
                </div>
 
                <div className='  grid grid-cols-2 gap-y-4 px-5 pt-1 items-center pb-1 '>
 
                    <div className="flex flex-col items-center">
                                  {newforecast && <div className='text-white font-medium text-xl'>{item.name}, {item.sys.country }</div>}
                                  <div className='text-white text-[11px]'>{date.format(now, 'hh:mm A')}, {date.format(now, 'MMM DD') }</div>
                    </div>
 
                              <div className='text-white font-medium text-4xl'>{ item.main.temp}<sup> 0</sup> C</div>
 
                    <div className='flex flex-row items-center'>
                        <img src={cloud} className='w-6 h-4' alt="cloud"/>
                                  <div className='text-white pl-3 '>{item.weather[0].description }</div>
                    </div>
 
                    <div>
                        <div className='text-white  text-xs'>Temp Min: { item.main.temp_min}<sup> 0</sup> C</div>
                        <div className='text-white  text-xs'>Temp Max: { item.main.temp_max}<sup> 0</sup> C</div>
                    </div>
 
                    </div>
 
                </div>
                {/* bottom */}
 
                <div className='bg-[#383b47] w-96 h-24 rounded-b-md grid grid-cols-3 sm:w-[340px]'>
                    {/* start */}
                    <div className='border-solid border-r-2 border-slate-500 flex justify-center flex-col pl-3 my-5' >
                        <div className='flex flex-row  pb-1'>
                            <div className='text-white text-xs font-medium'>Pressure: </div>
                            <div className='text-white text-xs '> { item.main.pressure} hPa</div>
                        </div>
                        <div className='flex flex-row pb-1'>
                            <div className='text-white text-xs font-medium'>Humidity: </div>
                            <div className='text-white text-xs '> { item.main.humidity}%</div>
                        </div>
                        <div className='flex flex-row pb-1'>
                            <div className='text-white text-xs font-medium'>Visibility: </div>
                            <div className='text-white text-xs '> { item.visibility/1000} km</div>
                        </div>
 
                    </div>
 
                    {/* center */}
                    <div className='border-solid border-r-2 flex justify-center flex-col items-center border-slate-500 my-5' >
                        <BiNavigation className="text-lg text-white pb-1" />
                        <div className='text-white text-xs '>{ item.wind.speed}m/s { item.wind.deg} Degree</div>
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
                    </Link>
            </div>
          ) 
              )}
          
</div>
    </>
    //   <div className='grid grid-cols-2  gap-y-4 justify-items-center mt-10 xl:px-72 sm:grid-cols-1 ' >

    //       {/* card */}  

    //       {newforecast && newforecast.map((item) => (<h1>hi</h1>))}

         
    
  );
}

export default CityCard;
