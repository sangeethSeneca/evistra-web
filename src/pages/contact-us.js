import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ContactUsPage = () => {
  return (
    <Container maxWidth="md" style={{ height: "80vh" }}>
      <Typography variant="h6" style={{ marginTop: "40px"}}>
        For inquiries, Please Contact us
      </Typography>
      <Paper sx={{ padding: 2, margin: "20px 0px" }}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ backgroundColor: "#3c6620" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactUsPage;
