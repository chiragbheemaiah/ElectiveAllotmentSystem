import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navigate
} from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import ForgotPassword from "./screens/ForgotPassword";
import NewPassword from "./screens/NewPassword";
import Waiver from "./screens/Waiver";
import AdminDashboard from "./screens/AdminDashboard";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/waiver" element={<Waiver />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
