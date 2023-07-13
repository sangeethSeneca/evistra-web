import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const ProductDetailContainer = styled("div")({
  alignItems: "center",
  width: "100%",
  display: "flex",
});

const ProductImage = styled("img")({
  marginRight: 16,
  marginTop: 9,
});

const ProductName = styled(Typography)({
  textTransform: "uppercase",
  fontWeight: "bolder",
  fontSize: "1.5rem",
  marginTop: "-180px",
});

const PriceContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Price = styled(Typography)({
  color: "#59b147",
  fontWeight: "bold",
  fontSize: "1.25rem",
  marginRight: "8px",
  marginTop: 9,
});

const TaxText = styled(Typography)({
  fontSize: "0.8rem",
  marginBottom: -4,
});

const Rating = ({ rating, numReviews }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" marginRight={1}>
        {Array(5)
          .fill()
          .map((_, index) =>
            index < fullStars ? (
              <StarIcon
                key={index}
                htmlColor="gold"
                style={{ fontSize: "15px" }}
              />
            ) : (
              <StarBorderIcon
                key={index}
                htmlColor="gold"
                style={{ fontSize: "15px" }}
              />
            )
          )}
        {hasHalfStar && <StarHalfIcon htmlColor="gold" />}
      </Box>
      <Typography variant="body2">{`${numReviews} reviews`}</Typography>
    </Box>
  );
};

const DescriptionContainer = styled("div")({
  width: 421,
  height: 70,
  overflow: "hidden",
  fontFamily: "Oswald, Helvetica, sans-serif",
});

const Description = styled(Typography)({
  fontSize: "14px",
  lineHeight: 1.1,
  fontFamily: "Oswald, Helvetica, sans-serif",
  marginTop: 10,
});
const Subheading = styled(Typography)({
  fontSize: "14px",
  marginTop: 8,
});

const Features = styled(Typography)({
  fontSize: "1.5rem",

  marginTop: 16,
});

const AddToCartButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  marginTop: 16,
  backgroundColor: "#59b147", // Change the background color
  borderColor: "##59b147", // Change the border color
  width: "300px", //
  "&:hover": {
    backgroundColor: "#59b147",
    borderColor: "#59b147",
  },
}));

function ProductDetailPage() {
  const product = {
    image: "images/1.jpg",
    name: "E-Bike 200",
    price: "$1,900.00",
    description:
      "This high-performance electric bike is perfect for urban commuting and long rides. With its reliable motor and sturdy build, it offers a smooth and comfortable riding experience. Take your cycling to the next level with the E-Bike 200!",
    features: "Highly Reliable / 1000 KM Warranty",
    rating: 5,
    numReviews: 5,
  };

  const handleAddToCart = () => {
    // Functionality to handle adding the product to the cart
    console.log("Product added to cart");
  };

  return (
    <ProductDetailContainer>
      <ProductImage
        src={product.image}
        width={591}
        height={486}
        alt="Product"
      />
      <div>
        <ProductName variant="h2" component="h1">
          {product.name}
        </ProductName>
        <div>
          <Rating rating={product.rating} numReviews={product.numReviews} />{" "}
        </div>
        <PriceContainer>
          <Price variant="h4" component="h2">
            {product.price}
          </Price>
          <TaxText variant="body2"> Excl. tax </TaxText>
        </PriceContainer>
        <DescriptionContainer>
          <Description variant="body1">{product.description}</Description>
        </DescriptionContainer>
        <Subheading variant="subtitle1"></Subheading>
        <Features variant="h2" component="h2">
          Features
        </Features>
        <Typography variant="body1">{product.features}</Typography>
        <AddToCartButton variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </div>
    </ProductDetailContainer>
  );
}

export default ProductDetailPage;
