import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PiHeart } from "react-icons/pi";

const itemData = [
  {
    url: "/img/8106fd2e-4c9b-498b-99db-5f7034dfd859.jpeg",
    description: "The Greenhouse",
    price: "399",
  },
  {
    url: "/img/8a39396c-6b61-4a80-94f2-8b1fe92bf25d.jpg",
    description: "The Coach Breakfast",
    price: "399",
  },
  {
    url: "/img/095e0261-05f7-457c-a4c3-b11717c034b8.jpeg",
    description: "Classic French Toast Combo",
    price: "399",
  },
  {
    url: "/img/1811b834-4c65-47d7-967d-13fecc98a9c6.jpg",
    description: "The V-King",
    price: "399",
  },
  {
    url: "/img/781606cc-ad51-47c9-bc3c-a25a7cce9250.jpeg",
    description: "The Sprinter",
    price: "399",
  },
  {
    url: "/img/45605478-7a8f-43e9-a34d-73d950964989.jpg",
    description: "Smoked Sausages with Hashbrown",
    price: "399",
  },
];

export default function FullBorderedGrid() {
  const cardRef = useRef(null);

  // 
  return (
    <>
      <div className=" w-full flex justify-center">
        <Box sx={{ flexGrow: 1, p: 2 }} className="max-w-[1400px]">
          <Grid className container spacing={2}>
            {itemData.map((d, index) => (
              <Grid
                key={index}
                {...{ xs: 12, sm: 6, md: 4, lg: 4 }}
                minHeight={160}
                className="flex justify-center  "
              >
                <Card className="bg-[#4ade80]">
                  <CardMedia
                    component="img"
                    height="194"
                    image={d.url}
                    alt="Paella dish"
                  />
                  <CardContent className="bg-[#f0fdf4] flex flex-col gap-3 min-h-[186px]  justify-end relative">
                    <Typography className=" flex flex-col gap-2">
                      <Link className="text-xl  font-bold text-[#4ade80]">
                        {d.description}
                      </Link>
                      <Link className="text-xl text-[#4ade80]">₹{d.price}</Link>
                    </Typography>
                    <div className="flex items-end justify-between ">
                      <Link
                        href="#"
                        className="text-[#4ade80] bg-gray-300/0 hover:bg-[#4ade80] hover:text-white border-[1px] border-[#4ade80] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                      >
                        View product
                      </Link>
                      <Link
                        href="#"
                        className="text-white bg-[#4ade80] hover:bg-[#38bb68] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                      >
                        Add to cart
                      </Link>
                    </div>
                    <div className="absolute top-2 right-3 text-bold z-20 ">
                      <PiHeart className="text-3xl text-red-400" />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
