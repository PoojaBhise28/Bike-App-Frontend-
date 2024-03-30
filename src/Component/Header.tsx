import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Style/Header.css'

export default function Header() {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="container">
      <div className="layout-container">
      <nav className="navbar">
          <ul>
            <li onClick={() => handleClick("/")}>Home</li>
            <li onClick={() => handleClick("/bike")}>Bike Details</li>
            <li onClick={() => handleClick("/showList")}>ShowList</li>
            <li onClick={() => handleClick("/search")}>Search</li>
            <li onClick={() => handleClick("/advanceSearch")}>advanceSearch</li>
           
          </ul>
        </nav>
      </div>
    </div>
  );
}

