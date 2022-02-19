import React, {SyntheticEvent, useState} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";

const Register = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [redirect, setRedirect] =useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post("register",{
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: passwordConfirm
        });

        setRedirect(true);
        //console.log(response);
    }

    if(redirect){
        return  <Navigate to="/login" />
    }
    
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <main className="form-signin">
                            <form className="form-signin" onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal">Register</h1>

                                <div className="form-floating mb-1">
                                    <input type="text" className="form-control"  placeholder="Name"
                                    onChange={e => setFirstName(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">First Name</label>
                                </div>


                                <div className="form-floating mb-1">
                                    <input type="text" className="form-control"  placeholder="Last Name"
                                    onChange={e => setLastName(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Last Name</label>
                                </div>


                                <div className="form-floating mb-1">
                                    <input type="email" className="form-control"  placeholder="name@example.com"
                                    onChange={e => setEMail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>


                                <div className="form-floating mb-1">
                                    <input type="password" className="form-control"  placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>


                                <div className="form-floating mb-1">
                                    <input type="password" className="form-control"  placeholder="Password Confirm"
                                    onChange={e => setPasswordConfirm(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password Confirm</label>
                                </div>


                                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
