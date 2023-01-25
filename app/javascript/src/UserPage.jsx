import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';

const UserPage = () => {
  return(
    <React.Fragment>
      <Navbar />
      <div id="userFeed" className="container">
        <div className='row'>
          <div className='col-12 twitter-feed'>
            <h1>User Feed</h1>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <UserPage />,
    document.body.appendChild(document.createElement('div'))
  )
});
