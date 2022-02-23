import React, {SyntheticEvent, useState} from 'react';
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";

const Reset = ({match}: {match: any}) => {
        const token = useParams();
        const [password, setPassword] = useState('');
        const [passwordConfirm, setPasswordConfirm] = useState('');
        const [redirect, setRedirect] = useState(false);
        console.log(match);

        const submit = async (e:SyntheticEvent) =>{
            //console.log("hi");
            e.preventDefault();
            //const token = match.params.token;
            //const token = useParams();
            await axios.post('reset', {
                token,
                password,
                password_confirm: passwordConfirm
            });

            setRedirect(true);
        }



    if(redirect){
        return <Navigate to="/login" />
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <main className="form-signin">
                            <form onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal">Enter a new password.</h1>

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


                                <button className="w-100 btn btn-lg btn-primary" type="submit">Change Password</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset;
