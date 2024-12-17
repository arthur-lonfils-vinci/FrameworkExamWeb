import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to the Home Page
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    This is a simple home page using Material-UI.
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;