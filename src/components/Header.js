import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <AppBar position="static" style={{backgroundColor:'#3c6620'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EVistra
        </Typography>
        <Button color="inherit" onClick={()=>router.push('/')} >Home</Button>
        <Button color="inherit" onClick={()=>router.push('/products')} >Products</Button>
        <Button color="inherit"onClick={()=>router.push('/about-us')}>About</Button>
        <Button color="inherit" onClick={()=>router.push('/contact-us') }>Contact</Button>
        <Button color="inherit" onClick={()=>router.push('/login') }>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
