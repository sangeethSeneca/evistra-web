import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { zeroRightClassName, fullWidthClassName, noScrollbarsClassName } from 'react-remove-scroll-bar';

export default function Gallery() {
  return (
    <div style={{ overflowClipY: "hidden" }}>
      <ImageList
        sx={{ width: 1070, height: 550, margin: "auto" }} // Adjust width here
        cols={3}
        rowHeight={350}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={polaroidStyle}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const polaroidStyle = {
  borderRadius: "10px",
  boxShadow: "0px 1px 1px 1px rgba(0, 128, 0, 1)",
  padding: "13px",
  marginBottom: "20px",
};

const itemData = [
  {
    img: "images/galleryimages/1.jpg",
    title: "Breakfast",
  },
  {
    img: "images/galleryimages/2.jpg",
    title: "Burger",
  },
  {
    img: "images/galleryimages/3.jpg",
    title: "Camera",
  },
  {
    img: "images/galleryimages/4.jpg",
    title: "Coffee",
  },
  {
    img: "images/galleryimages/5.jpg",
    title: "Hats",
  },
  {
    img: "images/galleryimages/6.jpg",
    title: "Honey",
  },
  {
    img: "images/galleryimages/7.jpg",
    title: "Basketball",
  },
  {
    img: "images/galleryimages/8.jpg",
    width: "800px",
    height: "800px",
    title: "Breakfast",
  },
  {
    img: "images/galleryimages/9.jpg",
    width: "800px",
    height: "800px",
    title: "Burger",
  },
  {
    img: "images/galleryimages/10.jpg",
    width: "800px",
    height: "800px",
    title: "Camera",
  },
  {
    img: "images/galleryimages/11.jpg",
    width: "800px",
    height: "800px",
    title: "Coffee",
  },
  {
    img: "images/galleryimages/0.jpg",
    width: "800px",
    height: "800px",
    title: "Hats",
  },
];
