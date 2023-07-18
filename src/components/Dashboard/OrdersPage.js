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
import VisibilityIcon from "@mui/icons-material/Visibility";
import OrderDetailDialog from "../FormDialog/OrderDetail";

const OrderPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([
    { id: 1, name: "David Silva", price: 10.99, state: "New" },
    { id: 2, name: "Leo Dia", price: 19.99, state: "New" },
    { id: 3, name: "Marco Silva", price: 5.99, state: "Confirmed" },
    { id: 4, name: "Julia Perera", price: 14.99, state: "Delivered" },
  ]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Typography variant="h4">{"Orders"}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.state}</TableCell>
                <TableCell>
                  <IconButton onClick={handleOpenDialog}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <OrderDetailDialog
          open={openDialog}
          onClose={handleCloseDialog}
          onAddProduct={handleOpenDialog}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      </TableContainer>
    </>
  );
};

export default OrderPage;
