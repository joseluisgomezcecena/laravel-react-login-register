import React, {SyntheticEvent, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Forgot = () => {

    const [email, setEmail] = useState('');
    const [notify, setNotify] = useState({
        show:false,
        error:false,
        message: ''
    });
    const submit = async (e: SyntheticEvent) =>{
        e.preventDefault();
        try {
            await axios.post('forgot',{email});

            setNotify({
                show: true,
                error: false,
                message: 'Message was sent.'
            })

        }catch (e) {
            setNotify({
                show: true,
                error: true,
                message: 'Message could not be sent.'
            })
        }
    }

    let info;

    if(notify.show){
        info = (
            <div className={notify.error ? 'alert alert-danger' : 'alert alert-success'} role="alert">
                {notify.message}
            </div>
        )
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <main className="form-signin">
                            <form onSubmit={submit}>
                                {info}
                                <h1 className="h3 mb-3 fw-normal">Please enter your email.</h1>

                                <div className="form-floating mb-1">
                                    <input type="email" className="form-control"  placeholder="name@example.com"
                                           onChange={e => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>


                                <button className="w-100 btn btn-lg btn-primary" type="submit">Restore Password</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
