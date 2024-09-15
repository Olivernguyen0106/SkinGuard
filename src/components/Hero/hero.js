// components/Header.js
import React from "react";
import FacialMask from "./../../assets/facialMask.png"

function Hero() {
  const text = {
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, #0048FF 0%, #D6008D 100%)',
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: 'Aboreto',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '56px',
    textAlign: 'left',
    margin: 0
  }
  const context = {
    fontFamily: 'Aboreto',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '36px',
    textAlign: 'left',

  }
  return (
   <div style={{width: "100%",display:"flex", alignItems: "center", textAlign:"left", justifyContent: "space-between", margin: '24px 0'}}>
    <div style={{width: "60%"}}>
        <p style={text}>Detect Early, Protect Daily, Live Fearlessly!</p>
        <span style={context}>Welcome to SkinGuard—your trusted guardian for healthy skin! With advanced tools to detect early signs of skin cancer and personalized tips for daily protection, we’re here to help you stay confident and safe. Let SkinGuard be your guide to healthier, worry-free skin, every day.</span>

    </div>
    <div style={{width: "30%"}}>
        <img style={{width: '100%'}} src={FacialMask}/>

    </div>
   </div>
  );
}

export default Hero;
