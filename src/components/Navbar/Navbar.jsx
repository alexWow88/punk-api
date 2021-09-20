import React from 'react';
import "./Navbar.scss";

const Navbar = (props) => {
  const { filterArr } = props;


  return (
    <div className="nav">
      <form className="nav__form">
        <label>Search: </label>
        <input onChange={filterArr} />       
      </form>
    </div>
  )
}

export default Navbar
