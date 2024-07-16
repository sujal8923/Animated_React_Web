// MidChild.js
import React from 'react';
import { motion } from 'framer-motion';

function MidChild({ data, click }) {
  return (
    <div>      
      {data.map((item, index) => (
        <motion.div  
          key={item?.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            y: click === true ? 20 : 0,
            x: click === true ? 0 : 0,
            opacity: 1,
          }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', duration: 1.5 }}
          className='   p-19    lg:w-[500px] flex flex-col lg:justify-center align-items-center gap-2'
        >
          <div>
            <h1 className='text-5xl font-bold font-Inter ' style={{letterSpacing:"4px"}}>{item.title}</h1>
          </div>
          <div className='flex justify-between items-center w-full'>
            <div className=''> 
              <p className='font-Inter   mt-4' style={{fontSize : "21px"}}>{item.text}</p>
            </div>
            <div className='absolute  -z-10'>
              <motion.img 
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: click === true ? '500px' : '500px',
                  opacity:1,
                }}
                transition={{ type: "tween", duration: 2 }}
                src={item?.img}
                className='h-96'
                alt=''
                >
              </motion.img>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default MidChild;
