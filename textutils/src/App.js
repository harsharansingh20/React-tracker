import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert=(message , type)=>{
 setAlert({
   msg: message,
   type: type
 })
 setTimeout(() => {
   setAlert(null);
 }, 3000);
  }

const toggleMode=()=>{
  if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor = '#01022e';
    showAlert("Dark Mode has been enabled",  "success");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled",  "success");
  }
}



  return (
    <>
    <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}  />
    <Alert alert = {alert} /> 
    
    {/* <Router> */}
    <div className="container my-3">
        {/* <Switch> */}

        {/* <Route path="/about"> */}
            {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
            <TextForm  showAlert={showAlert}  title="Enter Your Text Here To Analyze Below" mode={mode} />
        {/* </Route> */}
        
  
        {/* </Switch> */}
  
    </div>
    {/* </Router> */}
    </>

    
  );
}

export default App;
