import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCart from "./Cart";

const Header = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleNavigate = (route) => {
    router.push(route)
  }

  return (
    <AppBar position="static" style={{ backgroundColor: "#3c6620" }}>
      <Toolbar>
        <Typography
          onClick={() => handleNavigate("/")}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer", marginTop: "10px" }}
        >
          <img
            src="/images/logo.png"
            width="60px"
            height="60px"
            sx={{ marginTop: "10px" }}
          />
        </Typography>

        <Button color="inherit" onClick={() => handleNavigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleNavigate("/products")}>
          Products
        </Button>
        <Button color="inherit" onClick={() => handleNavigate("/about-us")}>
          About
        </Button>
        <Button color="inherit" onClick={() => handleNavigate("/contact-us")}>
          Contact
        </Button>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="cart"
          onClick={handleOpen}
        >
          <Badge color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Button color="inherit" onClick={() => handleNavigate("/login")}>
          Login
        </Button>
      </Toolbar>
      <ShoppingCart setOpen={setOpen} open={open} />
    </AppBar>
  );
};

export default Header;
