import React from "react";
export function Contact() {
  return (
    <div className="bg-black h-52 w-full translate-y-[-50px]  rounded-md md:w-[80%] mx-auto text-white flex flex-wrap p-4" id="/">
      <div className="w-full flex flex-col justify-center align-items-center lg:w-1/2 mb-4 lg:mb-0 ">
        <h1 className="text-2xl text-center lg:text-3xl font-bold mb-2">Sign up for our newsletter</h1>
        <p className="text-sm text-center font-thin lg:text-base">Join our newsletter and get news in your inbox every week!</p>
      </div>
      <div className="w-full flex flex-wrap justify-evenly items-center   lg:w-1/2  ">
      <div>
        <input type="email" name="" placeholder="enter your email" id="" className=" text-black   p-2 rounded-md" />
      </div>
      <div>
      <button className="bg-blue-600 p-2 px-4  rounded-md ">Submit</button>
      </div>
      </div>
    </div>
  );
}
