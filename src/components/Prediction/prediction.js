// components/Header.js
import React from "react";
import computer from "./../../assets/computer.png"
import arrow from "./../../assets/arrow.svg"

function Prediction() {
  const box = {
    backgroundColor: '#FFF5FF',
    display:'flex',
    gap: '80px',
    padding: '20px 60px',
    borderRadius: '0 500px 500px 0',
  }
  const button = {
    display:'flex',
    alignItems: 'center',
    textAlign: 'center',
    height: 'fit-content',
    width: 'fit-content',
    gap: '10px',
    border: '2px solid #2382A0',
    borderRadius: '100px',
    textTransform: 'uppercase',
    color: '#2382A0',
    padding: '5px 20px',
    fontSize: '14px',
    background: 'none',
  }
  return (
   <div style={{margin: '24px 0'}}>
    <h1 style={{    fontFamily: 'Aboreto',}}>Our Service</h1>
    <div style={box}>
        <div style={{textAlign:'left', width: '70%' }}>
            <h1 style={{fontWeight: '700', color:'#002B9A'}}>Prediction</h1>
            <p style={{color: '#555555', }}>Using advanced technology, SkinGuard provides fast, accurate predictions to help you stay informed and proactive about your skin’s health. Take a step towards early detection and peace of mind with just a few clicks. Your skin’s safety starts here!
            </p>
            <button style={button}>Learn more <img src={arrow}/></button>
        </div>
        <div style={{width: '30%'}}>
            <img style={{width: '100%'}} src={computer}/>
        </div>
    </div>
   </div>
  );
}

export default Prediction;
