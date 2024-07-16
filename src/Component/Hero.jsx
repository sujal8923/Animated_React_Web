import React from 'react'
import '../index.css'
import { Switch } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import headerImg from '../assets/assets/images/headerImage.png';
import { useAuth } from './Context';
function Hero() {
  const {theme,setTheme} = useAuth()
  // console.log(data);
  // console.log(theme);
  let handelClick = ()=>{
    setTheme({
      isClick:!theme.isClick
    })
  }
  return ( 
    <div className={`${theme?.isClick ? "flex flex-col  lg:flex-row hero z-50 border border-white  overflow-x-hidden bg-black text-white" : "flex flex-col  lg:flex-row hero z-50   overflow-x-hidden bg-white text-black"} `}>

<div className='w-full lg:w-1/2 p-6 sm:p-16 mt-20 ml-30 '>
<Switch  onClick={handelClick}/> <span>{theme?.isClick ? "Switch to white" : "switch to dark"}</span>
<h1 className='font-Inter font-bold text-3xl'>Axels Brand new</h1>
<h1 className='mt-4'><span className='font-PetitFormal text-4xl sm:text-6xl font-bold'>Furniture</span>  <span className='font-Inter text-4xl'>Mobile App</span></h1>
<p className='w-80 mt-5'>Giving your home a proper makeover never was this easy. modern and stylish furniture for decent price. take a  look what we offer with  a simple button click</p>
<Button className='mt-5  pushable'>
  <span className='front p-4'>Button</span>
  </Button>
</div>
<div   className='w-full lg:w-1/2 mt-[80px]'>

<h1 className='text-3xl ms-20  font-bold'>Modern design</h1>
<img src={headerImg} className=' mx-auto h-[450px] md:h-[505px] header' alt="" />
</div>
    </div>
  )
}

export default Hero