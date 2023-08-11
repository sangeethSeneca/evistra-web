import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import useAuthorization from "./hooks/useAuthorization";
import ShoppingCart from "./Cart";

const Header = () => {
  const router = useRouter();
  const isAuthorized = useAuthorization();

  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleNavigate = (route) => {
    router.push(route);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#3c6620" }}>
      <Toolbar>
        <Typography
          onClick={() => handleNavigate("/")}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer", marginTop: "10px", }}
        >
          <img
            src="/images/logo.png"
            width="60px"
            height="60px"
            sx={{ marginTop: "10px", float: 'left' }}
          />

          <span style={{ margin: "8px 8px 8px 20px", fontSize: "30px", fontWeight: "bold", float: 'left', position: 'absolute' }} onClick={() => handleNavigate("/")}>
            EVISTRA
          </span>
        </Typography>

        {showSearchBox ? (
          <TextField
            //label="Search"
            placeholder="Search Product"
            variant="outlined"
            value={searchValue}
            onChange={handleSearchInputChange}
            sx={{ flexGrow: 1, maxWidth: "400px", marginLeft: "10px", backgroundColor: "#fff" }}
          />
        ) : (
          <React.Fragment>
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
            {!isAuthorized &&
              <Button color="inherit" onClick={() => handleNavigate("/login")}>
                Login
              </Button>}
            {isAuthorized &&
              <Button color="inherit" onClick={() => handleNavigate(localStorage.getItem('userRole') === 'Admin' ? "/admin-dashboard" : "/client-dashboard")}>
                {window ? localStorage.getItem('userName') : null}
              </Button>}
          </React.Fragment>
        )}

        <IconButton color="inherit" onClick={toggleSearchBox}>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <ShoppingCart open={open} setOpen={setOpen} />
    </AppBar>
  );
};

export default Header;