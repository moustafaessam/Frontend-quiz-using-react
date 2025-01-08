import styles from "../../styles/Global Styling/AppWrap.module.css";

// ${styles.appWrap} ${styles.lightStyle}

function AppWrap({ children, mode }) {
  return (
    <main
      className={`${styles.appWrap} ${
        mode === true ? styles.lightStyle : styles.darkStyle
      }`}
    >
      {children}
    </main>
  );
}

export default AppWrap;
