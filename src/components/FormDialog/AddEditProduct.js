import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddProductDialog = ({ open, onClose, onAddProduct, title = "Add" }) => {
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
      <DialogTitle sx={{ backgroundColor: "#3c6620", color: "#FFF" }}>
        {title} Product
      </DialogTitle>
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
      <DialogActions
        sx={{ backgroundColor: "#e1e8e5", color: "#FFF !important" }}
      >
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleAddProduct}
          disabled={!productName || !productPrice}
          variant="contained"
          color="success"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductDialog;
