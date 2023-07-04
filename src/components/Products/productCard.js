import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function ProductCard({ price, name, description, image }) {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="product" height="250px" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "block" }}>
        <Button size="small" onClick={() => router.push("product-detail")}>
          Buy Now
        </Button>
        <Button size="small">Contact Us</Button>
      </CardActions>
    </Card>
  );
}
