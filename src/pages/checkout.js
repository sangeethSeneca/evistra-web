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
    <Container sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          Checkout
        </Grid>
        <Grid item xs={5} sx={{ width: "100%" }}>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom></Typography>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
