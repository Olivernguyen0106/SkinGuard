// components/Header.js
import React from "react";
import logo from './../../assets/logo.png';


function Header() {
    const heading = {
        color: '#333',
        textDecoration: 'none',
        fontSize: '16px',
        background: '#F9F9F9',
    }
    const button = {
        gap: '10px',
        borderRadius: '100px',
        border: '2px solid #2382A0',
        background: '#fff',
        color: '#333',
        fontSize: '20px0',
    }
  return (
    <header className="header" style={{ background:'#F9F9F9', gap:'80px', padding: '12px 20px'}}>
      <div className="logo" style={{width: '15%'}}>
            <img style={{width: '100%'}} src={logo}/>
      </div>
      <div style={{width: '85%', display: 'flex', justifyContent:'center'
      }}>
        <ul style={{width: '100%', display: 'flex',alignItems: 'center', justifyContent:'space-between', margin: 0}}>
          <li><a style={heading} href="#home">Home</a></li>
          <li><a style={heading} href="#about">About</a></li>
          <li><a style={heading} href="#prediction">Prediction</a></li>
          <li><a style={heading} href="#news">Tips</a></li>
          <li><a style={heading} href="#contact">Contact Us</a></li>
            <button style={button} className="sign-in">Sign In</button>
        </ul>
      </div>
    </header>
  );
}

export default Header;
