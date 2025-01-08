import styles from "../../styles/Start Menu Styling/StartMenu.module.css";

function StartMenu({ children }) {
  return <section className={styles.startMenuSection}>{children}</section>;
}

export default StartMenu;
