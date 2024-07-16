import React from 'react'
import { useAuth } from './Context'

function ItemsMid({title,img,text,reverse,btn}) {
  const {theme,setTheme} = useAuth()
  return (
    <div>
        <div className={`flex flex-wrap ${theme?.isClick ? "text-white" : " text-black"} `} id='company'>
<div className="w-full lg:w-1/2 lg:p-20">
<h1 className='text-5xl font-bold'>{title}</h1>
<p className='font-Inter mt-4'>{text}</p>
<button className='pushable mt-4'>
    <span className='front'>{btn}</span>
</button>
</div>
<div className="w-full lg:w-1/2">
        <img src={img} className='w-52 mx-auto hover:rotate-6 duration-1000' alt="" />
</div>
        </div>
    </div>
  )
}

export default ItemsMid