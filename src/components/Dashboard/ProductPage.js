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
import AddProductDialog from "../FormDialog/AddEditProduct";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast, ToastContainer } from 'react-toastify';

import axios from "axios";

const ProductPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
    if (!openDialog) {
      setSelectedProduct(null);
    }
  }, [openDialog]);


  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://creepy-calf-gaiters.cyclic.app/products", {
        headers: {
          Authorization: typeof window !== "undefined" ? localStorage.getItem('token') : null
        }
      }
      );
      setProducts(response.data.products);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  const handleDelete = async (product) => {
    try {
      const response = await axios.delete(
        "https://creepy-calf-gaiters.cyclic.app/products/delete", {
        headers: {
          Authorization: typeof window !== "undefined" ? localStorage.getItem('token') : null
        },
        data: product
      }
      );
      toast.success('Product Deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT
      });
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
              <TableCell>Model Number</TableCell>
              <TableCell>Model Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.code}>
                <TableCell>{product.modelId}</TableCell>
                <TableCell>{product.modelName}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(product)}>
                    <DeleteIcon />
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
