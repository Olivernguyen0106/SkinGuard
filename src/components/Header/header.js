import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import logo from './../../assets/logo.png';
import leftArrow from './../../assets/leftArrow.png';

const Header = ({ scrollToSection, homeRef, aboutRef, tipsRef, contactRef }) => {
  const currentUrl = window.location.pathname;
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header} style={{ background:'#F9F9F9', padding: '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo" style={{ width: '15%' }}>
        <img style={{ width: '100%' }} src={logo} alt="Logo"/>
      </div>
      {currentUrl === '/predict' ? (
         <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }} className={styles.circle}>
         <ul style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 0 }}>
            <li style={{display:"flex", gap:"12px"}} onClick={() => {
                  navigate('/');
                }} className={isActive("/") ? "active" : ""}>
                  <div style={{width:"2%", display:"flex", alignContent:"center"}}>
                    <img style={{width:"100%"}} src={leftArrow}/>
                  </div>
              <a>Home</a>
            </li>
         </ul>
       </div>
      ) : (
        <div style={{ width: '85%', display: 'flex', justifyContent: 'center' }} className={styles.circle}>
        <ul style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 0 }}>
              <li className={isActive("/") ? "active" : ""}>
                <a
                  onClick={() => {
                    scrollToSection(homeRef);
                    setSelected('home');
                    navigate('/');
                  }}
                  className={`${styles.heading} ${selected === 'home' ? styles.active : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToSection(aboutRef);
                    setSelected('about');
                  }}
                  className={`${styles.heading} ${selected === 'about' ? styles.active : ''}`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToSection(tipsRef);
                    setSelected('tips');
                  }}
                  className={`${styles.heading} ${selected === 'tips' ? styles.active : ''}`}
                >
                  Tips
                </a>
              </li>
              <li className={isActive("/predict") ? "active" : ""}>
                <a
                  onClick={() => {
                    navigate('/predict');
                    setSelected('predict');
                  }}
                  className={`${styles.heading} ${selected === 'predict' ? styles.active : ''}`}
                >
                  Predict
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToSection(contactRef);
                    setSelected('contact');
                  }}
                  className={`${styles.heading} ${selected === 'contact' ? styles.active : ''}`}
                >
                  Contact
                </a>
              </li>
        </ul>
      </div>
      )}
    </header>
  );
};

export default Header;
