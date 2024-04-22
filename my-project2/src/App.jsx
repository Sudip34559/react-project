import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleHover = (e) => {
    e.target.style.transform = "translateZ(40px)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "translateZ(0)";
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        cardRef.current.getBoundingClientRect();
      const edgeThreshold = 100; // Adjust this value as needed
      const isNearEdge =
        clientX < left + edgeThreshold ||
        clientX > left + width - edgeThreshold ||
        clientY < top + edgeThreshold ||
        clientY > top + height - edgeThreshold;

      if (isNearEdge) {
        cardRef.current.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      } else {
        const rotateX = -(clientY - top - height / 2) / 20;
        const rotateY = (clientX - left - width / 2) / 20;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const handleMouseLeave = () => {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    cardRef.current.addEventListener("mousemove", handleMouseMove);
    cardRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
      cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <motion.div
        className="bg-white shadow-md w-[500px] h-[600px] flex flex-col gap-4"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        ref={cardRef}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{
          perspective: "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="w-[500px] h-[200px] bg-gray-800   hover:shadow-xl  flex justify-between"
          style={{
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full w-[70px] bg-white pointer-events-none"></div>
          <div className="h-full w-[70px] bg-white pointer-events-none"></div>
        </motion.div>
        <motion.div
          className="w-[500px] h-[200px] bg-gray-800   hover:shadow-xl  flex justify-between"
          style={{
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full w-[70px] bg-white pointer-events-none"></div>
          <div className="h-full w-[70px] bg-white pointer-events-none"></div>
        </motion.div>
        <motion.div
          className="w-[500px] h-[200px] bg-gray-800   hover:shadow-xl  flex justify-between"
          style={{
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full w-[70px] bg-white pointer-events-none"></div>
          <div className="h-full w-[70px] bg-white pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
