import React, { useEffect, useState } from "react";
import ImageSlider from "../components/Home/ImageSlider";

export default function Home() {
  const [navClass, setClass] = useState("notSticky");
  const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    // Add more image URLs as needed
  ];
  return (
    <>
      <ImageSlider />
    </>
  );
}
