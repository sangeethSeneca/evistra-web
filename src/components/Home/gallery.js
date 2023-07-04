import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Gallery() {
  return (
    <ImageList
      sx={{ width: 800, height: 450, margin: "auto" }}
      cols={3}
      rowHeight={164}
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
  );
}

const itemData = [
  {
    img: "images/1.jpg",
    title: "Breakfast",
  },
  {
    img: "images/2.jpg",
    title: "Burger",
  },
  {
    img: "images/3.jpg",
    title: "Camera",
  },
  {
    img: "images/4.jpg",
    title: "Coffee",
  },
  {
    img: "images/5.jpg",
    title: "Hats",
  },
  {
    img: "images/6.jpg",
    title: "Honey",
  },
  {
    img: "images/7.jpg",
    title: "Basketball",
  },
  {
    img: "images/1.jpg",
    title: "Breakfast",
  },
  {
    img: "images/2.jpg",
    title: "Burger",
  },
  {
    img: "images/3.jpg",
    title: "Camera",
  },
  {
    img: "images/4.jpg",
    title: "Coffee",
  },
  {
    img: "images/5.jpg",
    title: "Hats",
  },
];
