// components/Header.js
import React from "react";
import foods from "./../../assets/foods.png"
import skincare from "./../../assets/skincare.png"
import clean from "./../../assets/clean.png"

function Tips() {
  const listTips = [
    {
      id: 1,
      title: 'Food Tips',
      context: 'Avoid foods that are high in sugar, saturated fat, and salt. Instead, focus on:',
      list: [
        {id: 1, text: 'Fresh fruits and vegetables'},
        {id: 2, text: 'Whole grains'},
        {id: 3, text: 'Lean proteins'},
        {id: 4, text: 'Healthy fats, such as olive oil, avocados, and nuts'},
      ],
      image: foods,
    },
    {
      id: 2,
      title: 'SKIN CARE TIPS',
      context: '',
      list: [ 
        {id: 1, text: 'Wear sunscreen daily : Apply a broad-spectrum, water-resistant sunscreen with an SPF of 30 or highe'},
        {id: 2, text: 'Stay out of tanning be :Tanning beds emit harmful UV radiation that causes skin cancer. In fact, one indoor tanning session can increase your risk of developing melanoma by 20%, squamous cell carcinoma by 67% and basal cell carcinoma by 29%.'},
        {id: 3, text: 'Keep your hands off your face : Whenever you touch your face, you transfer dirt, germs, and oil from your hands to your'},
      ],
      image: skincare,
    },
    {
      id: 3,
      title: 'Face Washing tips',
      context: '',
      list: [
        {id: 1, text: 'Use a gentle, non-abrasive cleanser.'},
        {id: 2, text: 'Wet your face with lukewarm water and use your fingertips.'},
        {id: 3, text: 'Resist the temptation to scrub your skin.'},
        {id: 4, text: 'Rinse with lukewarm water and pat dry with a soft towel.'},
        {id: 5, text: 'Apply moisturizer.'},
        {id: 6, text: 'Limit washing to twice a day and after sweating.'},
      ],
      image: clean,
    },
  ]
  const box = {
    display:'flex',
    gap: '80px',
    padding: '20px 60px',
    borderRadius: '0 500px 500px 0',
    alignItems: 'center'
  }
  const textBox = {
    backgroundColor: '#F0EBE380',
    borderRadius: '0 500px 500px 0',
    color: '#3E3C3C',
    listStyleType: 'circle',
    lineHeight: '20px',
    padding: '20px 60px 20px 30px',
    margin: 0,
  }
  const list = {
    padding: '20px 60px 20px 30px',
    margin: 0,
  }
  return (
   <div>
    <h1 style={{fontFamily: 'Aboreto'}}>Tips</h1>
    {listTips.map((tip) => (
      <div style={box} key={tip.id}>
          <div style={{width: '30%'}}>
              <img style={{width: '100%'}} src={tip.image}/>
          </div>
          <div style={{textAlign:'left', width: '70%' }}>
              <p style={{fontWeight: '700', color:'#002B9A', textAlign:'center', textTransform: 'uppercase', fontSize: '20px'}}>{tip.title}</p>
              <div style={textBox}>
                <p style={{margin: 0}}>{tip?.context}</p>
                <ul key={tip?.list?.id} style={{ padding: tip?.context ? undefined : '0', margin: tip?.context ? undefined : '0' }}>
                {tip.list.map((list) => (
                    <li>{list.text}</li>
                  ))}
                  </ul>
              </div>
          </div>
      </div>

    ))}
   </div>
  );
}

export default Tips;
