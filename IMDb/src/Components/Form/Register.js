import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'


export default function Register() {
    return (
        <div className='register'>
            <Link to="/">
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"></img>
            </Link>
            <div className="register-form">
                <h4>Create Account</h4>
                <form>
                    <h5>Your name</h5>
                    <input type="text"/>
                    <h5>Email</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <p>
                        By continuing, you agree to Amazon's <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"> Conditions of Use </a> and <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice.</a>
                    </p>
                    <Link to="/">
                        <button className="signIn" Link to ="/checkout">SignUp</button>
                    </Link>
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
