import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light')

const toggleMode=()=>{
  if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor = '#01022e';
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';

  }
}



  return (
    <>
    <Navbar title="Textutils" about="About" services = "services" mode={mode} toggleMode={toggleMode}  />
    <Alert alert = "hello" />
    <TextForm title="Enter Your Text Here To Analyze Below" mode={mode} />
    {/* <About/> */}
    </>
  );
}

export default App;
