import styles from "../../styles/Quiz Styling/OptionsAndSubmit.module.css";

function OptionsAndSubmit({ children }) {
  return <div className={styles.optionsContainer}>{children}</div>;
}

export default OptionsAndSubmit;
