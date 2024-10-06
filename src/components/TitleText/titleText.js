import styles from './titleText.module.css'

const TitleText = ({text, color}) => {
    return (
        <div className={styles.text}>
            <p><span style={{ '--underline-bg': color}} className={styles.underline}>{text}</span></p>
      </div>
    );
}

export default TitleText;