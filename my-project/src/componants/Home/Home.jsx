import React from "react";
import { Link } from "react-router-dom";
import Products from "./Product";
import Slideshow from "./ImgSlydes";
import Section from "./Section";
import AutoPlay from "./Manue";
import Scrool from "./Scrool";
import Card from "../3DCard/Card";

export default function Home() {
  return (
    <>
      <Slideshow />
      <Products />
      <Section />
      <AutoPlay />
      <Scrool />
      <Card />
    </>
  );
}
