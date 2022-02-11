import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Textutils" about="About" services = "services" />
    <TextForm title="Enter Your Text Here To Analyze Below" />
    </>
  );
}

export default App;
