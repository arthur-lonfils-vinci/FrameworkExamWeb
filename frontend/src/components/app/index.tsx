import Header from "../layout/header";
import Footer from "../layout/footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AppProps } from "../../types/layout/app";

function App({footer}: AppProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Outlet />
      <Footer studentName={footer.studentName}/>
    </Box>
  );
}

export default App;
