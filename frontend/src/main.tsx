/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

import React from "react";
import App from "./components/app/index.tsx";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./themes.ts";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/main/index.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Library from "./pages/exam_example.tsx";
import PrivateRoute from "./components/auth/PrivateRoute.tsx";

// Update this variable, it's the name of the student that will be displayed in the footer
const NOM_ETUDIANT = "Nom de l'étudiant";
const footer = { studentName: NOM_ETUDIANT };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App footer={footer}/>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "library",
        element: (
          <PrivateRoute> // if the user is not authenticated, redirect to login page
            <Library />  // This is the component that needs to be updated
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme.dark}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
