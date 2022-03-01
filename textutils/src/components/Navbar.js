import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    
    <>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/about">{props.about}</a>
        {/* <a className="nav-link" href="#">Pricing</a> */}
      </div>
    </div>
    <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`} >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>  
</nav>
    </>

  )
}
  

Navbar.propTypes = { 
  title : PropTypes.string
                    
}
Navbar.defaultProps = {
title :  'set title here',
about : 'About'
}


    
