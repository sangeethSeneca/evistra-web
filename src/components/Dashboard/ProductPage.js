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
import AddProductDialog from "../FormDialog/AddEditProduct";
import EditIcon from "@mui/icons-material/Edit";

const ProductPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [products, setProducts] = useState([
    { code: 1, name: "Product 1", price: 10.99 },
    { code: 2, name: "Product 2", price: 19.99 },
    { code: 3, name: "Product 3", price: 5.99 },
    { code: 4, name: "Product 4", price: 14.99 },
  ]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setSelectedProduct(null);
  };

  const handleEdit = (category) => {
    setSelectedProduct(category);
    setOpenDialog(true);
  };

  return (
    <>
      <Typography variant="h4">{"Products"}</Typography>
      <Button
        variant="outlined"
        sx={{ border: "2px solid #3c6620 ", color: "#3c6620" }}
        onClick={handleOpenDialog}
      >
        Add Product
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Code</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.code}>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(product)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddProductDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onAddProduct={handleAddProduct}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
        title={selectedProduct ? "Edit" : "Add"}
      />
    </>
  );
};

export default ProductPage;
