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
  IconButton,
} from "@mui/material";
import AddCategoryDialog from "../FormDialog/AddEditCategory";
import EditIcon from "@mui/icons-material/Edit";

const CategoryPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
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
    setSelectedCategory(null);
  };

  const handleAddCategory = (newProduct) => {
    setCategories([...categories, newProduct]);
    setSelectedCategory(null);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  return (
    <>
      <Typography variant="h4">{"Categories"}</Typography>
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
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.code}>
                <TableCell>{category.code}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(category)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddCategoryDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onAddProduct={handleAddCategory}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        title={selectedCategory ? "Edit" : "Add"}
      />
    </>
  );
};

export default CategoryPage;
