import styles from "../../styles/Start Menu Styling/StartMenuHeader.module.css";

function StartMenuHeader({ mode }) {
  return (
    <div className={styles.startMenuheaderContainer}>
      <div
        className={`${styles.header} ${
          mode === true ? styles.lightHeader : styles.darkHeader
        }`}
      >
        <div className={styles.headerpar1}>Welcome to the</div>
        <div className={styles.headerpar2}>Frontend Quiz!</div>
      </div>
      <div
        className={`${styles.headerNote} ${
          mode === true ? styles.headerNoteLight : styles.headerNoteDark
        }`}
      >
        Pick a subject to get started.
      </div>
    </div>
  );
}

export default StartMenuHeader;
