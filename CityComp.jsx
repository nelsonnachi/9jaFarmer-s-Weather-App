import React from 'react'
// import rain from '../assets/rain.png';
import rain from './src/assets/rain.png'
import { Link } from 'react-router';

const CityComp = () => {
  return (
    <div className='border mt-10 lg:mt-0 lg:w-1/4 lg:mr-10'>
      <div className=''>
        <h1 className='
        mt-10 text-xl font-bold'>9ja Cities</h1>

        <div className=''>
          <div className='bg-[#fdfdfd] shadow-md flex gap-10 items-center mt-5 p-3 rounded-2xl'>
            <div>
              <img src={rain} alt="" />
            </div>
            <div>
              <h2 className='font-bold'>Lagos</h2>
              <span className='text-[14px] flex text-gray-500 relative'>Cloudy, High: 8<sup className=''>o</sup>, Low: 10<sup className=''>o</sup></span>
            </div>
            <div>
              <span className='text-[24px] flex font-bold relative'>7<sup className='absolute top-1 -right-4 '>o</sup></span>
            </div>
          </div>

          <div className='bg-[#fdfdfd] shadow-md flex gap-10 items-center mt-5 p-3 rounded-2xl'>
            <div>
              <img src={rain} alt="" />
            </div>
            <div>
              <h2 className='font-bold'>Abuja</h2>
              <span className='text-[14px] flex text-gray-500 relative'>Cloudy, High: 8<sup className=''>o</sup>, Low: 10<sup className=''>o</sup></span>
            </div>
            <div>
              <span className='text-[24px] flex font-bold relative'>7<sup className='absolute top-1 -right-4 '>o</sup></span>
            </div>
          </div>

          <div className='bg-[#fdfdfd] shadow-md flex gap-10 items-center mt-5 p-3 rounded-2xl'>
            <div>
              <img src={rain} alt="" />
            </div>
            <div>
              <h2 className='font-bold'>Asaba</h2>
              <span className='text-[14px] flex text-gray-500 relative'>Cloudy, High: 8<sup className=''>o</sup>, Low: 10<sup className=''>o</sup></span>
            </div>
            <div>
              <span className='text-[24px] flex font-bold relative'>7<sup className='absolute top-1 -right-4 '>o</sup></span>
            </div>
          </div>

          <div className='bg-[#fdfdfd] shadow-md flex gap-10 items-center mt-5 p-3 rounded-2xl'>
            <div>
              <img src={rain} alt="" />
            </div>
            <div>
              <h2 className='font-bold'>Enugu</h2>
              <span className='text-[14px] flex text-gray-500 relative'>Cloudy, High: 8<sup className='absolute top-3 -right-4 '>o</sup>, Low: 10<sup className='absolute top-3 -right-4 '>o</sup></span>
            </div>
            <div>
              <span className='text-[24px] flex font-bold relative'>7<sup className='absolute top-1 -right-4 '>o</sup></span>
            </div>
          </div>

          <Link to='/cities' className='my-5 flex items-center justify-center'>
            <button className='text-white bg-black px-8 py-3 rounded-3xl'>See more</button>              
          </Link>
            
        </div>
      </div>
    </div>
    
  )
}

export default CityComp