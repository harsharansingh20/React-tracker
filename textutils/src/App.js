import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

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
    <Navbar title="Textutils" about="About" services = "services" mode={mode} toggleMode={toggleMode}  />
    <Alert alert = {alert} />
    <TextForm  showAlert={showAlert}  title="Enter Your Text Here To Analyze Below" mode={mode} />
    {/* <About/> */}
    </>
  );
}

export default App;
