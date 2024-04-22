import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoMdHome } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdCardGiftcard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";

export default function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const searchAppar = useRef();
  const searchDisAppar = useRef();
  const cross = useRef();
  function Search1() {
    searchAppar.current.classList.remove("hidden");
    searchAppar.current.classList.add("flex");
    searchDisAppar.current.classList.remove("flex");
    searchDisAppar.current.classList.add("hidden");
    cross.current.classList.remove("hidden");
    cross.current.classList.add("flex");
  }
  function closeSearch() {
    searchAppar.current.classList.remove("flex");
    searchAppar.current.classList.add("hidden");
    searchDisAppar.current.classList.remove("hidden");
    searchDisAppar.current.classList.add("flex");
    cross.current.classList.remove("flex");
    cross.current.classList.add("hidden");
  }

  return (
    <>
      <div className="w-full flex justify-center  z-50 sticky top-0 left-0 right-0 mx-2 mt-2">
        <motion.header
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-6 h-[65px] backdrop-blur-sm bg-white/[0.4] border-[2px] border-[#72c838] flex-1  hover:shadow-xl rounded-full flex justify-center items-center px-8 md:px-16 max-w-[1400px]"
        >
          <div className="flex gap-6 h-full items-center flex-1 justify-between  max-w-[1060px]">
            <div className="h-full w-[100px]  min-w-[100px] rounded-full lg:mr-8 overflow-hidden">
              <Link
                to="/"
                className=" flex justify-center items-center h-full "
              >
                <img
                  className=" h-[80px]"
                  src="/img/download-1-removebg-preview.png"
                  alt=""
                />
              </Link>
            </div>
            <div
              ref={searchAppar}
              className="bg-[#ccfbf1]  pl-3 rounded-lg overflow-hidden flex-1 hidden md:flex font-thin items-center border-[1px] border-[#4ade80]"
            >
              <Link className="text-3xl text-[#4ade80]">
                <CiSearch />
              </Link>
              <input
                type="text"
                placeholder="Search"
                className="h-full w-full py-3 px-3  bg-[#ccfbf1] caret-[#4ade80] focus:text-[#4ade80] focus:font-normal font-thin  focus:outline-none border-none  placeholder-[#4ade80]"
              />
              <Link ref={cross} className="px-3 md:hidden">
                <RxCrossCircled
                  onClick={closeSearch}
                  className="text-3xl  text-[#4ade80] font-thin flex "
                />
              </Link>
            </div>

            <div
              ref={searchDisAppar}
              className="flex px-4 gap-5 items-center h-full "
            >
              <div className="md:hidden">
                <Link className="text-3xl text-[#72c838]" onClick={Search1}>
                  <CiSearch />
                </Link>
              </div>
              <Link
                to="/login"
                className=" md:flex h-full  flex-col justify-center overflow-hidden bg-[#72c83800] py-6 font-sans  hidden"
              >
                <div className="mx-auto flex h-full  items-center justify-center">
                  <div className="relative z-20 flex w-full  bg-[#72c83800] p-2 h-[42px] px-5 items-center rounded-xl border-[1px] border-[#72c838] text-[#72c838] hover:bg-[#72c838] hover:text-[#ffffff]">
                    <div>Login</div>
                  </div>
                </div>
              </Link>
              <div className="text-3xl text-[#72c838]">
                <Link to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon className="text-[#72c838]" />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </div>
              <div className="text-3xl text-[#72c838] w-[34px] h-[34px] flex justify-center items-center hover:border-[1px] border-[#72c838] rounded-lg hover:transition hover:duration-700 relative group ">
                <BsThreeDotsVertical className="" />
                <div className="w-[200px] bg-white/[0.4] absolute top-[45px] right-[-40px] text-4xl text-[#72c838] rounded-lg hidden   group-hover:flex z-50 border-[2px] border-[#72c838]">
                  <TiArrowSortedUp className="absolute top-[-23px] right-[38px] " />

                  <ul className="w-full h-full  pl-7 py-7 flex flex-col gap-3">
                    <li className=" text-xl flex ">
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <IoMdHome className="text-2xl" />
                        Home
                      </NavLink>
                    </li>
                    <li className=" text-xl flex ">
                      <NavLink
                        to={"/orders"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <FaBoxOpen className="text-2xl" />
                        Orders
                      </NavLink>
                    </li>
                    <li className="text-white text-xl flex ">
                      <NavLink
                        to={"/wishlist"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <FaRegHeart className="text-2xl" />
                        Wishlist
                      </NavLink>
                    </li>
                    <li className="text-white text-xl flex ">
                      <NavLink
                        to={"/notifications"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <IoIosNotificationsOutline className="text-3xl" />
                        Notifications
                      </NavLink>
                    </li>
                    <li className="text-white text-xl flex ">
                      <NavLink
                        to={"/giftcards"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <MdCardGiftcard className="text-2xl" />
                        Giftcards
                      </NavLink>
                    </li>
                    <li className="text-white text-xl flex md:hidden">
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <CiLogin className="text-2xl" />
                        Login
                      </NavLink>
                    </li>
                    <li className="text-white text-xl flex ">
                      <NavLink
                        to={"/settings"}
                        className={({ isActive }) =>
                          `flex gap-2 items-center  ${
                            isActive
                              ? "text-[16px] text-[#357d3f]"
                              : "text-[14px] text-[#72c838]"
                          } hover:text-[16px] hover:text-[#357d3f]`
                        }
                      >
                        <CiSettings className="text-2xl" />
                        Settings
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </>
  );
}
