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

const AddCategoryDialog = ({
  open,
  selectedCategory,
  onClose,
  onAddProduct,
  title = "Add",
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
    categoryId: selectedCategory ? selectedCategory.categoryId : "",
    categoryType: selectedCategory ? selectedCategory.categoryType : "",
  };

  const validationSchema = Yup.object({
    categoryId: Yup.string().required("Category Id is required"),
    categoryType: Yup.string().required("Category Type is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      if (title === "Edit") {
        const response = await axios.put(
          "https://creepy-calf-gaiters.cyclic.app/category/edit",
          values
        );
      } else {
        const response = await axios.post(
          "https://creepy-calf-gaiters.cyclic.app/category/add",
          values
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "#3c6620", color: "#FFF" }}>
        {title} Category
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
                name="categoryId"
                as={TextField}
                label="Category ID"
                fullWidth
                disabled={title === "Edit"}
              />
              <ErrorMessage
                name="categoryId"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="categoryType"
                as={TextField}
                label="Category Type"
                fullWidth
              />
              <ErrorMessage
                name="categoryType"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="categoryDescription"
                as={TextField}
                label="Description"
                fullWidth
              />
              <ErrorMessage
                name="categoryDescription"
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
              {title}
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default AddCategoryDialog;
