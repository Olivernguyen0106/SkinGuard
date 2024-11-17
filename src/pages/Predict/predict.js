"use client";

import axios from 'axios';
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Loading from "../../components/Loading/loading";
import UploadFile from '../../components/UploadFile/uploadFile';
import nodata from './../../assets/nodata.png';
import nofound from './../../assets/nofound.png';
import { skinCancer } from './../../utils/sick';
import styles from './predict.module.css';

const Predict = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [ showToast, setShowToast ] = useState(false)
  console.log(prediction);
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true)
    try {
      const response = await axios.post("https://3b15-34-150-228-11.ngrok-free.app/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPrediction(response.data);
    } catch (error) {
      console.error("Error uploading file", error);
      setError(true)
    }
    setLoading(false)
  };
  const result = skinCancer.find((val) => val.id === Number(prediction?.label));
  if (result) {
      console.log('Matching skin cancer info:', result);
  } else {
      console.log('No match found for label:', prediction?.label);
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        {showToast &&
          <div>Hello</div> || null}
        <div className={styles.upload}>
          <UploadFile loading={loading} setFile={setFile} file={file} handleSubmit={handleSubmit} prediction={prediction} setPrediction={setPrediction}/>
          <div className={styles.resultSection}>
          {loading ? (
            <Loading />
          ) : result ? (
            <div className={styles.result}>
              <h2 className={styles.sectionTitle}>Prediction Result</h2>
              <span className={styles.warning}>
                * The information in this article is for reference only. To ensure safety and accuracy, you should consult a doctor or medical professional for thorough advice and examination.
              </span>
              <h4 style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                Diagnosed: <br />
                <p className={styles.resultText}>{result.label}</p>
              </h4>
              <h4>Causes:</h4>
              <p className={styles.resultText}>{result.cause}</p>
              <h4>Aftereffects of illness:</h4>
              <p className={styles.resultText}>{result.effect}</p>
              <h4>Diseases Sign:</h4>
              <ul>
                {result.signs.map((sign) => (
                  <li key={sign.id}>
                    <p>{sign.content}</p>
                  </li>
                ))}
              </ul>
              <h4>Disease prevention methods:</h4>
              <ul>
                {result.avoid.map((avoid) => (
                  <li key={avoid.id}>
                    <p>{avoid.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : !error ? (
            <div className={styles.nofound}>
              <div className={styles.image}>
                <img style={{ width: "100%" }} src={nofound} alt="No result found" />
              </div>
              <h4>Please upload a photo to get the prediction</h4>
            </div>
          ) : 
            <div className={styles.nodata}>
              <div className={styles.noDataImg}>
                <img src={nodata}/>
              </div>
              <h4>Don't have any result !!! Please remove and click another image !</h4>
            </div>
          }            
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
export default Predict;