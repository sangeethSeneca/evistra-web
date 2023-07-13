import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Gallery() {
  return (
    <div style={{ overflowY: "hidden" }}>
      <ImageList
        sx={{ width: 1100, height: 550, margin: "auto" }}
        cols={3}
        rowHeight={350}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

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
