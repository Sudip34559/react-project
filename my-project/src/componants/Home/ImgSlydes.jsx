import React, { useEffect, useState } from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";

const Slideshow = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  const PrevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };
  const NextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setCount(Math.random() * 10);
  };

  return (
    <div className="w-full flex justify-center ">
      <div
        className="w-full  max-w-[1200px] max-h-[600px] m-auto py-6 pt-1 pb-4 relative group mt-4"
        id="45"
      >
        <div className="w-full h-full rounded-2xl bg-cover duration-500 shadow-2xl relative">
          <img
            className="w-full max-h-[600px] shadow-2x "
            src={`${slides[currentSlide].url}`}
          />
        </div>
        <div className="hidden group-hover:block   absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-[#4ade80] cursor-pointer  hover:border-[1px] border-[#4ade80] ">
          <BsFillArrowLeftCircleFill onClick={PrevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block   absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-[#4ade80] cursor-pointer hover:border-[1px] border-[#4ade80] ">
          <BsFillArrowRightCircleFill onClick={NextSlide} size={30} />
        </div>
        <div className="flex  justify-center items-center py-2 absolute bottom-16 left-0 right-0 z-30 ">
          {slides.map((slide, index) => {
            return (
              <div key={slide.url} onClick={() => goToSlide(index)}>
                <img
                  className={` ${
                    currentSlide === index
                      ? "w-[120px] z-10 shadow-2xl"
                      : "w-[100px]"
                  }`}
                  src={slide.url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Slideshow;
