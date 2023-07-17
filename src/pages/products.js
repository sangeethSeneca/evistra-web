import React, { useEffect, useState } from "react";

import { products } from "../components/Products/data";
import ProductCard from "../components/Products/productCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Products(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://creepy-calf-gaiters.cyclic.app/products"
        );
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const bgImage = {
    imageUrl: "./images/bg.jpeg",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <>
      <h2>Products List</h2>
      <Grid container spacing={2}>
        {data.map((product, index) => (
          <Grid item xs={3} key={product.id}>
            <Item>
              <ProductCard
                price={product.price}
                name={product.name}
                image={`${product.image}${index}.jpg`}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
