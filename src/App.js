import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Pricing from "./Pages/Pricing";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import { ThemeProvider, styled } from "@mui/material/styles";
import Theme from "./theme";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <HashRouter basename="/etogy-challenge">
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="pricing" element={<Pricing />} />
          <Route path="projects" element={<Projects />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact us" element={<ContactUs />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
