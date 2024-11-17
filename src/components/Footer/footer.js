// components/Header.js
import React, { useState } from "react";
import logo from './../../assets/logo.png';
import phone from './../../assets/phone.png';
import github from './../../assets/github.png';
import email from './../../assets/email.png';
import styles from './footer.module.css'

const Footer = () => {
    const links = [
        {id: 1, title: 'Email', icon: email, link: 'mailto:binh@gmail.com' },
        {id: 2, title: 'Phone', icon: phone, link: 'tel:+849066589' },
        {id: 3, title: 'Github', icon: github, link: 'mailto:someone@example.com' },
    ]
  return (
    <footer className={styles.footer}>
      <div style={{ justifyContent:'center', paddingTop: '6px'}}>
            <img style={{width: '30%'}} src={logo}/>
      </div>
        <ul style={{ display: 'flex',alignItems: 'center', justifyContent:'center', padding: '6px 0', margin: '.5rem', textAlign: 'center', listStyle: 'none', gap: '12px'}}>
            {links.map((link) => (
                <li className={styles.iconStyle} key={link.id}><a href={link.link} style={{listStyleType: 'none'}}><img style={{width: '100%'}} src={link.icon}/></a></li> 
            ))}
        </ul>
        <ul style={{ display: 'flex', padding: 0, margin: '.5rem', textAlign: 'center', justifyContent:'center', paddingTop: '6px', fontSize:'12px',fontFamily: 'Aboreto',}}>
          <li><a href="#home">Home</a><span style={{ padding: '0 10px' }}>|</span></li> 
          <li><a href="#about">About</a><span style={{ padding: '0 10px' }}>|</span></li>
          <li><a href="#prediction">Prediction</a><span style={{ padding: '0 10px' }}>|</span></li>
          <li><a href="#news">Tips</a><span style={{ padding: '0 10px' }}>|</span></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div style={{ background:'#2382A0', padding: '12px'}}>
            <h4 style={{margin: 0, color: '#fff', fontSize: '16px', fontWeight: 600, paddingBottom: '12px', fontFamily: 'Aboreto',}}>Detect Early, Protect Daily, Live Fearlessly!</h4>
            <p style={{margin: 0, color: '#fff', fontSize: '12px', fontWeight: 400}}>© Copyright 2024. All Rights Reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
