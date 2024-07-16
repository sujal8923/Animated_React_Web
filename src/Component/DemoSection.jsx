import React from "react";
import btn from "../assets/assets/images/apple-store.svg";
import btn1 from "../assets/assets/images/google-play.svg";
import { cardData } from "../assets/DataForPage/dummyData";
import star from "../assets/assets/images/star.svg";
import starWhite from "../assets/assets/images/starWhite.svg";
import { motion } from "framer-motion";
import { useAuth } from "./Context";

function DemoSection() {
  const {theme,setTheme} = useAuth()
  return (
    <div className={`${theme?.isClick ? "text-white" : "text-black"}`} id="demo">
      <h1 className="   text-4xl md:text-7xl text-center">Request a Demo</h1>
      <h2 className="text-2xl mt-7 text-center font-Inter">
        Explore all the nice stuff that AxeL is providing and much more...
      </h2>
      <div className="flex justify-center gap-6 ms-[25%] mt-12 lg:ms-0 w-1/2 lg:w-full">
        <img src={btn} className="w-36" alt="" />
        <img src={btn1} className="w-36" alt="" />
      </div>

      {/* cards   */}
      <div className="flex flex-wrap justify-center gap-10 shadow-lg pb-36 ">
        {cardData.map((card) => {
          return (
            <motion.div
              key={card?.id}
              initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
              class={`relative flex flex-wrap mt-6 text-gray-700 ${
                card?.id == "1" ? "bg-black text-white " : "bg-white text-black"
              } shadow-md bg-clip-border rounded-xl w-80`}
            >
              <div class="p-6 flex flex-wrap">
                <h5
                  class={`block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal ${
                    card.id == "1" ? "text-white" : "text-gray-300"
                  }`}
                >
                  {card?.title}
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {card?.text}
                </p>
                <hr />
                <p className="ms-24">See more</p>
              </div>
              <div class="p-6 pt-0">
                <a href="#" class="inline-block">
                  <button
                    class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg ms-8 "
                    type="button"
                  >
                    {  card.id === "1" ? (
                      <div className="flex justify-evenly mx-auto gap-3">
                        <img src={starWhite} className={`mx-auto`} alt="" />
                        <img src={starWhite} className={`mx-auto`} alt="" />
                        <img src={starWhite} className={`mx-auto`} alt="" />
                        <img src={starWhite} className={`mx-auto`} alt="" />
                        <img src={starWhite} className={`mx-auto`} alt="" />
                      </div>
                    ) : (
                      <div className="flex justify-evenly mx-auto gap-3">
                        <img src={star} className={`mx-auto`} alt="" />
                        <img src={star} className={`mx-auto`} alt="" />
                        <img src={star} className={`mx-auto`} alt="" />
                        <img src={star} className={`mx-auto`} alt="" />
                        <img src={star} className={`mx-auto`} alt="" />
                      </div>
                    )}
                  </button>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default DemoSection;
