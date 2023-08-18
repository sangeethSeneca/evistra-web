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
import VisibilityIcon from "@mui/icons-material/Visibility";
import OrderDetailDialog from "../FormDialog/OrderDetail";
import axios from "axios";

const MyOrderPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://creepy-calf-gaiters.cyclic.app/orders", {
          headers: {
            Authorization: typeof window !== "undefined" ? localStorage.getItem('token') : null
          }
        }
        );
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenDialog = (order) => {
    setSelectedOrder(order);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Typography variant="h4">{"My Orders"}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders && orders.length > 0 && orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.state ? order.state : "NEW"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(order)}>
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

export default MyOrderPage;
