import React from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartSlice';

function OrderPlacedPage() {
    const router = useRouter();
    const dispatch = useDispatch()

    const handlePaymentSuccess = () => {
        router.push('/');
        dispatch(clearCart({}));
    }


    return (
        <Container component="main" style={{ minHeight: "80vh" }}>
            <CssBaseline />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                <CheckCircleOutlineIcon color="success" style={{ fontSize: 80 }} />
                <Typography variant="h4" align="center" gutterBottom>
                    Order Placed Successfully
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Thank you for your order. Your order has been successfully placed.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '1rem' }}
                    onClick={handlePaymentSuccess}
                    style={{ backgroundColor: "#3c6620" }}
                >
                    Continue Shopping
                </Button>
            </div>
        </Container>
    );
}

export default OrderPlacedPage;
