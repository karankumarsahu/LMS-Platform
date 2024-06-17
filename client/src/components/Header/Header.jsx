import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoMdMenu } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { FaCompass } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-full h-auto px-10 py-5 border-b-2 max-md:px-4 ">
        <div className="w-full h-full flex items-center justify-between">
          <h1 className="font-poppins text-2xl font-bold text-[rgb(3,105,161)] hidden max-lg:block">
            Logoipsum
          </h1>
          <div className="flex items-center w-96 h-12 bg-[#F1F5F9] rounded-3xl pl-8 gap-2 relative max-md:hidden">
            <input
              type="text"
              className="bg-transparent outline-none flex-grow pl-5"
              placeholder="Search"
            />
            <IoSearch className="absolute left-6" />
          </div>

        {/* Hamburger */}
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <IoMdMenu className="w-6 h-6 hidden max-lg:block" />
            </DrawerTrigger>
            <DrawerContent className="w-3/5 h-full">
              <div className="flex flex-col gap-4 cursor-pointer">
                <Link to={"/"}>
                  <div
                    className={`w-full h-14 flex items-center gap-3 px-6 ${
                      pathname === "/"
                        ? "bg-[#F2FBFF] border-r-4 border-[#11688F]"
                        : ""
                    }`}
                  >
                    <FaCompass
                      className={`w-5 h-5 ${
                        pathname === "/" ? "fill-[#11688F]" : ""
                      }`}
                    />
                    <h1 className="font-poppins font-medium">Browse</h1>
                  </div>
                </Link>

                <Link to={"/dashboard"}>
                  <div
                    className={`w-full h-14 flex items-center gap-3 px-6 ${
                      pathname === "/dashboard"
                        ? "bg-[#F2FBFF] border-r-4 border-[#11688F]"
                        : ""
                    }`}
                  >
                    <MdDashboard
                      className={`w-5 h-5 ${
                        pathname === "/dashboard" ? "fill-[#11688F]" : ""
                      }`}
                    />
                    <h1 className="font-poppins font-medium">
                      Dashboard
                    </h1>
                  </div>
                </Link>

                {isAuthenticated ? (
                   <Link to={"/profile"}>
                   <div
                     className={`w-full h-14 flex items-center gap-3 px-6 ${
                       pathname === "/dashboard"
                         ? "bg-[#F2FBFF] border-r-4 border-[#11688F]"
                         : ""
                     }`}
                   >
                     <FaRegUser
                       className={`w-5 h-5 ${
                         pathname === "/profile" ? "fill-[#11688F]" : ""
                       }`}
                     />
                     <h1 className="font-poppins font-medium ">
                       Profile
                     </h1>
                   </div>
                 </Link>
                ) : ""}
              </div>

              <DrawerFooter>
               {isAuthenticated ? (
                <div className="flex items-center gap-4">
                <Avatar>
                     <AvatarImage
                       src="https://github.com/shadcn.png"
                       alt="@shadcn"
                     />
                     <AvatarFallback>CN</AvatarFallback>
                   </Avatar>
                     <div>
                       <p className="font-poppins">Hii, Karan Kumar Sahu</p>
                       <p className="font-poppins text-sm text-[rgb(3,105,161)] font-semibold">Logout</p>
                     </div>
                     
                </div>
               ) : (
                <Button className="bg-[#11688F] px-6">Login</Button>
               )}
               
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* Login and Profile Button */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4 max-lg:hidden">
              <p className="font-poppins max-lg:hidden">Hi, Karan Kumar Sahu</p>
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-36 -ml-20 shadow-xl">
                  <ul className="flex flex-col gap-2">
                    <li className="font-poppins cursor-pointer hover:bg-[#F1F5F9]">
                      <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li className="font-poppins cursor-pointer hover:bg-[#F1F5F9]">
                      Log Out
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button className="bg-[#11688F] px-6 max-lg:hidden">Login</Button>
          )}
        </div>

          {/* Mobile SearchBar */}
        <div className="w-full items-center h-12 bg-[#F1F5F9] rounded-3xl pl-8 gap-2 relative hidden max-md:flex mt-4">
            <input
              type="text"
              className="bg-transparent outline-none flex-grow pl-5"
              placeholder="Search"
            />
            <IoSearch className="absolute left-6" />
          </div>
        
      </div>
    </>
  );
};

export default Header;
