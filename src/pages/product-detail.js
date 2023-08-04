import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { toast, ToastContainer } from 'react-toastify';

const ProductDetailContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  overflowY: "auto",
  height: "95vh",
  placeItems: "center",
  justifySelf: "start",
  marginBottom: "10px",
  margin: "auto",
});

const ProductImageContainer = styled("div")({
  display: "absolute",
  justifyContent: "center",
  marginTop: "-20px",
  marginRight: "20px"
});

const ProductImage = styled("img")({
  boxSizing: "border-box",
  marginTop: "20px",
  height: "300px",
  justifySelf: "end",
});

const BrandNameContainer = styled("div")({
  boxSizing: "content-box",
  color: "rgb(0, 113, 133)",
  display: "inline-flex",

  fontFamily: "'Amazon Ember', Arial, sans-serif",
  fontSize: "14px",
  height: "auto",
  lineHeight: "20px",
  width: "auto",
});

const ProductName = styled(Typography)({
  textTransform: "uppercase",
  fontWeight: "bolder",
  fontSize: "1.5rem",
  marginTop: "-30px",
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
  marginBottom: -11,
  color: "#ba170b",
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
        {hasHalfStar && <StarIcon htmlColor="gold" />}
      </Box>
      <Typography variant="body2">{`${numReviews} reviews`}</Typography>
    </Box>
  );
};

const ItemDescriptionContainer = styled("div")({
  width: 421,
  height: 200,
  overflow: "hidden",
  fontFamily: "Oswald, Helvetica, sans-serif",
  whiteSpace: "pre-line",
  marginTop: "10px",
  position: "relative",
  top: -9,
});

const ItemDescription = styled(Typography)({
  fontSize: "14px",
  lineHeight: "20px",
  fontFamily: "Oswald, Helvetica, sans-serif",
  marginTop: 10,
  whiteSpace: "pre-line",
});

const ColorContainer = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});

const ColorFeature = styled(Typography)({
  color: "rgb(15, 17, 17)",
  cursor: "default",
  display: "inline",
  fontFamily: "'Amazon Ember', Arial, sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  height: "auto",
  lineHeight: "20px",
  paddingBottom: "2px",
  paddingLeft: "2px",
  textSizeAdjust: "100%",
  position: "relative",
  top: 6,
});

const ColorBox = styled("div")(({ color }) => ({
  width: 25,
  height: 25,
  backgroundColor: color,
  borderColor: "#000000",
  marginRight: 8,
  position: "absolute",
  top: "34px",
  left: "0px",
}));

const FeaturesContainer = styled("div")({
  width: 400,
  height: 300,
  position: "relative",
  marginTop: "20px",
  alignItems: "center",
  overflowY: "visible",
  overflowX: "visible",
  height: "20vh",
  placeItems: "center",
});

const Features = styled(Typography)({
  position: "relative",
  fontSize: "14px",
  marginTop: -45,
  fontSize: "20px",
  whiteSpace: "pre-line",
});

const AddToCartButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  marginTop: 50,
  backgroundColor: "#59b147",
  borderColor: "#59b147",
  width: "300px",
  "&:hover": {
    backgroundColor: "#59b147",
    borderColor: "#59b147",
  },
}));

const ProductKFContainer = styled("div")({
  width: 400,
  height: 200,
  position: "relative",
  marginTop: "20px",
  alignItems: "center",
  overflowY: "visible",
  overflowX: "visible",
  height: "20vh",
  placeItems: "center",
});

const ProductKFTitle = styled(Typography)({
  position: "relative",
  fontSize: "14px",
  marginTop: -45,
  fontSize: "20px",
  whiteSpace: "pre-line",
  marginBottom: "10px",
});

const ProductKFText = styled(Typography)({
  fontSize: "14px",
  lineHeight: "20px",
  fontFamily: "Oswald, Helvetica, sans-serif",
  marginTop: 10,
  whiteSpace: "pre-line",
});

function ProductDetailPage() {
  const router = useRouter();
  const dispatch = useDispatch()

  const { price, image, modelName, Description, Color, Brandname, _id } = router.query;
  const product = {
    image: "images/1.jpg",
    brand: "NCC",
    name: "E-Bike 200",
    price: "$1,900.00",
    height: "150cm",
    width: "60cm",
    description:
      "This high-performance electric bike is perfect for urban commuting and long rides. With its reliable motor and sturdy build, it offers a smooth and comfortable riding experience. Take your cycling to the next level with the E-Bike 200!\n",
    colorDesc: "Light Blue",
    rating: 5,
    numReviews: 5,
  };

  const features = `- An LCD provides essential breakdowns of range, assist levels, and more.
- Front and rear lighting allow riding from dusk till dawn.
- Semi-integrated battery with multiple options, offering a maximum range of 150km (93 miles).
- 500-watt rear-drive motor enables speeds of up to 32km/h (20mph) seamlessly paired with an 8-speed rear derailleur, cassette, chain, and shift lever.
`;

  const handleAddToCart = () => {
    toast.success('Added successfully!', {
      position: toast.POSITION.TOP_RIGHT
    });
    let itemPrice = Number(price).toFixed(2);
    dispatch(addItem({ _id, price: itemPrice, image, modelName, Description, Color, Brandname }));

  };

  return (
    <div>
      <ProductDetailContainer>
        <div style={{ margin: 'auto', display: "flex" }}>
          <ProductImageContainer>
            <ProductImage src={image} alt="Product" />
          </ProductImageContainer>
          <div>
            <ProductName variant="h2" component="h1">
              {modelName}
            </ProductName>
            <BrandNameContainer>Brand: {Brandname}</BrandNameContainer>
            <div>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
            <hr />
            <PriceContainer>
              <Price variant="h4" component="h2">
                ${Number(price).toFixed(2)}
              </Price>
              <TaxText variant="body2">Excl Tax</TaxText>
            </PriceContainer>
            <ItemDescriptionContainer>
              <ItemDescription variant="body1">
                {Description}
              </ItemDescription>
              <div>
                <hr />
                <ColorContainer>
                  <ColorFeature>Color Name:</ColorFeature>
                  <div>
                    <ColorBox color={Color} />
                  </div>
                </ColorContainer>
              </div>
            </ItemDescriptionContainer>
            <AddToCartButton variant="contained" onClick={() => handleAddToCart()}>
              Add to Cart
            </AddToCartButton>
          </div>
        </div >
      </ProductDetailContainer >


    </div >
  );
}
export default ProductDetailPage;
