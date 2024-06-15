import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <div className="w-full h-24 px-10 border-b-2">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center w-96 h-14 bg-[#F1F5F9] rounded-3xl pl-8 gap-2 relative">
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
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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
