import React from 'react';
import ItemsMid from './ItemsMid';
import  MidPhone1 from '../assets/assets/images/MidComponentPhone.png';
import ItemMiddle_2 from './ItemMiddle_2';
import ItemMiddle_3 from './ItemMiddle_3';
// import FurnitureImg from './FurnImg';
import FurnImg from './FurnImg';
import DemoSection from './DemoSection';
function MidComponentParent() {
  return (
    <div>
    <div>
        <ItemsMid title ={"Dive in to the Future"} text={"in a world people constantly have phone in their hands the need for online oppurtunities is growing . We have a solution - fullly digital access to al information and services related to the interios and design itself Everything for a carefree stay in the  palm of a hand "} img={MidPhone1} btn = {"Start now"}/>
        <ItemMiddle_2/>
        <ItemMiddle_3/>
        <FurnImg/>
        <DemoSection/>
        
        
    </div>
    </div>
  );
}

export default MidComponentParent;
