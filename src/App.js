import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import React, { useState } from 'react';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  // const removeClasses = () =>{
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-info");
  //   document.body.classList.remove("bg-secondary");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-dark");
  // }

  // define a parameter to use different toggles
  const darkMode = () => {
    // removeClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#4D4B4A";
      showAlert("This is dark", "success");


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("This is light", "success");
    }

  }
  

  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <Router>
      <>
        <Navbar title="TextUtils" about="AboutUS" mode={mode} toggle1={darkMode} />
        <Alert alert={alert} showAlert={showAlert} />
        {/* <Navbar /> */}

        {/* <TextForm txt="Text Editor" mode={mode} showAlert={showAlert} /> */}
        {/* <About /> */}

        <Routes>
          <Route exact path="/" element={<TextForm txt="Text Editor" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </>
    </Router>

  );
}

export default App;

