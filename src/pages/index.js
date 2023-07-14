import React, { useEffect, useState } from "react";
import ImageSlider from "../components/Home/ImageSlider";
import ReviewCard, { Reviews } from "../components/Home/ReviewCard";
import Gallery from "../components/Home/gallery";

export default function Home() {
  const [navClass, setClass] = useState("notSticky");
  const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
  ];

  return (
    <>
      <ImageSlider />
      <div style={{ display: "flex" }}>
        <div
          style={{
            float: "left",
            width: "1200px",
            height: "40vh",
            alignContent: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Collection Gallery</h2>
          <Gallery />
        </div>
        <div style={{ float: "right", width: "600px", height: "660px" }}>
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
