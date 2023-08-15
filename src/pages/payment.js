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
import { useSelector } from 'react-redux';
import axios from 'axios';
import { calculateSavings, calculateSubtotal } from '../util/commonUtil';

function PaymentPage() {
    const [paymentOption, setPaymentOption] = useState('ondelivery');
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const router = useRouter();
    const user = useSelector((state) => state.user.userInfo);
    const cartItems = useSelector((state) => state.cart.items);

    const [streetNumber, setStreetNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [error, setError] = useState(false);

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal(cartItems));
        const savings = parseFloat(calculateSavings(cartItems));
        return (subtotal - savings).toFixed(2);
    };


    const handlePayment = async () => {
        if (!streetNumber || !streetName || !city || !province || !zipCode) {
            setError(true);
            toast.error('Fill mandatory Fields!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else {
            try {
                const response = await axios.post(
                    "https://creepy-calf-gaiters.cyclic.app/orders/add", {
                    customerId: user.userId,
                    customerName: user.userName,
                    contactNumber: user.contactNumber,
                    orderDate: new Date(),
                    totalAmount: calculateTotal(),
                    discount: '10%',
                    productsList: cartItems
                }
                );

                toast.success('Order Placed successfully!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                router.push('/order-success');
            } catch (error) {
                toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    };

    return (
        <Container maxWidth="md" style={{ height: "80vh", marginTop: '40px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
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
                                required
                                error={!streetNumber && error}
                                value={streetNumber}
                                onChange={(e) => setStreetNumber(e.target.value)}
                            />
                        </Grid>
                        {/* Street Name */}
                        <Grid item xs={6}>
                            <TextField
                                label="Street Name"
                                fullWidth
                                required
                                value={streetName}
                                error={!streetName && error}
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
                                required
                                value={city}
                                error={!city && error}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Province"
                                fullWidth
                                required
                                value={province}
                                error={!province && error}
                                onChange={(e) => setProvince(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="ZIP Code"
                                fullWidth
                                required
                                value={zipCode}
                                error={!zipCode && error}
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