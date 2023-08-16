import React from 'react';
import { CircularProgress, Container } from '@mui/material';

const Loader = () => {
    return (
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Set the container height to full viewport height
            }}
        >
            <CircularProgress color='success' size={60} />
        </Container>
    );
};

export default Loader;
