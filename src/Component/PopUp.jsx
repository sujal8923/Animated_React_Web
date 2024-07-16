import React, { useState } from 'react'
import chat from "../assets/assets/images/chat.svg.svg";
import {Modal} from './Modal';

const PopUp = () => {
    let [open,setOpen] = useState(false)
    let handelClick = ()=>{
        // alert(10)
        setOpen(true)
    }
  return (

    <div className='bg-gray-200 rounded-full p-2 shadow-lg header'>
        { 
            open === true ? <Modal open = {open} setOpen = {setOpen}/> :""
        }
        <div >
        <img src={chat} onClick={handelClick} className = 'w-16 hover:bg-opacity-30 text-blue-300 ease-in-out transition-colors  ' alt="" />

        </div>
    </div>
  )
}

export default PopUp