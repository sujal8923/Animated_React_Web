import React from "react"
import Navi from "./Component/Navi";
import Hero from "./Component/Hero";
import './index.css'
import WrapperContainer from "./Component/WrapperContainer";
import MidFilterSection from "./Component/MidFilterSection";
import MidComponentParent from "./Component/MidComponentParent";
import {Contact} from "./Component/Contact";
import {Footer} from "./Component/Footer";
import PopUp from "./Component/PopUp";

function App() {
  return (
    <>
    <div className="relative">
      <div className="fixed right-4 bottom-1 z-[999]">
        <PopUp/>
      </div>
    </div>

      {/* <WrapperContainer navhead > */}
      <Navi/>
      <Hero style={{ zIndex: 900 }}/>
    
    
    <div className="bg-gray-100 w-full">

      <WrapperContainer style={{ zIndex: -999 }}>
        <MidFilterSection/>
        <MidComponentParent/>
      </WrapperContainer>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
