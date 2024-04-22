import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiHeart } from "react-icons/pi";
import { motion } from "framer-motion";

const data = [
  {
    id: 0,
    name: "Pepperoni Pizza",
    description:
      "Timeless favorite: savory pepperoni, rich tomato sauce, melted mozzarella on crispy-edged dough.",
    prise: 599,
    ret: "5.0",
    url: "/img/pexels-photo-803290-removebg-preview.png",
  },
  {
    id: 1,
    name: "Hawaiian Pizza",
    description:
      "Tropical escape: pineapple, ham, mozzarella on golden crust, a sweet-savory delight.",
    prise: 599,
    ret: "5.0",
    url: "/img/pexels-andy-kuzma-2909821-removebg-preview.png",
  },
  {
    id: 2,
    name: "Vegetarian Pizza",
    description:
      "Garden-fresh delight: bell peppers, mushrooms, olives, onions on marinara sauce and mozzarella.",
    prise: 599,
    ret: "5.0",
    url: "/img/pexels-pixabay-208537-removebg-preview.png",
  },
  {
    id: 3,
    name: "Supreme Pizza",
    description:
      "Flavorful symphony: Italian sausage, bacon, pepperoni, bell peppers, onions on hand-stretched dough.",
    prise: 599,
    ret: "5.0",
    url: "/img/item-200000008308892616_1669843539-removebg-preview.png",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    description:
      "Smoky delight: grilled chicken, caramelized onions, tangy barbecue sauce, mozzarella on golden crust.",
    prise: 599,
    ret: "5.0",
    url: "/img/pexels-andy-kuzma-2918521-removebg-preview.png",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    description:
      "Classic simplicity: fresh tomatoes, creamy mozzarella, fragrant basil on our signature sauce and dough.",
    prise: 599,
    ret: "5.0",
    url: "/img/20220211142754-margherita-9920-removebg-preview.png",
  },
];

function Products() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="w-full mb-14">
        <div className="w-3/4  m-auto  rounded-xl hidden lg:block 2xl:hidden">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map((d) => {
                return (
                  <div key={d.id} className=" min-w-[310px] max-w-[480px]">
                    <div className="w-full  bg-[#f0fdf4] border rounded-lg shadow  relative">
                      <Link href="#" className="flex justify-center">
                        <img
                          className="p-8 rounded-t-lg h-[312px]"
                          src={d.url}
                          alt="product image"
                        />
                      </Link>

                      <div className="absolute top-2 right-3 text-bold z-20 ">
                        <PiHeart className="text-3xl text-red-400" />
                      </div>
                      <div className="absolute top-2 left-2 text-bold text-3xl text-[#22c55e]">{`₹${d.prise}`}</div>

                      <div className="px-5 pb-5 lg:h-[224px] flex flex-col justify-end gap-1">
                        <Link href="/">
                          <h2 className="text-xl font-bold text-[#22c55e]">
                            {d.name}
                          </h2>
                        </Link>
                        <Link href="#">
                          <h5 className="text-xl  tracking-tight text-[#4ade80] ">
                            {d.description}
                          </h5>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                          <span className=" bg-[#ccfbc1] text-[#4ade80] text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                            {d.ret}
                          </span>
                        </div>
                        <div className="flex items-end justify-between ">
                          <Link href="#">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1 }}
                              className="text-[#4ade80] bg-gray-300/0 hover:bg-[#4ade80] hover:text-white border-[1px] border-[#4ade80] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                              View product
                            </motion.div>
                          </Link>
                          <Link href="#">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1 }}
                              className="text-white bg-[#4ade80] hover:bg-[#38bb68] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                              Add to cart
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-3/4  m-auto  rounded-xl lg:hidden block ">
          <div className="mt-20 ">
            <Slider {...settings2}>
              {data.map((d) => {
                return (
                  <div key={d.id} className="min-w-[280px] relative">
                    <div className="w-full  bg-[#f0fdf4] border rounded-lg shadow   h-[600px] flex flex-col justify-evenly">
                      <Link href="#" className="flex justify-center">
                        <img
                          className="p-8 rounded-t-lg max-h-[400px] min-h-[300px]"
                          src={d.url}
                          alt="product image"
                        />
                      </Link>

                      <div className="absolute top-2 right-3 text-bold z-20 ">
                        <PiHeart className="text-3xl text-red-400" />
                      </div>
                      <div className="absolute top-2 left-2 text-bold text-3xl text-[#22c55e]">{`₹${d.prise}`}</div>

                      <div className="px-5 pb-5 lg:h-[224px] flex flex-col justify-end gap-1">
                        <Link href="/">
                          <h2 className="text-xl font-bold text-[#22c55e]">
                            {d.name}
                          </h2>
                        </Link>
                        <Link href="#">
                          <h5 className="text-xl  tracking-tight text-[#4ade80] ">
                            {d.description}
                          </h5>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                          <span className=" bg-[#ccfbc1] text-[#4ade80] text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                            {d.ret}
                          </span>
                        </div>
                        <div className="flex items-end justify-between ">
                          <Link href="#">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1 }}
                              className="text-[#4ade80] bg-gray-300/0 hover:bg-[#4ade80] hover:text-white border-[1px] border-[#4ade80] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                              View product
                            </motion.div>
                          </Link>
                          <Link href="#">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1 }}
                              className="text-white bg-[#4ade80] hover:bg-[#38bb68] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                              Add to cart
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-3/4  m-auto  rounded-xl hidden  2xl:block">
          <div className="mt-20 ">
            <Slider {...settings3}>
              {data.map((d) => {
                return (
                  <div key={d.id} className=" min-w-[310px] max-w-[480px]">
                    <div className="w-full  bg-[#f0fdf4] border rounded-lg shadow  relative">
                      <Link href="#" className="flex justify-center">
                        <img
                          className="p-8 rounded-t-lg h-[312px]"
                          src={d.url}
                          alt="product image"
                        />
                      </Link>

                      <div className="absolute top-2 right-3 text-bold z-20 ">
                        <PiHeart className="text-3xl text-red-400" />
                      </div>
                      <div className="absolute top-2 left-2 text-bold text-3xl text-[#22c55e]">{`₹${d.prise}`}</div>

                      <div className="px-5 pb-5 lg:h-[224px] flex flex-col justify-end gap-1">
                        <Link href="/">
                          <h2 className="text-xl font-bold text-[#22c55e]">
                            {d.name}
                          </h2>
                        </Link>
                        <Link href="#">
                          <h5 className="text-xl  tracking-tight text-[#4ade80] ">
                            {d.description}
                          </h5>
                        </Link>
                        <div className="flex items-center mt-2.5 mb-5">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#fef08a]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                          <span className=" bg-[#ccfbc1] text-[#4ade80] text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                            {d.ret}
                          </span>
                        </div>
                        <div className="flex items-end justify-between ">
                          <Link href="#">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1 }}
                              className="text-[#4ade80] bg-gray-300/0 hover:bg-[#4ade80] hover:text-white border-[1px] border-[#4ade80] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                              View product
                            </motion.div>
                          </Link>
                          <Link href="#">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 1 }}
                              className="text-white bg-[#4ade80] hover:bg-[#38bb68] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                              Add to cart
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
