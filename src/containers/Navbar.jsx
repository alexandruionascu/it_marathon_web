import React from 'react';


function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Today's Job</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
  </nav>
  
  );
}

module.exports = Navbar;
