import React, { useState } from 'react';
import {
    Button,
    Container,
    CssBaseline,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import useAuthorization from '../components/hooks/useAuthorization';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

function PaymentPage() {
    const [paymentOption, setPaymentOption] = useState('ondelivery"'); // Default payment option
    const [customerName, setCustomerName] = useState('');
    const [contactNumer, setContactNumber] = useState('');
    const router = useRouter();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZipCode] = useState('');

    const token = localStorage.getItem('token');


    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const handlePayment = () => {
        toast.success('Order Placed successfully!', {
            position: toast.POSITION.TOP_RIGHT
        });
        router.push('/order-success')
    }

    return (

        <Grid container spacing={2} style={{ minHeight: "80vh", padding: '20px' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Payment and Shipping Details
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="payment-option"
                                name="paymentOption"
                                value={paymentOption}
                                onChange={handlePaymentOptionChange}
                            >
                                <FormControlLabel value="ondelivery" control={<Radio />} label="On-Delivery" />

                                <FormControlLabel value="prepaid" control={<Radio />} label="Pre-paid" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} fullWidth style={{ width: '100%' }}>
                <Grid container spacing={2} fullWidth>
                    {!token && <>
                        <Grid item xs={12}>
                            <TextField label="Name" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Email" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Contact Number" fullWidth />
                        </Grid>
                    </>}
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="address"
                            label="Shipping Address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="province"
                            label="Province"
                            name="province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="zipCode"
                            label="ZIP Code"
                            name="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </Grid>
                    {paymentOption === 'prepaid' && <>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="cardNumber"
                                label="Card Number"
                                name="cardNumber"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="expiry"
                                label="Expiry Date"
                                name="expiry"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="cvv"
                                label="CVV"
                                name="cvv"
                            />
                        </Grid></>}



                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<PaymentIcon />}
                            style={{ backgroundColor: "#3c6620" }}

                            onClick={handlePayment}
                        >
                            {paymentOption === 'prepaid' ? "Pay Now" : "Place Order"}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default PaymentPage;
