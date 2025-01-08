import styles from "../../styles/Header Styling/Header.module.css";

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

export default Header;
