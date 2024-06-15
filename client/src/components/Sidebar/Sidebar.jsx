import React from 'react'
import { FaCompass } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const {pathname} = useLocation()
  
  
  return (
    <>
     <div className='w-full h-screen border-r-2'>
      <div className='w-full h-full  flex flex-col gap-8'>
        <h1 className='font-poppins text-3xl font-bold text-[rgb(3,105,161)] py-4 px-8'>Logoipsum</h1>

        <div className='flex flex-col gap-4 cursor-pointer'>
          <Link to={"/"}>
          <div className={`w-full h-14 flex items-center gap-3 px-8 ${pathname === "/" ? "bg-[#F2FBFF] border-r-4 border-[#11688F]" : ""}`}>
            <FaCompass className={`w-7 h-7 ${pathname === "/" ? "fill-[#11688F]" : ""}`}/>
            <h1 className='font-poppins font-medium text-lg'>Browse</h1>
          </div>
          </Link>

          <Link to={"/dashboard"}>
          <div className={`w-full h-14 flex items-center gap-3 px-8 ${pathname === "/dashboard" ? 'bg-[#F2FBFF] border-r-4 border-[#11688F]' : ""}`}>
            <MdDashboard className={`w-7 h-7 ${pathname === "/dashboard" ? "fill-[#11688F]" : ""}`}/>
            <h1 className='font-poppins font-medium text-lg'>Dashboard</h1>
          </div>
          </Link>

        </div>
      </div>
      </div> 
    </>
  )
}

export default Sidebar