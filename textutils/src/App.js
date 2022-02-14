import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('dark')

const toggleMode=()=>{
  if(mode ==='light'){
    setmode('dark');
  }
  else{
    setmode('light');
  }
}



  return (
    <>
    <Navbar title="Textutils" about="About" services = "services" mode={mode} togglemode={toggleMode}  />
    <TextForm title="Enter Your Text Here To Analyze Below" />
    {/* <About/> */}
    </>
  );
}

export default App;
