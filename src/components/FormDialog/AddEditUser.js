import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const AddUserDialog = ({
  open,
  selectedCategory,
  onClose,
  onAddProduct,
  title = "Add",
  fetchData
}) => {
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryCodeChange = (event) => {
    setCategoryCode(event.target.value);
  };

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const initialValues = {
    fName: selectedCategory ? selectedCategory.fName : "",
    lName: selectedCategory ? selectedCategory.lName : "",
    contactNumber: selectedCategory ? selectedCategory.lName : "",
    email: selectedCategory ? selectedCategory.email : "",
    password: selectedCategory ? selectedCategory.password : "",
    userType: "Admin",
  };

  const validationSchema = Yup.object({
    fName: Yup.string().required("First Name  is required"),
    lName: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string().email('Invalid email').required('Email is required'),

  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://creepy-calf-gaiters.cyclic.app/auth/register", values
      );
      fetchData();
      onClose();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "#3c6620", color: "#FFF" }}>
        Add User
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnSubmit
        validationSchema={validationSchema}
        sx={{ width: "100%" }}
      >
        <Form>
          <DialogContent>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="fName"
                as={TextField}
                label="First Name"
                fullWidth
                disabled={title === "Edit"}
              />
              <ErrorMessage
                name="fName"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="lName"
                as={TextField}
                label="Last Name"
                fullWidth
              />
              <ErrorMessage
                name="lName"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="password"
                as={TextField}
                label="Password"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="contactNumber"
                as={TextField}
                label="Contact Number"
                fullWidth
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
          </DialogContent>
          <DialogActions
            sx={{ backgroundColor: "#e1e8e5", color: "#FFF !important" }}
          >
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              {"Create"}
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default AddUserDialog;
