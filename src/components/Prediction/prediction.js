// components/Header.js
import React from "react";
import arrow from "./../../assets/arrow.svg"
import styles from './prediction.module.css'
import images from './../../assets/images.png'
import settings from './../../assets/settings.png'
import tips from './../../assets/tips.png'
import tricks from './../../assets/tricks.png'
import TitleText from './../TitleText/titleText'

const Prediction = () => {
  const items = [
    {id: 1, title: 'Skin Cancer Prediction', image: settings},
    {id: 2, title: 'Skin Care Tips', image: tips},
    {id: 3, title: 'Skin Care Tricks', image: tricks},
  ]
  return (
   <div>
    <TitleText text='Our Service'/>
    <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h4>KEY FEATURES</h4>
            <h1>We offer best <b>services</b></h1>
          </div>
            <div className={styles.items}>
            {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.icon}>
                    <img style={{width: "100%"}} src={item.image}/>
                  </div>
                  <p>{item.title}</p>
                </div>
            ))}
            </div>
        </div>
        <div className={styles.image}>
          <img style={{width:"100%"}} src={images}/>
          </div>
        </div>
    </div>
  );
}

export default Prediction;
