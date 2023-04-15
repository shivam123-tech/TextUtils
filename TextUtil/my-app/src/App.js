
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert.js';
import TextArea from './components/TextArea.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const[mode,setMode]=useState('light');
  const[alert, setAlert] = useState(null);
  // exercise 2
  const[green,setGreen] = useState(mode);
  const[gree,setGree] = useState('');
  const toggleGreen = () =>{
    if(green==='light'){
      document.body.style.backgroundColor='green';
     
    }
    else{
      document.body.style.backgroundColor='grey;'
    }
  }

 const showAlert =(message,type) =>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
 }

//  const removeClass=()=>{
//   document.body.classList.remove('primary');
//   document.body.classList.remove('secondary');
//   document.body.classList.remove('success');
//   document.body.classList.remove('danger');
//  }


  const toggleMode = () =>{

    // removeClass();
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      // document.title="TextUtils - Darkmode";
    //   setInterval(
    //     () =>{
    //     document.title="Enable my service"
    //     },
    //  2000 )
    //  setInterval(
    //   () =>{
    //   document.title="Download my service"
    //   },
    // 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
   //  document.title="TextUtils - Whitemode";

    }
  }
  return (
 
<Router>
  <>
    <Navbar title="Navbar" about="About us" mode={mode} toggle={toggleMode} togg={toggleGreen}/>
    < Alert alert={alert}/>
    <div className="container mb-3">
        <Routes>   
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/home" element={<TextArea heading="TextUtils- Word Counter, Character Counter" mode={mode} showAlert={showAlert} togg={toggleGreen}></TextArea> 
} />
        </Routes>
      </div>
      </>
   </Router>
  );
}

export default App;
