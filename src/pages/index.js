import React, { useEffect, useState } from "react";
import ImageSlider from "../components/Home/ImageSlider";
import ReviewCard, { Reviews } from "../components/Home/ReviewCard";

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
      <div style={{ display: "flex" }}>
        <div style={{ float: "left", width: "70%", height: "40vh" }}>
          <h2 style={{ textAlign: "center" }}>Upcoming Promotions</h2>
        </div>
        <div style={{ float: "right", width: "30%" }}>
          <h2 style={{ textAlign: "center" }}>Customer Reviews</h2>
          {Reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              review={review.review}
              customerName={review.customerName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
