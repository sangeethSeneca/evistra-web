import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Modal,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";

const ShoppingCart = ({ open, setOpen }) => {
  const router = useRouter();

  const [items, setItems] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ]);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "300px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          border: "1px solid #ccc",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          outline: "none",
        }}
      >
        <Typography variant="h6" sx={{ marginTop: 0 }}>
          Shopping Cart
        </Typography>
        {items.length > 0 ? (
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={() => {
                  handleClose();
                  router.push("/checkout");
                }}
              >
                Checkout
              </Button>
            </ListItem>
          </List>
        ) : (
          <Typography variant="body2">Your cart is empty.</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ShoppingCart;
