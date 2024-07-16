import React from 'react'
import MidImg from '../assets/assets/images/flow-light.png';
import MidImgDark from '../assets/assets/images/flow-dark.png';
import { useAuth } from './Context';



function FurnImg() {
  const {theme,setTheme} = useAuth()
  return (
    <div>
      <img src={`${theme?.isClick ? MidImgDark : MidImg}`} className='w-full' alt="" /> 
    </div>
  )
}

export default FurnImg