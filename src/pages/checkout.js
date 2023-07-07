import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const CheckoutPage = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Checkout
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="City" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Zip Code" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ backgroundColor: "#3c6620" }}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
