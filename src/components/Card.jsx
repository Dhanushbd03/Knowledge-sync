import React from "react";

const Card = ({ data ,image }) => {  
  return (
      <a href="#">
        <div className="flex flex-col w-60 p-4 bg-Lynch rounded-3xl h-full hover:opacity-95 hover:shadow-lg hover:scale-105 transition-all">
        <img src={image} alt="" className="h-40 object-cover rounded-3xl"/>
          <div className="flex flex-col justify-between p-4 leading-normal gap-2">
          <p className="text-xs font-semibold bg-DiSerria py-1 px-2 rounded-full w-full text-center mr-auto text-nowrap text-ellipsis overflow-hidden">
              {data.course_organization}
            </p>
            <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 leading-tight">
              {data.course_title}
            </h5>
            <p className="text-sm text-gray-300 leading-none text-nowrap tracking-tighter">Course Rating : {data.course_rating}</p>
            <p className="text-sm text-gray-300 leading-none text-nowrap tracking-tighter">Course Difficulty : {data.course_difficulty}</p>
            
          </div>
        </div>
      </a>
  );
};

export default Card;
