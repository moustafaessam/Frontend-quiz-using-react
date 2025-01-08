import styles from "../../styles/Header Styling/Mode.module.css";

function Mode({ mode, setMode }) {
  function handleMode() {
    setMode((pre) => !pre);
  }
  return (
    <div className={styles.modeContainer}>
      <div className={styles.lightImgContainer}>
        <img
          className={styles.lightImg}
          src={
            mode == true
              ? "/images/icon-sun-dark.svg"
              : "/images/icon-sun-light.svg"
          }
          alt="sun-dark"
        />
      </div>
      <div className={styles.modeSwitchContainer}>
        <div
          className={
            mode === true
              ? `${styles.modeSwitchCircle} ${styles.modeWhite} ${styles.cursorPointer}`
              : `${styles.modeSwitchCircle} ${styles.modePurple}`
          }
          onClick={() => (mode === true ? handleMode() : "")}
        ></div>
        <div
          className={
            mode === false
              ? `${styles.modeSwitchCircle} ${styles.modeWhite} ${styles.cursorPointer}`
              : `${styles.modeSwitchCircle} ${styles.modePurple}`
          }
          onClick={() => (mode === false ? handleMode() : "")}
        ></div>
      </div>
      <div className={styles.moonImgContainer}>
        <img
          className={styles.darkImg}
          src={
            mode == true
              ? "/images/icon-moon-dark.svg"
              : "/images/icon-moon-light.svg"
          }
          alt="moon-dark"
        />
      </div>
    </div>
  );
}

export default Mode;
