import React from 'react'
import { useAuth } from './Context'
// import MidSection from './MidSection'

function WrapperContainer({navhead,children}) {
  const {theme,setTheme} = useAuth()
  return (
    <div className={!navhead ? ` -z-50 container overflow-x-hidden   lg:w-full mx-auto px-4 
      ${theme?.isClick ? "bg-wrapperDark" : "bg-wrapperBg"}
    h-full w-full bg-cover bg-no-repeat bg-center rounded-xl  drop-shadow-2xl  ` : "container mx-auto px-4 "}>
{children}
    </div>
  )
}

export default WrapperContainer