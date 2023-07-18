import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import CustomSelect from "../common/reactSelect";

const AddProductDialog = ({ open, onClose, onAddProduct, title = "Add" }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCode, setProductCode] = useState("");
  const [categories, setCategories] = useState([]);

  const colorList = [
    { value: "black", label: "black", type: "" },
    { value: "white", label: "white", type: "" },
    { value: "red", label: "red", type: "" },
    { value: "Yellow", label: "Yellow", type: "" },
    { value: "Silver", label: "Silver", type: "" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://creepy-calf-gaiters.cyclic.app/categories"
        );
        let list = response.data.categories.map((item) => {
          return { value: item.categoryId, label: item.categoryType, type: "" };
        });
        setCategories(list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };
  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const initialValues = {
    modelNumer: "",
    modelName: "",
    price: "",
    color: "",
    year: "",
    category: "",
    description: "",
  };

  const validationSchema = Yup.object({
    modelNumer: Yup.string().required("Model Numer is required"),
    modelName: Yup.string().required("Model Name is required"),
    price: Yup.string().required("Price is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.get(
        "https://creepy-calf-gaiters.cyclic.app/product/add",
        values
      );

      setCategories(list);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      onClose();
    }
  };

  const handleAddProduct = () => {
    const newProduct = {
      code: productCode,
      name: productName,
      price: parseFloat(productPrice),
    };

    onAddProduct(newProduct);
    setProductName("");
    setProductPrice("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "#3c6620", color: "#FFF" }}>
        {title} Product
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
                name="modelNumer"
                as={TextField}
                label="Model Number"
                fullWidth
              />
              <ErrorMessage name="modelNumer" component="div" />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="modelName"
                as={TextField}
                label="Model Name"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage name="modelName" component="div" />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="category"
                as={CustomSelect}
                options={categories}
                label="Category"
              />
              <ErrorMessage name="category" component="div" />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="price"
                as={TextField}
                label="Price"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage name="price" component="div" />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="year"
                as={TextField}
                label="Year"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage name="year" component="div" />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="color"
                as={CustomSelect}
                options={colorList}
                label="Color"
              />

              <ErrorMessage name="category" component="div" />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                as={TextareaAutosize}
                fullWidth
                name="description"
                sx={{ margin: "10px auto" }}
                minRows={5}
                placeholder="Description"
              />

              <ErrorMessage name="description" component="div" />
            </FormControl>
          </DialogContent>
          <DialogActions
            sx={{ backgroundColor: "#e1e8e5", color: "#FFF !important" }}
          >
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              Add
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default AddProductDialog;
