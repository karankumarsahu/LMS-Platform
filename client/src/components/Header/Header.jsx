import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <div className="w-full h-20 px-10 border-b-2">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center w-96 h-12 bg-[#F1F5F9] rounded-3xl pl-8 gap-2 relative">
            <input
              type="text"
              className="bg-transparent outline-none flex-grow pl-5"
              placeholder="Search"
            />
            <IoSearch className="absolute left-6" />
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <p className="font-poppins ">Hi, Karan Kumar Sahu</p>
            <Popover>
            <PopoverTrigger >
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
                  <li className="font-poppins cursor-pointer hover:bg-[#F1F5F9]">Profile</li>
                  <li className="font-poppins cursor-pointer hover:bg-[#F1F5F9]">Log Out</li>
                </ul>
              </PopoverContent>
            </Popover>
              
            </div>
          ) : (
            <Button className="bg-[#11688F] px-6">Login</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
