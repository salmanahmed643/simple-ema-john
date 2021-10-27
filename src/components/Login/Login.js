import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth(); 
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/shop'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }


    return (
        <div className="login_form">
            <div className="login">
                <h1> Login </h1>
                <form>
                    <input type="email" name="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p> New to ema-john? <Link to="/register"> Create Account </Link> </p>
                <div>-------or-------</div>
                <button onClick={handleGoogleLogin}> Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;