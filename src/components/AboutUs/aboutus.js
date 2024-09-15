// components/Header.js
import React from "react";
import FacialMask from "./../../assets/facialMask.png"

function AboutUs() {
  const box = {
    display:'flex',
    alignItems: 'center',
    textAlign:'Left',
    borderRadius: '500px',
    border: '0px 3px 0px 0px',
    opacity: '0px',
    padding: '16px',
    backgroundColor:'#EDF7FF',
    gap: '40px',
    margin: '24px 0',
  }
  return (
   <div style={box}>
    <div style={{width: '20%',height:'100%' ,textAlign:'center', color:'#2382A0', fontSize:'24px', background:'#fff', height:'100%', borderRadius:'500px 0 0 500px', padding: '50px 0'
    }}><p>About Us</p></div>
    <div style={{width: '80%', letterSpacing: '15%', fontSize: '16px'}}>
        <p style={{margin:0, color:'#555555', letterSpacing: '2px'}}>SkinGuard—your trusted guardian for healthy skin! With advanced tools to detect early signs of skin cancer and personalized tips for daily protection, we’re here to help you stay confident and safe. Let SkinGuard be your guide to healthier, worry-free skin, every day. Our user-friendly interface ensures that you can easily monitor your skin's health, empowering you with the knowledge and resources to take control of your skincare journey.</p>
    </div>
   </div>
  );
}

export default AboutUs;
