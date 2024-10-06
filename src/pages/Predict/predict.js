"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './predict.module.css'
import UploadFile from '../../components/UploadFile/uploadFile'
import nofound from './../../assets/nofound.png'
import axios from 'axios';
import {skinCancer} from './../../utils/sick'
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const Predict = () => {
  const [prediction, setPrediction] = useState(null);
  const [file, setFile] = useState(null);
  console.log(prediction);
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("https://9e93-34-125-62-217.ngrok-free.app/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPrediction(response.data);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };
  const result = skinCancer.find((val) => val.id === Number(prediction?.label));
  if (result) {
      console.log('Matching skin cancer info:', result);
  } else {
      console.log('No match found for label:', prediction?.label);
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.upload}>
          <UploadFile setFile={setFile} file={file} handleSubmit={handleSubmit} prediction={prediction} setPrediction={setPrediction}/>
          <div className={styles.resultSection}>
            {result ? (
                <div className={styles.result}>
                  <h2 className={styles.sectionTitle}>Prediction Result</h2>
                  <span className={styles.warning}>* The information in this article is for reference only. To ensure safety and accuracy, you should consult a doctor or medical professional for thorough advice and examination.</span>
                  <h4 style={{display:"flex", alignItems:'center', gap:'6px'}}>Diagnosed: <br/><p className={styles.resultText}>{result.label}</p></h4>
                  <h4>Causes: </h4><p className={styles.resultText}>{result.cause}</p>
                  <h4>Aftereffects of illness: </h4><p className={styles.resultText}>{result.effect}</p>
                  <h4>Diseases Sign: </h4>
                  <ul>
                    {result.signs.map((sign) => (
                      <li key={sign.id}><p>{sign.content}</p></li>
                    ))}
                  </ul>
                  <h4>Disease prevention methods: </h4>
                  <ul>
                    {result.avoid.map((avoid) => (
                      <li key={avoid.id}><p>{avoid.content}</p></li>
                    ))}
                  </ul>
                </div>
            ) :  (
              <div className={styles.nofound}>
                <div className={styles.image}>
                  <img style={{width:'100%'}} src={nofound}/>
                </div>
                <h4>Please upload photo to get the prediction</h4>
              </div>
              )}
          </div>
        </div>
      </div>
    </div>

  );
}
export default Predict;