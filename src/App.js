import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState({});

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#432454';
      showAlert("Dark mode is enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","info");
    }
  };
  return (
    <>
      
      <div className="container my-3">
      <BrowserRouter>
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
    <Routes>
    
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
      <Route exact path="/about" element={<About mode={mode}/>} />
    </Routes>
  </BrowserRouter>
        {/* <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> */}
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
