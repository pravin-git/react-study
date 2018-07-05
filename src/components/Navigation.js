import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Show">Show</NavLink>
      </div>    
    );
  }
}

export default Navigation;  