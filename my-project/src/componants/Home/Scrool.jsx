import React, { useEffect } from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: "0",
    name1: "Onion Properties",
    name2: "Garlic Properties",
    url1: "/img/download-2-removebg-preview.png",
    url2: "/img/download-3-removebg-preview.png",
    properties1: {
      1: "Rich in antioxidants, fighting free radicals.",
      2: "Anti-inflammatory, beneficial for conditions like arthritis.",
      3: "Contain prebiotic fibers, aiding digestive health.",
    },
    properties2: {
      1: "Nutrient-dense, low-calorie addition to meals.",
      2: "Boost the immune system with antibacterial and antiviral properties.",
      3: "Potential cancer prevention due to antioxidants.",
    },
  },
  {
    id: "1",
    name1: "Chili Properties",
    name2: "Ginger Properties",
    url1: "/img/download-5-removebg-preview.png",
    url2: "/img/images-2-removebg-preview.png",
    properties1: {
      1: "Contains capsaicin for pain relief and metabolism boost.",
      2: "Rich in antioxidants for combating inflammation.",
      3: "Aids digestion and may relieve gastrointestinal discomfort.",
    },
    properties2: {
      1: "Anti-inflammatory properties for conditions like arthritis.",
      2: "Supports digestive health and alleviates nausea.",
      3: "Provides immune support and may help control blood sugar.",
    },
  },
];

function Scrool() {
  return (
    <>
      <div className="w-full flex justify-center pt-7 pb-7">
        <div className="max-w-[1400px] w-full   flex justify-center items-center flex-col gap-4">
          {data.map((d) => {
            return (
              <div
                key={d.id}
                className="w-full flex flex-col gap-4 justify-center items-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="md:w-[60%] w-[400px] max-w-[800px]  h-[200px] bg-[#f0fdf4] relative rounded-lg flex justify-end"
                >
                  <img
                    className="absolute left-[-100px]  bottom-0 "
                    src={d.url1}
                    alt=""
                  />
                  <div className="w-[70%] h-full text-left flex flex-col justify-center items-center  pr-4 z-30 gap-2 ">
                    <h1 className="text-2xl font-bold text-[#37ad62]">
                      {d.name1}
                    </h1>
                    <ul className="text-sm lg:text-lg text-[#4ade80] lg:pr-6">
                      <li>
                        <span className="text-[#37ad62]">1.</span>{" "}
                        {d.properties1[1]}
                      </li>
                      <li>
                        <span className="text-[#37ad62]">2.</span>{" "}
                        {d.properties1[2]}
                      </li>
                      <li>
                        <span className="text-[#37ad62]">3.</span>{" "}
                        {d.properties1[3]}
                      </li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="md:w-[60%] w-[400px] max-w-[800px]  h-[200px] bg-[#f0fdf4] relative rounded-lg"
                >
                  <img
                    className="absolute lg:right-[-100px]  right-[-160px]  bottom-0 top-[-50px] w-[300px]  z-10"
                    src={d.url2}
                    alt=""
                  />
                  <div className="w-[70%] h-full text-left flex flex-col justify-center items-center pl-4 z-30 gap-2">
                    <h1 className="text-2xl font-bold text-[#37ad62]">
                      {d.name2}
                    </h1>
                    <ul className="text-sm lg:text-lg text-[#4ade80] lg:pl-6">
                      <li>
                        <span className="text-[#37ad62]">1.</span>{" "}
                        {d.properties2[1]}
                      </li>
                      <li>
                        <span className="text-[#37ad62]">2.</span>{" "}
                        {d.properties2[2]}
                      </li>
                      <li>
                        <span className="text-[#37ad62]">3.</span>{" "}
                        {d.properties2[3]}
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Scrool;
