import React from "react";
import img from "../assets/about.jpg";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import success from "../assets/success.png";

const About = () => {
  return (
    <div id="about" className="py-10">
      <div className="rounded-2xl bg-black p-4 shadow-lg md:flex mb-5" >
        <div className="p-6 md:w-1/2 justify-evenly flex flex-col gap-2 ">
        <h1 className="text-center text-3xl font-bold text-white">
            About Us - Knowledge Sync
          </h1>
          <img
            src={img}
            alt=""
            className="mx-auto h-80 w-full rounded-3xl object-cover md:mx-0"
          />
        </div>
        <div className="space-y-5 text-white md:w-1/2 ">
          <div className="rounded-3xl bg-Tuatara p-4 text-justify">
            <p>
              Welcome to <span className="text-PuertoRico">Knowledge Sync</span>,
              where we bridge the gap between curiosity and expertise. At
              Knowledge Sync, we believe in the transformative power of
              mentorship, collaboration, and shared learning.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-Tuatara p-4 text-justify">
            <img src={mission} alt="" className="h-16" />
            <p>
              <span className="text-DiSerria">Our mission</span> is to empower
              individuals by connecting them with the right mentors, tools, and
              resources to achieve their personal and professional goals.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-Tuatara p-4 text-justify">
            <img src={success} alt="" className="h-16" />{" "}
            <p>
              {" "}
              <span className="text-PuertoRico">Our Vision</span> We envision a
              world where knowledge and experience are accessible to everyone,
              fostering a culture of collaboration and continuous growth. At
              Knowledge Sync, we are building a global community of learners and
              mentors who uplift and inspire each other.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-Tuatara p-4 text-justify">
            <img src={vision} alt="" className="h-16" />
            <p>
              <span className="text-DiSerria">Join Us Today</span> Whether you're
              looking to learn, grow, or make an impact, Knowledge Sync is your
              partner in success. Let’s sync up and create a brighter future
              together. Sync your goals with knowledge. Sync your future with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
