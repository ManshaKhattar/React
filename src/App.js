import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{ useState } from 'react';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');    // whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils -Dark Mode';      // used in fb/gmail jaha notif aati 1/2/3 msgs top me hi 
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now!!';     //dhyan akarshit ke liye.. virus vala jo ata sites pe
      }, 1500);
    }
    else  {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")


    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title= "Mansha" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/> 
    <div className="container my-3">
    {/* <Routes>  
          <Route exact path="/about" element= {<About />} />
          <Route exact path="/"  */}
              {/* element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>   */}

              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>      
    {/* </Routes> */}
    </div>
     {/* </Router> */}
    </>
  );
}
 // exact isliye likha ki bilkul match kre as same naamke comp bhi hote to confusion avoids
export default App;
