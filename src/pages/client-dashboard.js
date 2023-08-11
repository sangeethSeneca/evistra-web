import React, { useEffect, useState } from "react";
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
import useAuthorization from "../components/hooks/useAuthorization";
import MyOrderPage from "../components/ClientDashboard/OrdersPage";

const ClientDashboard = () => {
  const router = useRouter();
  const [navItem, setNavItem] = useState("home");
  const isAuthorized = useAuthorization();



  const navItems = ["My Orders", "Messages", "Settings"];
  if (isAuthorized) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={2} md={2} sx={{ height: "auto" }}>
          <Paper
            elevation={3}
            sx={{ height: "100%", backgroundColor: "#579e57", color: "#FFF" }}
          >
            <img
              src="/images/logo.png"
              width="100px"
              height="100px"
              style={{ margin: "20px 0px 0px 40px" }}
            />
            <List>
              <ListItem button onClick={() => router.push("/")}>
                <ListItemText primary="Home" />
              </ListItem>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item}
                  sx={{
                    backgroundColor: navItem === item ? "ThreeDShadow" : null,
                  }}
                >
                  <ListItemText primary={item} onClick={() => setNavItem(item)} />
                </ListItem>
              ))}
              <ListItem button onClick={() => { typeof window !== "undefined" ? localStorage.clear() : null; window.location.href = "/"; }}>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={10} md={10}>
          <Paper
            elevation={3}
            sx={{ height: "100vh", padding: "16px", overflow: "scroll" }}
          >
            {navItem === "My Orders" && <MyOrderPage />}
            {navItem === "Categories" && <CategoryPage />}
          </Paper>
        </Grid>
      </Grid>
    );
  } else return <></>;
};

export default ClientDashboard;
