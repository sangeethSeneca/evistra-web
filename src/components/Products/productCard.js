import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function ProductCard({ price, name, description, image, product, brand, color }) {
  const router = useRouter();
  const dispatch = useDispatch()

  const handleClick = () => {
    router.push({
      pathname: "/product-detail", // Replace with your desired destination page path
      query: product, // The object you want to pass
    });
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="product"
        width="300px"
        height="300px"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "block" }}>
        <Button size="small" onClick={handleClick}>
          Buy Now
        </Button>
        <Button size="small" onClick={() => router.push("contact-us")}>
          Contact Us
        </Button>
      </CardActions>
    </Card>
  );
}
