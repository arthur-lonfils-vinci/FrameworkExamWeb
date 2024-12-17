import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { setCredentials } from "../store/slices/authSlice";
import api from "../services/api";
import { useAppDispatch } from "../store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auths/login", formData);
      dispatch(setCredentials(response.data));
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to login");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Login
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

export default Login;
