import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdBook } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import {useSearchParams} from "react-router-dom"

const CourseDetails = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [isEnrolled, setisEnrolled] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams()

  const Progress = 20;

  const tags = [
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
    "react js",
    "tailwind css",
    "stripe",
  ];

  const chapters = [
    { no: 1, name: "Introduction" },
    { no: 2, name: "Chapter 1" },
    { no: 3, name: "Chapter 3" },
  ];

  const lockedChapters = [
    { no: 4, name: "Locked Chapter 4" },
    { no: 5, name: "Locked Chapter 5" },
    { no: 6, name: "Locked Chapter 6" },
  ];


  const query = searchParams.get('ch')

 

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full grid grid-cols-6 max-lg:block">
          <Sidebar />

          <div className="w-full h-screen col-span-5 overflow-y-auto">
            <Header />

            <div className="w-full h-full p-10  flex items-center">
              {/* Left Side */}
              <div className="w-3/5 h-full">
                <div className="w-full relative">
                  {isVideoPlayed ? (
                    <video controls autoPlay src="/coding video.mp4"></video>
                  ) : (
                    <div className="w-full shadow-xl overflow-hidden relative rounded-2xl">
                      <img
                        src="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                        alt="fintech"
                      />

                      {/* Overlay bg */}
                      <div className="w-full h-full bg-black opacity-35 absolute top-0 left-0"></div>

                      {/* Play Button */}
                      <div
                        onClick={() => setIsVideoPlayed(true)}
                        className="w-12 h-12 bg-[rgb(3,105,161)] absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 duration-200 ease-in-out"
                      >
                        <MdPlayArrow className="fill-white w-8 h-8 z-50 " />
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Description */}
                <div className="w-full h-auto border-2 mt-10 rounded-xl py-2 pb-10 px-8">
                  {/* Chapters */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-36 py-1 flex items-center gap-3">
                      <IoMdBook className="fill-[rgb(3,105,161)]" />
                      <p className="font-poppins text-sm">20 Chapters</p>
                    </div>
                    {isEnrolled ? (
                      ""
                    ) : (
                      <Button className=" bg-[rgb(3,105,161)]">
                        Enroll Now
                      </Button>
                    )}
                  </div>

                  <h1 className="font-poppins text-2xl font-medium mt-2">
                    Build An LMS Platform
                  </h1>
                  <p className="font-poppins mt-2 text-sm font-light">
                    In this 10 hour course you are going to learn how to create
                    your very own LMS (Learning Management System) platform. We
                    are going to use the latest tech such as Next 13 with the
                    App Router, Prisma as an ORM, Stripe for payments, and many
                    more.
                  </p>

                  {/* Tags */}
                  <div className="w-full flex items-center flex-wrap gap-4 mt-4">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className=" border-2 flex items-center justify-center text-xs px-3 py-1 rounded-2xl"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {isEnrolled ? (
                    <>
                      <div className="w-full h-2 overflow-hidden mt-8 border-2">
                        <div
                          className={` h-full rounded-lg ${
                            Progress == "100" ? "bg-[#057857]" : "bg-[#0585C9]"
                          }`}
                          style={{ width: `${Progress}%` }}
                        ></div>
                      </div>
                      <p
                        className={`font-poppins text-sm mt-2 font-semibold ${
                          Progress == "100"
                            ? "text-[#057857]"
                            : "text-[#0585C9]"
                        }`}
                      >
                        {" "}
                        {Progress}% Completed
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Right Side */}
              <div className="w-2/5  h-full pl-20 flex flex-col items-center gap-4">
                {chapters.map((chapter, index) => (
                  <div key={index} className="w-full h-auto" onClick={() => setSearchParams({ch: chapter.name.toLocaleLowerCase()} ) }>
                    <Button
                      className={`flex justify-start text-left items-center gap-4 w-full h-12 border-2  ${query === chapter.name.toLocaleLowerCase() ? 'bg-[#0369A1] hover:bg-[#0369A1]' : 'bg-transparent text-black hover:bg-[#F1F5F9]'}`}
                    >
                      <FaRegPlayCircle className={`w-5 h-5 ${query === chapter.name.toLocaleLowerCase() ? 'fill-white' : 'fill-[#0369A1]'}`}/>
                      <p className="font-poppins w-32">{chapter.name}</p> 
                    </Button>
                  </div>
                ))}

                {lockedChapters.map((chapter, index) => (
                  <div key={index} className="w-full h-auto" onClick={() => setSearchParams({ch: chapter.name.toLocaleLowerCase()})}>
                    <Button                    
                      variant="outline"
                      className={`flex justify-start text-left items-center gap-4 w-full h-12 border-2  ${query === chapter.name.toLocaleLowerCase() ? 'bg-[#0369A1] text-white hover:bg-[#0369A1] hover:text-white' : 'bg-transparent text-black hover:bg-[#F1F5F9]'}`}
                    >
                      <MdLockOutline className={`w-5 h-5 ${query === chapter.name.toLocaleLowerCase() ? 'fill-white' : 'fill-[#0369A1]'}`}/>
                      <p className="font-poppins w-32">{chapter.name}</p>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
