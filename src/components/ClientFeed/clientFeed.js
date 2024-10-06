import React from "react";
import styles from './clientFeed.module.css'
import images from './../../assets/images.png'
import settings from './../../assets/settings.png'
import tips from './../../assets/tips.png'
import tricks from './../../assets/tricks.png'
import avatar from './../../assets/avatar.png'
import listImg from './../../assets/listImg.png'


const ClientFeed = () => {
  const items = [
    {id: 1, title: 'Skin Cancer Prediction', image: settings},
    {id: 2, title: 'Skin Care Tips', image: tips},
    {id: 3, title: 'Skin Care Tricks', image: tricks},
  ]
  return (
   <div>
    <div className={styles.banner}>
    </div>
        <div className={styles.box}>
            <div className={styles.image}>
                <img style={{width: "100%"}} src={avatar}/>
            </div>
            <div className={styles.info}>
                <p>Matthew Paul</p>
                <span>Perfect, very good job! Thank you for the amazing website .
                  Really impressed with the high quality and quick turnaround time. Highly recommend.</span>
            </div>
            <div className={styles.listImg}>
                <img src={listImg}/>
            </div>
        </div>
    </div>
  );
}

export default ClientFeed;
