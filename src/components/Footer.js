import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <Link
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evistra
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
