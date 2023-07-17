import React, { useEffect, useState } from "react";
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
import axios from "axios";
const CategoryPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://creepy-calf-gaiters.cyclic.app/categories"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
              <TableRow key={category.id}>
                <TableCell>{category.categoryId}</TableCell>
                <TableCell>{category.categoryType}</TableCell>
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
