import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import data from "./../assets/data/data.json";
import { createClient } from "pexels";
import Card from "./Card";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
const Title = styled.h1`
  ${tw`text-3xl z-10 font-bold text-transparent bg-clip-text relative bg-gradient-to-r from-white via-DiSerria to-DiSerria py-6 text-center lg:text-4xl md:text-nowrap w-80  md:w-full mx-auto`}
`;

const CardBox = styled.div`
  ${tw`flex gap-4 overflow-x-scroll p-5 `}
  &::-webkit-scrollbar {
    ${tw`h-0`}/* Adjust the height of the scrollbar */
  }
`;

const Courses = () => {
  const [images, setImages] = useState([]);
  const client = createClient(
    "wADIdebqijYiFz80CvEu7byeUxQm6AjA99x1NGwbhxuksvfohGavsaug",
  );

  // Fetch images on component mount
  useEffect(() => {
    client.photos
      .search({ query: "coding", per_page: data.length }) // Fetch as many images as courses
      .then((res) => {
        setImages(res.photos.map((photo) => photo.src.medium)); // Store medium-sized image URLs
      })
      .catch((e) => {
        console.log(e);
      });
  }, [client]);

  return (
    <div className="py-10" id="courses">
      <Title>Your Path to Knowledge: Explore Our Course Offerings</Title>
      <div className="flex items-center rounded-3xl bg-black py-4">
        <div>
          <GrFormPrevious
            className="mr-4 text-xl text-white"
            onClick={() => {
              document.querySelector(".CardBox").scrollBy({
                left: -400,
                behavior: "smooth",
              });
            }}
          />
        </div>
        <CardBox className="CardBox">
          {data.map((course, index) => (
            <Card
              key={index}
              data={course}
              image={images[index % images.length]} // Use modulo to repeat images if fewer images than courses
            />
          ))}
        </CardBox>
        <div className="ml-4 h-full">
          <MdNavigateNext
            className="text-xl text-white"
            onClick={() => {
              document.querySelector(".CardBox").scrollBy({
                left: 400,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
