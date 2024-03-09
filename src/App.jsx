import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
// import AboutUs from './component/AboutUs'
import Alert from './component/Alert'
// import {BrowserRouter as Router} from "react-router-dom"
// import { Route, Routes } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);


  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#2f4566";
      showAlert("Dark mode is enable", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enable", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="textutilss" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
        <TextForm heading="Enter text to analysis" mode={mode} showAlert={showAlert} />
        {/* <Routes>
          <Route exact path='/' element={<TextForm heading="Enter text to analysis" mode={mode} showAlert={showAlert} />}/>
          <Route exact path='/about' element={<AboutUs />}/> */}
        {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  )
}

export default App
