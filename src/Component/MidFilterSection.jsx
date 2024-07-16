// MidFilterSection.js
import React, { useEffect, useState } from "react";
import { sliderData } from "../assets/DataForPage/dummyData";
import Midbtn from "./Midbtn";
import MidChild from "./MidChild";
import { motion } from "framer-motion";
import { useAuth } from "./Context";
function MidFilterSection() {
  const {theme,setTheme} = useAuth()
  let [selected, setSelected] = useState(1);
  let [click, setClick] = useState(false);
  console.log(click);
  let [data, setData] = useState([]);

  let buttons = [
    { id: "1", name: "Room1" },
    { id: "2", name: "Room2" },
    { id: "3", name: "Room3" },
  ];

  let filterData = (buttonId) => {
    console.log(buttonId);
    let filter = sliderData.filter((item) => item.id === buttonId);
    setData(filter);
    setSelected(buttonId);
    setClick(true);
  };
  useEffect(() => {
    const putData = (data) => {
      setData(data.filter((item) => item.id == "1"));
    };
    putData(sliderData);
  }, []);
  return (
    <div>
      <div className="pt-48 pb-20 mx-auto" id="news">
        <div className={`flex  flex-wrap-reverse  items-center  justify-center gap-36 md:ms-16 lg:gap-0  ${theme?.isClick ? "text-white" : "text-black"}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="w-full p-0 lg:p-6 lg:w-1/2"
          >
            <h1 className="  text-5xl lg:text-6xl w-full  sm:w-96 ms-0 lg:ms-10 font-Inter align-middle">
              Check out some of the news
            </h1>
            <Midbtn buttons={buttons} filter={filterData} selected={selected} />
          </motion.div>
          <div className="w-full mx-auto lg:w-1/2">
            <MidChild data={data} click={click} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidFilterSection;
