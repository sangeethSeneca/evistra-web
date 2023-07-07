import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddProductDialog = ({ open, onClose, onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCode, setProductCode] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };
  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      code: productCode,
      name: productName,
      price: parseFloat(productPrice),
    };

    onAddProduct(newProduct);
    setProductName("");
    setProductPrice("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          label="Product Code"
          value={productCode}
          onChange={handleProductCodeChange}
          fullWidth
          sx={{ margin: "10px auto" }}
        />
        <TextField
          label="Product Name"
          value={productName}
          onChange={handleProductNameChange}
          fullWidth
          sx={{ margin: "10px auto" }}
        />
        <TextField
          label="Product Price"
          type="number"
          value={productPrice}
          onChange={handleProductPriceChange}
          sx={{ margin: "10px auto" }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleAddProduct}
          disabled={!productName || !productPrice}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductDialog;
