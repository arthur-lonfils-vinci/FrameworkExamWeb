/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { setCredentials } from '../store/slices/authSlice';
import api from '../services/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('auths/register', formData);
      dispatch(setCredentials(response.data));
      navigate('/');
    } catch (err: any) {
      if (err.response?.data?.error?.errors) {
        // Handle Zod validation errors array
        const errors = err.response.data.error.errors;
        setError(errors.map((e: { message: string }) => e.message).join(', '));
      } else {
        // Handle other error types
        setError(err.response?.data?.error || 'Failed to register');
      }
    }
  };


    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Register
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleSubmit}
                >
                    Register
                </Button>
                {error && (
                    <Typography color="error" variant="body2" marginTop="16px">
                        {error}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Register;