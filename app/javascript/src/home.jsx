import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import './home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="homePage" className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1>Hello</h1>
          </div>
          <div className='col-6'>
            <h1>World!</h1>
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
