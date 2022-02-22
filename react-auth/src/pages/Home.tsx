import React from 'react';


const Home = ({user}: {user:any}) => {

    let message;
    if(user)
    {
        message = `Hello! ${user.first_name} ${user.last_name}. You're logged in.`;
    }else
    {
        message = 'You are not logged in';
    }



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
