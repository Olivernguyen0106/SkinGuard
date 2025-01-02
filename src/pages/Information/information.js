"use client";

import Header from "../../components/Header/header";
import styles from './information.module.css';
import banner1 from './../../assets/Banner1_inf.png';
import arrow from './../../assets/INFO_ANGLE_DOWN.png';
import TitleText from "../../components/TitleText/titleText";
import mole from './../../assets/INFO_MOLE.png';
import cancer from './../../assets/INFO_CANCER.png';
import typesImg from './../../assets/types.png';
import banner2 from './../../assets/Banner2.png';
import banner3 from './../../assets/Banner3.png';
import banner4 from './../../assets/Banner4.png';
import Actinic from './../../assets/Actinic.png';
import Basal from './../../assets/Basal.png';
import Benign from './../../assets/Benign.png';
import Dermatofibroma from './../../assets/Dermatofibroma.png';
import Melanocytic from './../../assets/Melanocytic.png';
import Vascular from './../../assets/Vascular.png';
import Melanoma from './../../assets/Melanoma.png';
import banner5 from './../../assets/Banner5.png';
import { useEffect } from "react";

const Information = () => {
    const moleInf = [
        {id:1, title: 'Appearance',text:'Symmetrical, with even borders and consistent color (usually brown, black, or tan).'},
        {id:2, title: 'Size',text:'Typically smaller than 6 mm (about the size of a pencil eraser).'},
        {id:3, title: 'Growth',text:'Generally stable in size, shape, and color over time.'},
    ]

    const cancers = [
        {id:1, title: 'Appearance',text:'Irregular shape, uneven or blurred borders, and multiple or uneven colors (black, brown, red, blue, or white).'},
        {id:2, title: 'Size',text:'Can be larger than 6 mm, though some melanomas start smaller.'},
        {id:3, title: 'Growth',text:'Changes over time in size, shape, color, or texture. It may itch, bleed, or crust.'},
    ]
    const threats = [
        {id:1,text:'Basal cell carcinoma (BCC)'},
        {id:2,text:'Squamous cell carcinoma (SCC)'},
        {id:3,text:'Melanoma'},
    ]
    const cancerous = [
        {id:1,text:'Yes, Normal moles can become cancerous, though it’s uncommon. Around 20-30% of melanomas develop from existing moles, while 70-80% arise on normal skin. Factors like excessive UV exposure, severe sunburns, genetic predisposition, and having over 50 moles increase the risk. People with atypical moles are 7-27 times more likely to develop melanoma than those without.'},
        {id:2,text:'Although melanoma makes up only 1% of skin cancers, it causes the majority of skin cancer deaths, with over 325,000 new cases annually worldwide. Early detection is crucial, as the 5-year survival rate exceeds 99% when caught early, emphasizing the need for regular skin checks and timely medical care.'},
    ]
    const types = [
        {id:1,image: Actinic, text: 'Actinic', link: 'https://en.wikipedia.org/wiki/Actinic_keratosis'},
        {id:2,image:Basal, text: 'Basal', link: 'https://en.wikipedia.org/wiki/Basal-cell_carcinoma'},
        {id:3,image:Benign, text: 'Benign', link: 'https://en.wikipedia.org/wiki/Seborrheic_keratosis'},
        {id:4,image:Dermatofibroma, text: 'Dermatofibroma', link: 'https://en.wikipedia.org/wiki/Dermatofibroma'},
        {id:5,image:Melanocytic, text: 'Melanocytic', link: 'https://en.wikipedia.org/wiki/Melanocytic_nevus'},
        {id:6,image:Vascular, text: 'Vascular', link: 'https://en.wikipedia.org/wiki/Vascular_tumor'},
        {id:7,image:Melanoma, text: 'Melanoma', link: 'https://en.wikipedia.org/wiki/Melanoma'},
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className={styles.infor}>
      <Header/>
        <div className={styles.container}>
            <div className={styles.section1}>
                <h1>Your Skin Is Talking — Are You Listening?</h1>
                <span>Learn to recognize the danger beneath the surface before it’s too late</span>
                <img src={banner1}/>
            </div>
            <div className={styles.section2}>
                <TitleText text='General Knowledge' color=''/>
                <div className={styles.mole}>
                    <div className={styles.img}>
                        <img src={mole}/>
                    </div>
                    <div className={styles.informationBox}>
                        <div className={styles.question}>
                            <div style={{width:"3%"}}>
                                <img src={arrow}/>
                            </div>
                            <h1>What is Mole?</h1>
                        </div>
                        <div className={styles.box}>
                            {moleInf.map((inf) => (
                                <p key={inf.id}>
                                    <b className={styles.boldText}>{inf.title}: </b>
                                    {inf.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.cancer}>
                    <div className={styles.img}>
                        <img src={cancer}/>
                    </div>
                    <div className={styles.informationBox}>
                        <div className={styles.question}>
                            <div style={{width:"3%"}}>
                                <img src={arrow}/>
                            </div>
                            <h1>What is Cancer?</h1>
                        </div>
                        <div className={styles.box}>
                            {cancers.map((inf) => (
                                <p key={inf.id}>
                                    <b className={styles.boldText}>{inf.title}: </b>
                                    {inf.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section3}>
                <TitleText text='Skin Type 101: Which One Are You ?' color=''/>
                <span>The Fitzpatrick Skin Typing system, created by Dr. Thomas Fitzpatrick in 1975, reveals six unique skin types, ranging from very light (Type 1) to very dark (Type 6). This groundbreaking classification isn’t just about skin tone—it’s a roadmap to understanding your skin’s natural pigment and its sensitivity to sun exposure. By identifying your Fitzpatrick skin type, you gain valuable insights into your risk for sun damage and skin cancer, empowering you to take control of your skin’s health. Discover your type and unlock the secrets to protecting your skin for years to come!</span>
                <h2>The Fitzpatrick Skin Typing system</h2>
                <div className={styles.typesImg}>
                    <img style={{width:"80%"}} src={typesImg}/>
                </div>
            </div>
        </div>
        <div className={styles.section4}>
                <div>
                    <img src={banner2}/>
                </div>
        </div>
        <div className={styles.section5}>
            <div className={styles.threats}>
                <div className={styles.img}>
                    <img src={banner3}/>
                </div>
                <div className={styles.infThreats}>
                    <div className={styles.title}>
                        <h2>Silent <b style={{backgroundColor:"#60E1CB"}}>Threats</b>: <br/> Major Skin Cancer Types</h2>
                    </div>
                    <div className={styles.content}>
                        <p>Skin cancer is the most common cancer globally, with 1 in 5 people in the U.S. developing it by age 70. Melanoma, the deadliest form, causes most skin cancer deaths, with a 99% survival rate when caught early but only 30% if it spreads. Non-melanoma types like basal and squamous cell carcinomas are less deadly but can still cause serious harm. UV radiation is the leading cause, responsible for 90% of non-melanoma and 86% of melanoma cases. With over 60,000 melanoma deaths annually, early detection, regular skin checks, and sun protection are essential</p>
                    </div>
                    <div className={styles.listThreats}>
                        {threats.map((threat) => (
                            <div className={styles.threat} key={threat.id}>
                                <div className={styles.circle}>
                                    <img style={{width: "100%"}} src={arrow}/>
                                </div>
                                <p>{threat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.section6}>
                <div className={styles.title}>
                    <h2><b style={{backgroundColor:"#60E1CB"}}>ABCD</b>: Decode the Signs of Melanoma</h2>
                </div>
                <div className={styles.content}>
                    <p>The ABCD Rule is a simple and effective guideline developed to help individuals recognize the warning signs of melanoma, one of the most dangerous types of skin cancer. This rule provides an easy-to-remember checklist for evaluating moles and skin lesions for potential abnormalities that might indicate malignancy
                    </p>
                </div>
                <div className={styles.chars}>
                    <div className={styles.eachCharA}>
                        <h1>Asymmetry</h1>
                        <p>Normal moles are usually symmetrical. If you draw a line through the middle of the lesion, the two halves should match. If they don't, it could be a warning sign.</p>
                    </div>
                    <div className={styles.eachCharB}>
                        <h1>Border</h1>
                        <p>Benign moles have smooth, even borders. Cancerous or atypical moles often have irregular, scalloped, or notched edges
                        </p>
                    </div>
                    <div className={styles.eachCharC}>
                        <h1>Color</h1>
                        <p>A healthy mole is typically a single shade of brown. A mole with multiple colors (shades of brown, black, red, white, or blue) can be a red flag.
                        </p>
                    </div>
                    <div className={styles.eachCharD}>
                        <h1>Diameter</h1>
                        <p>Benign moles are generally smaller. If a mole's diameter is larger than 6 millimeters (about the size of a pencil eraser), it may require further evaluation.</p>
                    </div>
                    <div className={styles.eachCharE}>
                        <h1>Evolving (Optional but Crucial Addition)</h1>
                        <p>This refers to changes in a mole's size, shape, color, or texture over time. Any new symptoms like itching, bleeding, or crusting also fall under this category.</p>
                    </div>
                </div>
            </div>
            <div className={styles.section7}>
                <div className={styles.title}>  
                    <h2>Can a Normal Mole Become <b style={{backgroundColor:"#60E1CB"}}>Cancerous</b>?</h2>
                </div>
                <div className={styles.break}>
                    <div className={styles.answer}>
                        {cancerous.map((item) => (
                            <div className={styles.eachAns} key={item.id}>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.img}>
                        <img src={banner4}/>
                    </div>
                </div>
            </div>
            <div className={styles.section8}>
                <div className={styles.title}>  
                    <h2><span>Another types of  skin cancers</span></h2>
                </div>
                <div className={styles.types}>
                    <div className={styles.grid}>
                        {types.map((type) => (
                            <div key={type.id}
                            style={
                                type.id === types.length
                                    ? {
                                          gridColumn: '2',
                                          alignSelf: 'center',
                                      }
                                    : {}
                            }
                            className={`${type.id === 7 ? 'span-two' : 'grid-item'}`}>
                                <a href={type.link} target="_blank">
                                    <img src={type.image}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
            <div className={styles.section9}>
                <div className={styles.image5}>  
                    <img src={banner5}/>
                </div>
            </div> 
        </div>
    </div>
    
  );
}
export default Information;