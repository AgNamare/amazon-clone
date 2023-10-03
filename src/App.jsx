import { useEffect } from 'react';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useStateValue } from './stateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      console.log("THE USER IS >>>", user);
      if(user) {
        dispatch({
          type: "SET_USER",
          user: user
        })
      }
      
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
        <Route path='/login' element={<Login/> }/>
          <Route path='/' element={<><Header/><Home/></>}/>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
