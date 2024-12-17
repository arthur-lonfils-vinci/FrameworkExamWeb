import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { FooterProps } from '../../../types/layout/footer';
 
const Footer: React.FC<FooterProps> = ({studentName}) => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    &copy; {new Date().getFullYear()} {studentName}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;