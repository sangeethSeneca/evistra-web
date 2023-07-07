import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddCategoryDialog = ({ open, onClose, onAddProduct }) => {
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryCodeChange = (event) => {
    setCategoryCode(event.target.value);
  };

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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          label="Product Name"
          value={categoryCode}
          onChange={handleCategoryCodeChange}
          fullWidth
          sx={{ margin: "10px auto" }}
        />
        <TextField
          label="Product Price"
          type="number"
          value={categoryName}
          onChange={handleCategoryNameChange}
          sx={{ margin: "10px auto" }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleAddCategory}
          disabled={!categoryCode || !categoryName}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryDialog;
