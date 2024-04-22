import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const itemData = [
  {
    url: "/img/360_F_631568167_Ls19KbVuOE4x0Bd225uZdOLSheOpGmHc-removebg-preview.png",
    description: "The Greenhouse",
    price: "399",
  },
  {
    url: "/img/download-removebg-preview.png",
    description: "The Coach Breakfast",
    price: "399",
  },
  {
    url: "/img/Screenshot_2024-04-16_at_15.20.47-removebg-preview.png",
    description: "Classic French Toast Combo",
    price: "399",
  },
  {
    url: "/img/Screenshot_2024-04-16_at_15.24.00-removebg-preview.png",
    description: "The V-King",
    price: "399",
  },
  {
    url: "/img/Noodles-with-chilli-oil-eggs-6ec34e9-removebg-preview.png",
    description: "The Sprinter",
    price: "399",
  },
  {
    url: "/img/Margherita-pizza-2-removebg-preview.png",
    description: "Smoked Sausages with Hashbrown",
    price: "399",
  },
];

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="w-full  flex justify-center h-[300px] item-center">
      <div className="bg-[#f0fdf4] w-full max-w-[1400px] overflow-hidden h-full flex flex-col justify-evenly items-center rounded-xl">
        <h1 className="w-full flex justify-center text-center text-5xl text-bold text-[#22c55e]">
          EXPLORE MORE
        </h1>
        <div className="h-[100px] w-full hidden md:block">
          <Slider {...settings}>
            {itemData.map((d) => {
              return (
                <div
                  key={d.description}
                  className="bg-green-400/0 w-[100px] h-[100px] "
                >
                  <div className="w-[100px] h-[100px] rounded-full bg-red-300/0 ">
                    <Link>
                      <img className="w-full h-full" src={d.url} alt="" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="h-[100px] w-full md:hidden block">
          <Slider {...settings2}>
            {itemData.map((d) => {
              return (
                <div
                  key={d.description}
                  className="bg-green-400/0 w-[100px] h-[100px] "
                >
                  <div className="w-[100px] h-[100px] rounded-full bg-red-300/0 ">
                    <Link>
                      <img className="w-full h-full" src={d.url} alt="" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AutoPlay;
