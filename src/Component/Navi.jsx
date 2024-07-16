import React, { useEffect, useState } from 'react';
import { navbarData } from '../assets/DataForPage/dummyData';
import logo from '../assets/assets/images/logo.svg';
import logo1 from '../assets/assets/images/light.svg';

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-scroll';
import { data } from 'autoprefixer';
import theme from '@material-tailwind/react/theme';
import { useAuth } from './Context';

function Navi() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const {theme,setTheme} = useAuth()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navbarData.map((item) => (
        <li key={item.id}>
          <Link
            to={item.link}
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            offset={50}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            className={`${theme?.isClick ? "cursor-pointer text-white  hover: hover:text-blue-500" : "cursor-pointer text-black  hover: hover:text-blue-500"}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-h-screen overflow-hidden">
      <Navbar
        className={`fixed top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 
             ${
          scrolling ? 'h-20  w-full transition duration-500 ease-in-out bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20' : ' h-20 shadow-none bg-transparent'
        } ` }
      >
        <div className="flex items-center justify-between md:justify-around text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="Logo" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="lg:hidden bg-gray-200 w-full  text-center text-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)',color:"black" }}>
  {navList}
</MobileNav>

      </Navbar>
    
    </div>
  );
}

export default Navi;
