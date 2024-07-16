import React from 'react'
import  MidPhone2 from '../assets/assets/images/midPhone2.png';
import  blueSofa from '../assets/assets/images/blueSofa.png';
import { useAuth } from './Context';

function ItemMiddle_2({text,title,img}) {
  const {theme,setTheme} = useAuth()
  return (
    <div className='mt-11'>
    <div className={`flex flex-col-reverse lg:flex-row gap-20  ${theme?.isClick ? "text-white" : "text-black"}`} id='room'>
      <div className="w-full lg:w-1/2">
      <img src={MidPhone2} className='w-52 mx-auto hover:rotate-[-6deg] duration-1000 cursor-pointer' alt="" />
      </div>
      <div className="w-full lg:w-1/2 p-22 mt-28">
      <h1 className='text-5xl font-Inter font-bold '>Search by room</h1>
      <div className='flex gap-4 flex-col items-center sm:flex-row  mt-4 '>
        <img src={blueSofa} className=' w-[100px] sm:w-16' alt="" srcset="" />
        <h2 className='mt-4 text-2xl ms-2'>Bedroom ideas for you and your partner</h2>
      </div>
      <div className='flex gap-4 flex-col items-center sm:flex-row  align-items-center '>
        <img src={blueSofa} className=' w-[100px] sm:w-16' alt="" srcset="" />
        <h2 className='mt-4 text-2xl'>No room is quite as warm as the living room</h2>
      </div>
      <div className='flex gap-4 flex-col items-center sm:flex-row  align-items-center '>
        <img src={blueSofa} className=' w-[100px] sm:w-16' alt="" srcset="" />
        <h2 className='mt-4 text-2xl'>No roomis quite as multifunctional as the kitchen</h2>
      </div>
      </div>

    </div>
</div>
  )
}

export default ItemMiddle_2