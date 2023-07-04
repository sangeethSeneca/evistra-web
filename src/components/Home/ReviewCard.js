import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export const Reviews = [
  {
    customerName: "David",
    review: "Wonderful customer Service",
  },
  {
    customerName: "LEE J",
    review: "Affordable and  Reliable",
  },
  {
    customerName: "Hem Busai",
    review: "Great collection and best in the market",
  },
  {
    customerName: "Hussy Mike",
    review: "Great place with wonderful service",
  },
];
export default function ReviewCard({ customerName, review, image }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#3c6620",
        color: "#FFFF",
        margin: "5px",
        borderRadius: "22px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {review}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {customerName}
          </Typography>
          <Rating name="read-only" value={5} readOnly />
        </CardContent>
      </Box>
    </Card>
  );
}
