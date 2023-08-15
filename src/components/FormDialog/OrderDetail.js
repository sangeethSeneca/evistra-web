import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  TextField,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Table,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OrderDetailDialog = ({ open, onClose, onAddProduct, selectedOrder }) => {
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryCodeChange = (event) => {
    setCategoryCode(event.target.value);
  };
  const [products, setProducts] = useState([
    { code: 1, name: "Product 1", price: 10.99 },
    { code: 2, name: "Product 2", price: 19.99 },
    { code: 3, name: "Product 3", price: 5.99 },
    { code: 4, name: "Product 4", price: 14.99 },
  ]);
  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = () => {
    const newProduct = {
      code: categoryCode,
      name: categoryName,
    };

    onAddProduct(newProduct);
    setCategoryCode("");
    setCategoryName("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle sx={{ backgroundColor: "#3c6620", color: "#FFF" }}>
        Order Detail
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Order ID"
              value={selectedOrder?._id}
              onChange={handleCategoryCodeChange}
              fullWidth
              sx={{ margin: "10px auto" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Customer Name"
              type="text"
              value={selectedOrder?.customerName}
              onChange={handleCategoryNameChange}
              sx={{ margin: "10px auto" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Amount"
              type="number"
              value={selectedOrder?.totalAmount}
              onChange={handleCategoryNameChange}
              sx={{ margin: "10px auto" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Order Date"
              type="date"
              InputLabelProps={{ shrink: true, required: true }}
              value={selectedOrder?.orderDate}
              onChange={handleCategoryNameChange}
              sx={{ margin: "10px auto" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Order State"
              type="text"
              value={selectedOrder?.orderState ? selectedOrder?.orderState : "NEW"}
              onChange={handleCategoryNameChange}
              sx={{ margin: "10px auto" }}
              fullWidth
            />
          </Grid>
        </Grid>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Code</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedOrder?.productsList?.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product._id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions
        sx={{ backgroundColor: "#e1e8e5", color: "#FFF !important" }}
      >
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleAddCategory} variant="contained" color="error">
          Reject
        </Button>
        <Button onClick={handleAddCategory} variant="contained" color="success">
          Confirmed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailDialog;
