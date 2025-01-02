// components/Header.js
import React from "react";
import styles from './aboutus.module.css'
import TitleText from "../TitleText/titleText";
import image from "./../../assets/Hero_img.png"

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div style={{width: "30%"}}>
            <img style={{width: '100%'}} src={image}/>
        </div>
        <div style={{width: "60%"}}>
            <h2>About Us</h2>
            <span>
            At SkinGuard, we believe your skin is your story, and every story deserves the utmost care and attention. Our mission is simple yet powerful: to empower you with the tools and knowledge to protect and celebrate your skin.
<br/>We combine state-of-the-art technology with a human touch, offering advanced tools to detect early signs of skin cancer and personalized skincare insights tailored just for you. SkinGuard goes beyond monitoring—it's about creating a partnership with you on your journey to healthier, worry-free skin.
            </span>
        </div>
      </div>
   </div>
  );
}

export default AboutUs;
