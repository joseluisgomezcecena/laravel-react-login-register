import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import axios from "axios";
import Forgot from "./pages/Forgot";

function App() {

    const [user, setUser] = useState(null);
    const [login, setLogin] = useState(false);

    useEffect(()=>{
        (
            async () => {
                try {
                    const response = await axios.get('user');
                    console.log(response);
                    const user = response.data;
                    setUser(user);
                }catch (e){
                    setUser(null);
                    console.log(e);
                }

            }
        )
        (

        )
    },[login]);

    //                  <Route path="/" element={ ()=> <Home user={user}/>} />

  return (
    <div className="App">
      <Router>
          <Nav user={user} setLogin={()=>setLogin(false)}/>

          <Routes>
              <Route path="/"  element={  <Home user={user}/>}  />
              <Route path="/login" element={<Login setLogin={()=>setLogin(true)} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
