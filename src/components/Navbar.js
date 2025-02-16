import React from "react";
import {NavLink} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" path="/">
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {/* <div className="buttons">
            <button className="btn btn-primary mx-2" onClick={()=> props.toggleMode('primary')} style={{cursor: 'pointer'}} >Primary</button>
            <button className="btn btn-success mx-2" onClick={()=> props.toggleMode('succss')} style={{cursor: 'pointer'}}>Success</button>
            <button className="btn btn-info mx-2" onClick={()=> props.toggleMode('info')} style={{cursor: 'pointer'}}>Info</button>
            <button className="btn btn-warning mx-2" onClick={()=> props.toggleMode('warning')} style={{cursor: 'pointer'}}>Warning</button>
          </div> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} ms-2`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
        </div>
      </div>
    </nav>
  );
}

