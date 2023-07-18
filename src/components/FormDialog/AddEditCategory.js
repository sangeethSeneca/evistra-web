import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddCategoryDialog = ({ open, onClose, onAddProduct, title = "Add" }) => {
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
      <DialogTitle sx={{ backgroundColor: "#3c6620", color: "#FFF" }}>
        {title} Category
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Category Code"
          value={categoryCode}
          onChange={handleCategoryCodeChange}
          fullWidth
          sx={{ margin: "10px auto" }}
        />
        <TextField
          label="Category Name"
          type="number"
          value={categoryName}
          onChange={handleCategoryNameChange}
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
          variant="outlined"
          onClick={handleAddCategory}
          disabled={!categoryCode || !categoryName}
          variant="contained"
          color="success"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryDialog;
