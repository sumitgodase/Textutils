import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Darkmode has been enabled!", "success");
      document.title = "TextUtils - DarkMode";
      setInterval(() => {
        document.title = "TextUtils is Amazing!";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now!";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled!", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar
            title="TextUtils"
            aboutText="About"
            contactText="Contact"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/home" element={<Home mode={mode} />} />
              <Route exact path="/about" element={<About mode={mode} />} />
              <Route exact path="/contact" element={<Contact mode={mode} />} />
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    heading="Enter the text to analyze below"
                    mode={mode}
                    showAlert={showAlert}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
