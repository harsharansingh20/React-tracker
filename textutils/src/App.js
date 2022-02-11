import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="set title here" about="set about here" services = "services" />
    <TextForm/>
    </>
  );
}

export default App;
