import React, { useState } from 'react';
import {
    Button,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

function PaymentPage() {
    const [paymentOption, setPaymentOption] = useState('ondelivery');
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const router = useRouter();

    const [streetNumber, setStreetNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const handlePayment = () => {
        toast.success('Order Placed successfully!', {
            position: toast.POSITION.TOP_RIGHT,
        });
        router.push('/order-success');
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '40px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Payment and Shipping Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Grid container spacing={2}>
                        {/* Street Number */}
                        <Grid item xs={3}>
                            <TextField
                                label="Street Number"
                                fullWidth
                                value={streetNumber}
                                onChange={(e) => setStreetNumber(e.target.value)}
                            />
                        </Grid>
                        {/* Street Name */}
                        <Grid item xs={6}>
                            <TextField
                                label="Street Name"
                                fullWidth
                                value={streetName}
                                onChange={(e) => setStreetName(e.target.value)}
                            />
                        </Grid>
                        {/* Apartment Number */}
                        <Grid item xs={3}>
                            <TextField
                                label="Apt. No."
                                fullWidth
                                value={apartmentNumber}
                                onChange={(e) => setApartmentNumber(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="City"
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Province"
                                fullWidth
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="ZIP Code"
                                fullWidth
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="payment-option"
                                    name="paymentOption"
                                    value={paymentOption}
                                    onChange={handlePaymentOptionChange}
                                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <FormControlLabel
                                        value="ondelivery"
                                        control={<Radio color="primary" />}
                                        label="On-Delivery"
                                    />
                                    <FormControlLabel
                                        value="prepaid"
                                        control={<Radio color="primary" />}
                                        label="Pre-paid"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<PaymentIcon />}
                    style={{ backgroundColor: '#3c6620', borderRadius: '5px', fontWeight: 'bold', padding: '10px 40px' }}
                    onClick={handlePayment}
                >
                    {paymentOption === 'prepaid' ? 'Pay Now' : 'Place Order'}
                </Button>
            </div>
        </Container>
    );
}

export default PaymentPage;