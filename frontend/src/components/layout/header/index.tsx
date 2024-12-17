import React from 'react';
import { AppBar } from '@mui/material';
import Menu from '../navbar';
const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Menu />
        </AppBar>
    );
};
export default Header;