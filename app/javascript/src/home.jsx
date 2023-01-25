import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import './home.scss';
import $ from 'jquery';
import '../packs/requests';


const Home = () => {

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
            <form>
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
              <button type="submit" className="btn btn-default btn-warning">Sign up</button>
            </form>
          </div>
          <div className='col-4'>
            <form>
              <p>Already have an account?</p>
              <div>
                <label htmlFor="usernameInput" className="form-label" hidden>Username</label>
                <input type="text" className="form-control" id="usernameInput" placeholder="username" required></input>
              </div>
              <div>
                <label htmlFor="passwordInput" className="form-label" hidden>Password</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="password" required></input>
              </div>
              <button type="submit" className="btn btn-default btn-primary">Log In</button>
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
