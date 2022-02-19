import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/" end> Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/login" end> Login </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/register" end> Register </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>



                </div>
            </nav>
        </div>
    );
};

export default Nav;
