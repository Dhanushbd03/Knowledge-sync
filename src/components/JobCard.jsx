import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({role,description,place,type}) => {
  return (
    <div className="text-white border-b-2 border-PuertoRico py-5">
      <div className="flex justify-between text-3xl">
        <h1>{role}</h1>
        <Link to="#">
            <button className="flex items-center group" >
              <span className="group-hover:underline">Apply</span>
              <span>
                <MdArrowOutward />
              </span>
            </button>
        </Link>
      </div>
      <p className="py-5">{description}</p>
      <div className="flex w-fit gap-4">
        <p className="inline-flex items-center gap-1 rounded-full border border-PuertoRico px-3 text-sm py-1">
          <FaLocationDot />
          {place}
        </p>
        <p className="inline-flex items-center gap-1 rounded-full border border-PuertoRico px-3 text-sm py-1">
          <FaClock />
          {type}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
