import React, { useState } from "react";
import { motion, px } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

export const Modal = ({ open, setOpen }) => {
  let [message,setMessage] = useState("")
  let handelSubmit = (e) =>{
    e.preventDefault();
    console.log(message);
    setMessage("")
    setOpen(false)
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div>
        <motion.div
          className="bg-white p-6 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{
            x: open ? -130 : 0,
            y: open ? -200 : 0,
            width: open && "270px",
            height: open ? 300 : 0,
            opacity: 1,
          }}
          transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
        >
          <button
            className=" flex absolute right-6 text-2xl text-blue-500"
            onClick={() => setOpen(false)}
          >
            <RxCross2 />
          </button>
          <h1 className="text-2xl font-Inter">👋 Hey There</h1>
          <p className="font-Inter mt-3">Welcome to our website</p>
          <form action="" onSubmit={handelSubmit}
          
          >
            <label htmlFor="" className="text-blue-400">
              Ask us anything..
            </label>
            <input
              type="text"
              placeholder="send your message ..."
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              className="w-full text-black p-2 rounded-sm mt-2"
            />
          </form>
        </motion.div>
      </div>
    </div>
  );
};
