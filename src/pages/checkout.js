import React, { useState } from "react";
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

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "A99-2C0",
      price: 266.25,
      quantity: 1,
      image: "/images/1.jpg",
    },
    {
      id: 2,
      name: "E-BIKE200-2",
      price: 356.25,
      quantity: 2,
      image: "/images/2.jpg",
    },
    {
      id: 3,
      name: "A-200",
      price: 256.25,
      quantity: 1,
      image: "/images/3.jpg",
    },
    {
      id: 4,
      name: "X-BIKE200",
      price: 216.25,
      quantity: 1,
      image: "/images/4.jpg",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };





  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal(cartItems));
    const savings = parseFloat(calculateSavings(cartItems));
    return (subtotal - savings).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
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
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ height: "50px" }}
                      />
                      <Typography>{item.name}</Typography>
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="decrease"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton
                        aria-label="increase"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>${calculateItemTotal(item)}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleRemoveItem(item.id)}
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
            color="primary"
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
