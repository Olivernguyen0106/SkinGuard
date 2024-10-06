// components/Header.js
import React from "react";
import styles from './tips.module.css'
import vega from './../../assets/vega.png'
import news from './../../assets/news.png'
import img1 from './../../assets/1.png'
import img2 from './../../assets/2.png'
import skin3 from './../../assets/skin3.png'
import skin4 from './../../assets/skin4.png'
import TitleText from './../TitleText/titleText'

const Tips = () => {
  const tips = [
    {
      id: 1,
      title: 'Eat your way to fabulous skin',
      context: 'Beta-carotene, found in orange fruit and vegetables such as carrots, sweet potatoes and pumpkins, and lutein, found in kale, papaya and spinach, are both important for normal skin cell development and healthy skin tone.',
      image: vega,
    },
    {
      id: 2,
      title: '6 Common Face Washing Mistakes & How To Overcome Them',
      context: '',
      image: skin3,
    },
    {
      id: 3,
      title: 'How To Identify Your Skin Type, According To a Dermatologist',
      context: '',
      image: skin4,
    },
  ]
  const headlines = [
    {
      id: 1,
      title: 'Reducing Risk for Skin Cancer',
      context: 'Most skin cancers are caused by too much exposure to ultraviolet rays. UV rays come from the sun, tanning beds, ... can damage skin cells.',
      image: news,
    },
    {
      id: 2,
      title: 'Lots of People Apply Sunscreen Wrong. Here’s How to Do It Right.',
      context: '',
      image: img1,
    },
    {
      id: 3,
      title: 'Moisturizers: The Difference Between Gels, Lotions, Creams, and Ointments',
      context: '',
      image: img2,
    },
  ]
  return (
   <div>
    <TitleText text='Tips & Tricks' color='#60E1CB'/>
    <div className={styles.titles}>
      <h1>Popular</h1>
      <h1>Top Headline</h1>
    </div>
    <div className={styles.grid}>
      <div className={styles.popular}>
        <div className={styles.content}>
          <p style={{fontSize: '20px'}} className={styles.title}>{tips[0].title}</p>
          <span>{tips[0].context}</span>
        </div>
        <div className={styles.image}>
          <img style={{width: '100%'}} src={tips[0].image}/>
        </div>
      </div>
      {tips
        .filter(tip => tip.id > 1)
        .map((tip) => (
          <div key={tip.id} className={styles.tips3}>
            <div className={styles.content}>
              <div className={styles.image}>
                <img style={{width: '100%'}} src={tip.image}/>
              </div>  
              <p className={styles.title}>{tip.title}</p>
            </div>
          </div>  
        ))
      }
      <div className={styles.headline}>        
        <div className={styles.mainTips}>
            <div className={styles.image}>
              <img style={{width: '100%'}} src={headlines[0].image}/>
            </div>  
            <p className={styles.title}>{headlines[0].title}</p>
            <span>{headlines[0].context}</span>
        </div>
        <div className={styles.listHead}>
        {headlines
          .filter(item => item.id > 1)
          .map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.img}>
                <img style={{width: '100%'}} src={item.image} alt={item.title}/>
              </div>
              <p className={styles.title}>{item.title}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
   </div>
  );
}

export default Tips;
