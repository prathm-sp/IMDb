import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import './login.css'

function Login(props) {
    var [iname, isetName] = useState()

    const changeValue = (e) => {
        isetName(e.target.value);
    }

    const updateName = () => {
        props.dispatch({
            type: "Name",
            item: iname
        })
        console.log(props.dispatch)
    }

    return (
        <div className="login">
            <Link to="/">
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"></img>
            </Link>
            <div className="login-form">
                <h4>Sign in</h4>
                <form>
                    <h5></h5>
                    <input onChange={changeValue} type="text" required ></input>
                    <h5>E-mail</h5>
                    <input type="email" required />
                    <h5>password</h5>
                    <input type="password" required />
                    <Link to="/"><button onClick={updateName} className="signIn">Sign In</button></Link>
                </form>
                <p>
                    By continuing, you agree to IMDb's <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"> Conditions of Use </a> and <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice.</a>
                </p>
                <Link to="/register">
                    <button type="submit" className="signUp">Create your IMDb account</button>
                </Link>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        name: state.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
