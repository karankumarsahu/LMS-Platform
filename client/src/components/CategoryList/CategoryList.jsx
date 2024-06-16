import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categoriesList = [
    {
      name: "Web Development",
      link: "/category/web_development",
    },

    {
      name: "JavaScript",
      link: "/category/javascript",
    },

    {
      name: "React Js",
      link: "/category/react_js",
    },

    {
        name: "Angular",
        link: "/category/angular",
      },

      {
        name: "Android Development",
        link: "/category/android_development",
      },

      {
        name: "React Js",
        link: "/category/ios_development",
      },

      {
        name: "Css",
        link: "/category/css",
      },

      {
        name: "Python",
        link: "/category/python",
      },

      {
        name: "Data Science",
        link: "/category/data_science",
      },

      {
        name: "Artificial Intelligence",
        link: "/category/artificial_intelligence",
      },
      
      {
        name: "Chat GPT",
        link: "/category/chatgpt",
      },
      
  ];

  return (
    <>
      <div className="w-full h-20 overflow-y-auto no-scrollbar">
        <div className="w-full h-full flex items-center gap-8 px-4">
            {categoriesList.map((category, index) => (
                    <Link key={index} to={category.link}>
                    <Button variant="outline" className="rounded-3xl border-2" >{category.name}</Button>
                    </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
