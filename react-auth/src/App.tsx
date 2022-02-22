import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import axios from "axios";

function App() {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        (
            async () => {
                try {
                    const response = await axios.get('user');
                    console.log(response);
                    //const user = response.data;
                    setUser(response.data);
                }catch (e){
                    //setUser(null);
                    console.log(e);
                }

            }
        )
        (

        )
    },[]);

    //                  <Route path="/" element={ ()=> <Home user={user}/>} />

  return (
    <div className="App">
      <Router>
          <Nav user={user} />

          <Routes>
              <Route path="/" element={  <Home user={user}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
