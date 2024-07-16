// Midbtn.js
import React from 'react';

function Midbtn({ buttons, filter, selected }) {
  return (
    <div className='flex  lg:ms-3 flex-wrap gap-4'>
      {buttons.map((button) => (
        <button
          key={button.id}
          className='pushable mt-6'
          onClick={()=> filter(button?.id)}
        >
          <span className={selected === button.id ? "front2" : "front"}>{button.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Midbtn;
