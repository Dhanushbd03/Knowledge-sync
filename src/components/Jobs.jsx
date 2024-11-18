import React from "react";
import JobCard from "./JobCard";
import data from "../assets/data/jobs.json"
const Jobs = () => {
  return (
    <div className="flex flex-col">
    {data.map((job) => (
        <JobCard {...job} />
    ))}
    </div>
  );
};

export default Jobs;
