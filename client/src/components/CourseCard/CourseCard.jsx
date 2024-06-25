import React, { useState } from "react";
import { IoMdBook } from "react-icons/io";
import { Link } from "react-router-dom";

const CourseCard = ({Title, Category, Progress, Chapters, isEnrolled, Price, Thumbnail}) => {
  
  return (
    <>
      <div className="w-full h-full border shadow-sm pb-4 rounded-xl overflow-hidden cursor-pointer">
        <Link to={"/course_details"}>
        <div className="w-full flex flex-col justify-center">
          <img src={Thumbnail} alt={Title} />
          
          <div className="pl-2">
          <h1 className="font-poppins font-semibold mt-4">{Title}</h1>
          <p className="font-poppins text-sm text-ellipsis overflow-hidden text-nowrap">{Category}</p>

          <div className="w-36 py-1 mt-4 flex items-center gap-3">
            <IoMdBook className="fill-[rgb(3,105,161)]" />
            <p className="font-poppins text-sm">{Chapters} Chapters</p>
          </div>

          {isEnrolled ? (
            <>
            <div className="w-full h-2 overflow-hidden mt-4">
            <div className={` h-full rounded-lg ${Progress == "100" ? "bg-[#057857]" : "bg-[#0585C9]"}`} style={{ width: `${Progress}%` }}></div>
            </div>
            <p className={`font-poppins text-sm mt-2 font-semibold ${Progress == "100" ? "text-[#057857]" : "text-[#0585C9]"}`}> {Progress}% Completed</p>
            </>
          ) : (
            <p className="font-poppins font-semibold mt-4 text-sm">₹ {Price}</p>
          )}
          </div>
          
        </div>
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
