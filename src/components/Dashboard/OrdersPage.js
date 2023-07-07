import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const products = [
  { id: 1, name: "Order 1", price: 10.99 },
  { id: 2, name: "Order 2", price: 19.99 },
  { id: 3, name: "Order 3", price: 5.99 },
  { id: 4, name: "Order 4", price: 14.99 },
];

const OrderPage = () => {
  return (
    <>
      <Typography variant="h4">{"Dashboard -> Orders"}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderPage;
