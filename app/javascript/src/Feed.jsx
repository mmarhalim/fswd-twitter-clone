import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';

const Feed = () => {
  return(
    <React.Fragment>
      <Navbar />
      <div id="feed" className="container">
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
    <Feed />,
    document.body.appendChild(document.createElement('div'))
  )
});