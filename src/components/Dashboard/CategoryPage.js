import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import AddCategoryDialog from "../FormDialog/AddEditCategory";

const CategoryPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [categories, setCategories] = useState([
    { code: 1, name: "Category 1" },
    { code: 2, name: "Category 2" },
    { code: 3, name: "Category 3" },
    { code: 4, name: "Category 4" },
  ]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddCategory = (newProduct) => {
    setCategories([...categories, newProduct]);
  };
  return (
    <>
      <Typography variant="h4">{"Dashboard -> Categories"}</Typography>
      <Button
        variant="outlined"
        sx={{ border: "2px solid #3c6620 ", color: "#3c6620" }}
        onClick={handleOpenDialog}
      >
        Add Category
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((product) => (
              <TableRow key={product.code}>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddCategoryDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onAddProduct={handleAddCategory}
      />
    </>
  );
};

export default CategoryPage;
