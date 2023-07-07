import React, { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ProductPage from "../components/Dashboard/ProductPage";
import OrderPage from "../components/Dashboard/OrdersPage";
import CategoryPage from "../components/Dashboard/CategoryPage";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const [navItem, setNavItem] = useState("home");
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} md={2}>
        <Paper
          elevation={3}
          sx={{ height: "100vh", padding: "16px", backgroundColor: "#579e57" }}
        >
          <Typography variant="h5" gutterBottom>
            Dashboard
          </Typography>
          <List>
            <ListItem button onClick={() => router.push("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Categories"
                onClick={() => setNavItem("categories")}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Products"
                ac
                onClick={() => setNavItem("products")}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Orders"
                onClick={() => setNavItem("orders")}
              />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={9}>
        <Paper elevation={3} sx={{ height: "100vh", padding: "16px" }}>
          {navItem === "products" && <ProductPage />}
          {navItem === "orders" && <OrderPage />}
          {navItem === "categories" && <CategoryPage />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
