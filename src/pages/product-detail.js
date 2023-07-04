import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductDetailContainer = styled("div")({
  alignItems: "center",
  height: "80vh",
  width: "100%",
  display: "flex",
});

const ProductImage = styled("img")({
  marginRight: 16,
});

const ProductName = styled(Typography)({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "1.5rem",
});

const Price = styled(Typography)({
  color: "orange",
  fontSize: "1.25rem",
});

const Subheading = styled(Typography)({
  fontSize: "1.2rem",
  marginTop: 8,
});

const Features = styled(Typography)({
  fontSize: "1.5rem",
  marginTop: 16,
});

const AddToCartButton = styled(Button)({
  color: "orange",
  fontWeight: "bold",
  marginTop: 16,
});

function ProductDetailPage() {
  const product = {
    image: "images/1.jpg",
    name: "Modern home in city center in the heart of historic Los Angeles",
    price: "$1,900.00",
    features: "Spacious rooms, central location, modern amenities",
  };

  const handleAddToCart = () => {
    // Functionality to handle adding the product to the cart
    console.log("Product added to cart");
  };

  return (
    <ProductDetailContainer>
      <ProductImage
        src={product.image}
        width={400}
        height={600}
        alt="Product"
      />
      <div>
        <ProductName variant="h2" component="h1">
          {product.name}
        </ProductName>
        <Price variant="h4" component="h2">
          {product.price}
        </Price>
        <Subheading variant="subtitle1">
          Spacious home with modern amenities
        </Subheading>
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
