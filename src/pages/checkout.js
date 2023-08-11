import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { calculateItemTotal, calculateSavings, calculateSubtotal } from "../util/commonUtil";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Checkout = () => {
  const cartItemsRedux = useSelector((state) => state.cart.items);
  const router = useRouter();

  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Set cart items when the component mounts
    setCartItems([...cartItemsRedux]); // Use spread operator to create an independent copy
  }, [cartItemsRedux]);

  const [openDialog, setOpenDialog] = useState(false);

  const handleRemoveItem = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
  };

  const handleIncreaseQuantity = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = JSON.parse(JSON.stringify(prevCartItems)); // Deep copy
      updatedCartItems[index].quantity++;
      return updatedCartItems;
    });
  };

  const handleDecreaseQuantity = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = JSON.parse(JSON.stringify(prevCartItems)); // Deep copy
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity--;
      }
      return updatedCartItems;
    });
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal(cartItems));
    const savings = parseFloat(calculateSavings(cartItems));
    return (subtotal - savings).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    router.push('/payment');
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container sx={{ marginTop: 4, height: "90vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Unit Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={item.modelName}
                        style={{ height: "50px" }}
                      />
                      <Typography>{item.modelName}</Typography>
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="decrease"
                        onClick={() => handleDecreaseQuantity(index)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton
                        aria-label="increase"
                        onClick={() => handleIncreaseQuantity(index)}
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>${calculateItemTotal(item)}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#3c6620' }}
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Order Summary</DialogTitle>
        <DialogContent>
          <Typography>
            Shipping: {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </Typography>
          <Typography>Subtotal: ${calculateSubtotal(cartItems)}</Typography>
          <Typography>My Savings: ${calculateSavings(cartItems)}</Typography>
          <Typography>
            Total before tax &amp; shipping: ${calculateTotal()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Checkout;
