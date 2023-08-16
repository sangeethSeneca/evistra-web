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
import ImageUpload from "../common/imageUploader";
import { toast } from "react-toastify";

const AddProductDialog = ({ open, onClose, onAddProduct, selectedProduct, title = "Add" }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCode, setProductCode] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState(selectedProduct ? selectedProduct.image : '');
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
    modelId: selectedProduct ? selectedProduct.modelId : "",
    modelName: selectedProduct ? selectedProduct.modelName : "",
    price: selectedProduct ? selectedProduct.price : "",
    Color: selectedProduct ? selectedProduct.Color : "",
    year: selectedProduct ? selectedProduct.year : "",
    Brandname: selectedProduct ? selectedProduct.Brandname : "",
    category: selectedProduct ? selectedProduct.category : "",
    Description: selectedProduct ? selectedProduct.Description : "",
  };

  const validationSchema = Yup.object({
    modelId: Yup.string().required("Model Numer is required"),
    modelName: Yup.string().required("Model Name is required"),
    Brandname: Yup.string().required("Brand Name is required"),
    price: Yup.string().required("Price is required"),
    Color: Yup.string().required("Color is required"),
    Description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values) => {
    let payload = { ...values, image: imageURL }
    try {
      if (selectedProduct) {
        const response = await axios.put(
          "https://creepy-calf-gaiters.cyclic.app/products/edit",
          { ...selectedProduct, ...payload }, {
          headers: {
            Authorization: typeof window !== "undefined" ? localStorage.getItem('token') : null
          }
        }
        );
      }
      else {
        const response = await axios.post(
          "https://creepy-calf-gaiters.cyclic.app/products/add",
          payload, {
          headers: {
            Authorization: typeof window !== "undefined" ? localStorage.getItem('token') : null
          }
        }
        );
      }
      toast.success('Added successfully!', {
        position: toast.POSITION.TOP_RIGHT
      });
      setSelectedImage(null);
    } catch (error) {
      toast.error('Something went wrong!', {
        position: toast.POSITION.TOP_RIGHT
      });
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
                name="modelId"
                as={TextField}
                label="Model Number"
                fullWidth
              />
              <ErrorMessage
                name="modelId"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="modelName"
                as={TextField}
                label="Model Name"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage
                name="modelName"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="category"
                as={CustomSelect}
                options={categories}
                label="Category"
              />
              <ErrorMessage
                name="category"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="price"
                as={TextField}
                label="Price"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage
                name="price"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="Brandname"
                as={TextField}
                label="Brand Name"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage
                name="Brandname"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>

            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="year"
                as={TextField}
                label="Year"
                fullWidth
                sx={{ margin: "10px auto" }}
              />
              <ErrorMessage
                name="year"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                name="Color"
                as={CustomSelect}
                options={colorList}
                label="Color"
              />

              <ErrorMessage
                name="Color"
                component="div"
                style={{ fontSize: "11px", color: "red" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: "10px auto" }}>
              <Field
                as={TextareaAutosize}
                fullWidth
                name="Description"
                sx={{ margin: "10px auto" }}
                minRows={5}
                placeholder="Description"
              />
              <ImageUpload setImageURL={setImageURL} imageURL={selectedProduct ? selectedProduct.image : ''} setSelectedImage={setSelectedImage} selectedImage={selectedImage} uploading={uploading}
                setUploading={setUploading} />
              <ErrorMessage
                name="description"
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

export default AddProductDialog;
