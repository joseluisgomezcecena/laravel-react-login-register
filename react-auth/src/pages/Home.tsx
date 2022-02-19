import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [message, setMessage] = useState('');

    useEffect(()=>{
        (
            async () => {
                try {
                    const response = await axios.get('user');
                    console.log(response);
                    const user = response.data;
                    setMessage(`Hello! ${user.first_name} ${user.last_name}. You're logged in.` )
                }catch (e){
                    setMessage('You are not logged in');
                }

            }
        )
        (

        )
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    {message}
                </div>
            </div>
        </div>
    );
};

export default Home;
