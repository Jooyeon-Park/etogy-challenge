import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Pricing from "./Pages/Pricing";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import { ThemeProvider, styled } from "@mui/material/styles";
import Theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="pricing" element={<Pricing />} />
            <Route exact path="signin" element={<SignIn />} />
            <Route exact path="pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
