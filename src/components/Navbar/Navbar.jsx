import React from 'react';
import "./Navbar.scss";

const Navbar = (props) => {
  const { searchText, setSearchText, filterSearchArr } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
    filterSearchArr();
  }

  return (
    <div className="nav">
      <form className="nav__form">
        <label>Search: </label>
        <input type="text" value={searchText} onChange={handleChange} />       
      </form>
    </div>
  )
}

export default Navbar
