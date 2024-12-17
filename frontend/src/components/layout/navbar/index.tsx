/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { logout } from "../../../store/slices/authSlice";
import { useAppDispatch, useAppSelector, type RootState } from "../../../store";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, token } = useAppSelector(
    (state: RootState) => state.auth
  );

  //for debugging purposes
  console.log("IsAuthenticated => " + isAuthenticated);
  console.log("User => " + user);
  console.log("Token => " + token);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Exam Web
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {!isAuthenticated && (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}
        {isAuthenticated && (
          <>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
