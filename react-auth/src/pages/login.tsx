import React, {SyntheticEvent, useState} from 'react';
import axios from "axios";
import {Navigate, Link} from "react-router-dom";

const Login = ({setLogin}: {setLogin: Function}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('login', {
            email,
            password
        });

        setRedirect(true);
        setLogin();
    }

    if (redirect){
        return <Navigate to="/" />
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <main className="form-signin">
                            <form onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                                <div className="form-floating mb-1">
                                    <input type="email" className="form-control"  placeholder="name@example.com"
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input type="password" className="form-control"  placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="mb-5">
                                    <Link to="/forgot">Forgot Password? Click Here</Link>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
