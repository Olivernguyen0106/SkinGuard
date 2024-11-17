import React, { useState } from "react";
import styles from './uploadFile.module.css'
import icon from './../../assets/IconUp.png'
import Loading from "../Loading/loading";

const UploadFile = ({loading, setFile, file, handleSubmit, prediction, setPrediction}) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const retry = () => {
    setFile(null);
    setPrediction(null)
  }
  return (
    <div className={styles.uploadPart}>
      <div className={styles.loader}></div>
      <h3>Files Upload</h3>
      {file && (
        <div className={styles.uploadedImg}>
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(file)}
            />
          </div>
          {prediction === null && (
            <button className={styles.deleteBut} onClick={() => setFile(null)}>Remove</button>
          )}
          {prediction !== null ? (
            <button onClick={retry} className={styles.predictBut}><p>Try Again</p></button>
          ) : (
            <button onClick={handleSubmit} className={styles.predictBut} disabled={loading}><p>Predict</p></button>
          )}
        </div>
      )}
      {!file && (
        <div className={styles.selectedImg}>
          <form className={styles.form}>
             <div className={styles.image}>
                 <img style={{width: '100%'}} src={icon}/>
             </div>
               <p>Browse file to upload</p>
               <label className={`${styles.customButton} ${styles.customCursorDefaultHover}`} htmlFor="myImage">
                   Browse
               </label>
               <input
                   type="file"
                   name="myImage"
                   className={styles.customFileInput}
                   id="myImage"
                   onChange={handleFileChange}
               />
           </form>
        </div>
      )}
    </div>
  );
};
export default UploadFile;