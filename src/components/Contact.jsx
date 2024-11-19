import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import logo from "./../assets/logo.png";
import InputC from "./InputC";
import TextArea from "./TextArea";
import contact from "./../assets/contact.jpg";

const Title = styled.h1`
  ${tw`text-3xl z-10 font-bold text-transparent bg-clip-text relative bg-gradient-to-r from-white via-DiSerria to-DiSerria py-6 lg:text-4xl md:text-nowrap w-80 md:w-full`}
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="flex flex-col md:flex-row md:gap-5 py-10" id="contact">
      <div className="rounded-tr-[150px] bg-black p-5 md:w-2/5">
        <div className="flex gap-1 font-bold">
          <img src={logo} alt="Logo" className="size-10" />
          <div>
            <p className="leading-tight text-DiSerria">Knowledge</p>
            <p className="leading-tight text-PuertoRico">Sync</p>
          </div>
        </div>
        <div>
          <Title>Get in Touch</Title>
          <p className="text-white w-full text-balance">
            You can reach us anytime via support@knowledgesync.com
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-5 py-5">
            <InputC
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />
            <InputC
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
            <TextArea
              label="Message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />
            
            <button
              type="submit"
              className="mt-4 rounded-lg bg-gradient-to-br from-DiSerria to-white text-black px-4 py-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="relative overflow-hidden w-full md:w-3/5">
        <img src={contact} alt="contact page" className="w-full h-96 md:h-full rounded-bl-[100px] object-cover" />
        <div className="absolute bottom-0 backdrop-blur-lg filter px-5 rounded-bl-[150px]">
          <p className="text-white text-center py-5 right-0">
            We are here to help you with any queries you may have. We will get
            back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
