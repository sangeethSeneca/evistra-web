import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{backgroundColor:'#3c6620'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EVistra
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
