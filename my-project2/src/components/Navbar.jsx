import { Link, NavLink } from "react-router-dom";

import React, { useState } from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

const HoveredLink = ({ children }) => {
  return (
    <Link className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
      {children}
    </Link>
  );
};

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0  w-full  h-[60px] rounded-full mx-4  z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link to="/" className="text-black">
            sudip
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
