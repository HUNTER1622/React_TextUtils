import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a275d";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // Use state for alert
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }


  return (
    <>
      <Router>
        <Navbar name="Text Utils" About="About Me" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform Heading="Enter Text" mode={mode} showalert={showAlert} />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
