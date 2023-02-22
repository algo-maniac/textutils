import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e2e61";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };
  return (
    <div>
      <Navbar text="TextUtils" about="About Us" modes={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div>
        <div className="container">
          <Textform
            heading="Enter the text to analyze"
            modes={mode}
            toggle={toggle}
            showAlert={showAlert}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
