import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login_form">
            <div className="login">
                <h1> Register: Create Account </h1>
                <form>
                    <input type="email" name="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" placeholder="Your Password"/>
                    <br />
                    <input type="password" name="password" placeholder="Re-enter Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p> Already have an account? <Link to="/login"> Login </Link> </p>
                <div>-------or-------</div>
                <button> Google Sign In </button>
            </div>
        </div>
    );
};

export default Register;