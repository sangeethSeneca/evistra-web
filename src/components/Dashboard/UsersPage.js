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
import { toast, ToastContainer } from 'react-toastify';
import DeleteIcon from "@mui/icons-material/Delete";
import AddUserDialog from "../FormDialog/AddEditUser";


const UserPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://creepy-calf-gaiters.cyclic.app/users", {
        headers: {
          Authorization: window ? localStorage.getItem('token') : null
        }
      }
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCategory(null);
  };

  const handleAddCategory = (newProduct) => {
    setUsers([...users, newProduct]);
    setSelectedCategory(null);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  const handleDelete = async (user) => {
    try {
      const response = await axios.delete(
        "https://creepy-calf-gaiters.cyclic.app/users/delete", {
        headers: {
          Authorization: window ? localStorage.getItem('token') : null
        },
        data: user
      }
      );
      fetchData();
      toast.success('User Deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Typography variant="h4">{"Users"}</Typography>
      <Button
        variant="outlined"
        sx={{ border: "2px solid #3c6620 ", color: "#3c6620" }}
        onClick={handleOpenDialog}
      >
        Add User
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>User Type</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fName}</TableCell>
                <TableCell>{user.lName}</TableCell>
                <TableCell>{user.userType}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(user)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddUserDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onAddProduct={handleAddCategory}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        title={selectedCategory ? "Edit" : "Add"}
        fetchData={fetchData}
      />
    </>
  );
};

export default UserPage;
