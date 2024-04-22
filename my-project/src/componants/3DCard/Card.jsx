// import React from "react";
// import { useSpring, animated } from "react-spring";

// const Card = () => {
//   const [hovered, setHovered] = React.useState(false);
//   const [props, set] = useSpring(() => ({
//     xys: [0, 0, 1],
//     config: { mass: 5, tension: 1000, friction: 60 },
//   }));

//   return (
//     <animated.div
//       className="max-w-sm rounded overflow-hidden shadow-lg w-[300px] h-[400px] bg-red-500"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onMouseMove={({ clientX, clientY }) =>
//         set({ xys: calc(clientX, clientY, hovered) })
//       }
//       style={{
//         transform: props.xys.interpolate(
//           (x, y, s) =>
//             `perspective(600px) rotateX(${y}deg) rotateY(${-x}deg) scale(${s})`
//         ),
//       }}
//     ></animated.div>
//   );
// };

// export default Card;

// // Helper function to calculate rotation based on mouse position
// const calc = (x, y, hovered) => [
//   (y - window.innerHeight / 2) / (hovered ? 20 : 40),
//   (x - window.innerWidth / 2) / (hovered ? -20 : -40),
//   hovered ? 1.05 : 1,
// ];

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        cardRef.current.getBoundingClientRect();
      const rotateX = -(clientY - top - height / 2) / 20;
      const rotateY = (clientX - left - width / 2) / 20;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
        className="bg-white shadow-md w-[500px] h-[600px] flex  "
        ref={cardRef}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-[500px] h-[50px] bg-gray-800 pointer-events-none group top-[-25px]"></div>
      </motion.div>
    </div>
  );
};

export default Card;
