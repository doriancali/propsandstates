import React from 'react'
import Products from '../products/Products'
import './signup.css'

function Signup(handleClick) {
    handleClick = () => {
        console.log('hwb');
    }

  return (
    <div className="signUpForm">
        <h1>Sign Up</h1>
        <form>
            <label>Email: 
                <input type="email" className="inputbox" placeholder="Enter email"></input>
            </label>
            <br />
            <label>Password: 
                <input type="password" className="inputbox" placeholder="Enter password" required></input>
            </label>
            <br />
            <label>Password: 
                <input type="password" className="inputbox" placeholder="Confirm password" required></input>
            </label>
            <p>
                <span>
                    <input type="checkbox"></input>
                </span>
                I agree to the terms of service
            </p>
            <button type="button" className="signupbutton" onClick={() =>
            handleClick()}
            >Sign Up
            </button>
            <hr />
            <p className="or">OR</p>
            <button type="button" className="twitterbutton">Login with twitter</button>
            <p> 
                Do you have an account? <a href="#">Sign in </a>
            </p>
        </form>
    </div>
  )
}

export default Signup