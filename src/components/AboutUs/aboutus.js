// components/Header.js
import React from "react";
import FacialMask from "./../../assets/facialMask.png";
import styles from './aboutus.module.css'
import TitleText from "../TitleText/titleText";

const AboutUs = () => {
  return (
    <div className={styles.box}>
      <TitleText text='About Us' color=''/>
      <div>
        <p className={styles.content}>
          SkinGuard—your trusted guardian for healthy skin! With advanced tools
          to detect early signs of skin cancer and personalized tips for daily
          protection, we’re here to help you stay confident and safe. Let
          SkinGuard be your guide to healthier, worry-free skin, every day. Our
          user-friendly interface ensures that you can easily monitor your
          skin's health, empowering you with the knowledge and resources to take
          control of your skincare journey.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
