import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { Link } from 'react-router-dom';

 function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
       </ul>
         
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button type="button" class="btn btn-success btn-circle btn-xl mx-2" onClick={props.togg}></button>


{/* 
<div className='btn btn-primary rounded mx-2' style={{height:'30px', width:'30px' }} onClick={()=>props.toggle('primary')} ></div>
<div className='btn btn-secondary rounded mx-2'  onClick={()=>props.toggle('secondary')} style={{height:'30px', width:'30px' }} ></div>
<div className='btn btn-success rounded mx-2' onClick={()=>props.toggle('success')}  style={{height:'30px', width:'30px' }} ></div>
<div className='btn btn-danger rounded mx-2' onClick={()=>props.toggle('danger')}  style={{height:'30px', width:'30px' }} ></div>
 */}

        <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'} mx-3`}>
       <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
      </form>
    </div>
  </div>
</nav>
    
    
    </>
  )
}
export default Navbar;
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}
// you can set default props here
Navbar.defaultProps = {
    title : "Set title here",
    about : "about section"
}
