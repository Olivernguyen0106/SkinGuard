import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import logo from './../../assets/logo.png';


const Header = ({ scrollToSection, aboutRef, tipsRef, homeRef, contactRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <header className={styles.header} style={{ background:'#F9F9F9', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo" style={{ width: '15%' }}>
         <img style={{ width: '100%' }} src={logo} alt="Logo"/>
      </div>
      <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }} className={styles.circle}>
        <ul style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 0 }}>
          <li className={isActive("/") ? "active" : ""}>
            <a 
            onClick={() => navigate('/')}
            // onClick={() => scrollToSection(homeRef)}
             className={styles.heading}>Home</a>
          </li>
          <li>
            <a 
            // onClick={() => scrollToSection(aboutRef)}
             className={styles.heading}>About Us</a>
          </li>
          <li>
            <a 
            // onClick={() => scrollToSection(tipsRef)}
             className={styles.heading}>Tips</a>
          </li>
          <li className={isActive("/predict") ? "active" : ""}>
          <a 
          onClick={() => navigate('/predict')}
           className={styles.heading}>Predict</a> {/* Điều hướng tới trang Predict */}
          </li>
          <li>
            <a 
            // onClick={() => scrollToSection(contactRef)}
             className={styles.heading}>Contact</a>
          </li>
          <button className={styles.button}>Sign In</button>
        </ul>
      </div>
    </header>
  );
};

export default Header;


