import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../assets/DataForPage/dummyData";
import { useAuth } from "./Context";

function ItemMiddle_3() {
  const {theme,setTheme} = useAuth()
  return (
    <div id="features" className= {`${theme?.isClick ? "text-white":" text-black"}`}>
      <Tabs
       id="custom-animation"
        value="bedroom"
        className="flex flex-wrap-reverse mt-20 "
      >
        <div className="w-full p-0   lg:w-1/2  md:p-16 flex flex-col gap-3">
        <h1 className="text-5xl mt-6">Features</h1>
        <p className="font-black font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, fugiat. Veritatis quidem quod debitis harum voluptates excepturi ducimus reiciendis veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, non.</p>
      <TabsHeader>
        {tabsData.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {tabsData.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className= {`${theme?.isClick ? "text-white":" text-black"}`}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    

        </div>
        <div className="w-full lg:w-1/2">
  
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {tabsData.map(({ value, img }) => (
          <TabPanel key={value} value={value}>
            <img src={img} className="h-[578px] mx-auto" alt="" />
          </TabPanel>
        ))}
      </TabsBody>
    
        </div>
        </Tabs>
    </div>
  );
}

export default ItemMiddle_3;
