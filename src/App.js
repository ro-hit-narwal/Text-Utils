import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    const [mode, setmode] = useState('dark');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => 
    {
      setAlert
      ({
        msg:message,
        type:type
      })
    }
    const switchMode = () => 
    {
        if (mode === 'light')
        {
            setmode('dark')
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode Enabled, Press again for next Mode.", "success")
        }
        else if (mode === 'dark')
        {
            setmode('classic')
            document.body.style.backgroundColor = '#212529';
            showAlert("Dark Mode Enabled, Press again for next Mode.", "success")
        }
        else if (mode === "classic")
        {
            setmode('vintage')
            document.body.style.background = '#b9b49e'
            showAlert("Classic Mode Enabled, Press again for next Mode.", "success")
        }
        else if (mode === 'vintage')
        {
            setmode('light')
            document.body.style.background = '#2f424b'
            showAlert("Vintage Mode Enabled, Press again for next Mode.", "success")
        } 
    }
  return (
    <>
    <Navbar title="WordTicker" switchMode = {switchMode} mode = {mode}/>
    <Alert alert = {alert} />
    <TextForm title="Enter your text here" mode = {mode}/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm title="Enter your text here" mode = {mode}/>} />
        <Route path="/about" element={<About mode = {mode}/>} />
      </Routes>
    </BrowserRouter> */}
      
      {/* <div className="container">
        
      </div> */}
    </>
  );
}

export default App;
