import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { createUser, logInUser, authenticateUser } from './requests';
import Navbar from './navbar';
import Footer from './footer';
import './home.scss';


const Home = () => {

  //   states

  const [signUpMessage, setSignUpMessage] = useState("");
  const [logInMessage, setLogInMessage] = useState("");

  //   handlers

  const handleSignUp = (event) => {
    event.preventDefault();
    const username = $('#newUsernameInput').val();
    const email = $('#newEmailInput').val();
    const password = $('#newPasswordInput').val();
    createUser(username, email, password, function (response) {
      if (response.success == false) {
        setSignUpMessage(response.error);
      }
      else {
        setSignUpMessage("Success! Please log in");
        $('#newUsernameInput').val('');
        $('#newEmailInput').val('');
        $('#newPasswordInput').val('');
      }
    });
  }

  const handleLogIn = (event) => {
    event.preventDefault();
    const username = $('#usernameInput').val();
    const password = $('#passwordInput').val();
    logInUser(username, password, function (response) {
      if (response.success == true) {
        window.location.assign('/feed');
      }
      else {
        setLogInMessage("Error logging in. Please try again")
      }
    });
  }

  //  go to feed if user is logged in

  useEffect(() => {
    // authenticateUser(function (response) {
    //   if (response.authenticated == true) {
    //     window.location.assign('/feed');
    //   }
    // })
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <div id="homePage" className="container">
        <div className="row">
          <div className="col-4">
            <h1><strong>Welcome to Twitter.</strong></h1>
            <p>Connect with your friends &#8212; and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
          </div>
          <div className='col-4'>
          <form onSubmit={handleSignUp}>
              <p>Create your account</p>
              <div>
                <label htmlFor="newUsernameInput" className="form-label" hidden>Username</label>
                <input type="text" className="form-control" id="newUsernameInput" placeholder="username" minLength="3" required></input>
              </div>
              <div>
                <label htmlFor="newEmailInput" className="form-label" hidden>Email adress</label>
                <input type="email" className="form-control" id="newEmailInput" placeholder="email" required></input>
              </div>
              <div>
                <label htmlFor="newPasswordInput" className="form-label" hidden>Password</label>
                <input type="password" className="form-control" id="newPasswordInput" placeholder="password" minLength="8" required></input>
              </div>
            <button type="submit" className="btn btn-default btn-warning" onSubmit={handleSignUp}>Sign up</button>
            <p>{signUpMessage}</p>
            </form>
          </div>
          <div className='col-4'>
          <form onSubmit={handleLogIn}>
              <p>Already have an account?</p>
              <div>
                <label htmlFor="usernameInput" className="form-label" hidden>Username</label>
                <input type="text" className="form-control" id="usernameInput" placeholder="username" required></input>
              </div>
              <div>
                <label htmlFor="passwordInput" className="form-label" hidden>Password</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="password" required></input>
              </div>
            <button type="submit" className="btn btn-default btn-primary" onSubmit={handleLogIn}>Log In</button>
            <p>{logInMessage}</p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
