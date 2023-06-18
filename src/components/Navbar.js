import React from 'react'                   // just write rfc aur boilerplate sa aa jayga
// import PropTypes from 'react'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>     
                                                                                                    {/* use `` instead of "" or '' for js curly brackets */}
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>

        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to={`/about`}>{props.aboutText}</Link>
        </li>  */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
        <input className="form-check-input" onClick = {props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

// Navbar.propTypes={
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }
// ye hm likhe error avoid krne ke liye like agar hme str pass krani thi pr no. kra dia to galt hogya..
// to galti pakad nahi payge to pehle hi check laga dia

Navbar.defaultProps ={
    title: 'Set title here',
    aboutText: 'About text here'
}