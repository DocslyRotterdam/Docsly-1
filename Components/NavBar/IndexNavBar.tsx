import Logo from "../SharedFolder/Logo";
import styles from "./IndexNavBar.module.scss";

const IndexNavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Logo width={50} />
      <h1 className={styles.h1}>Docsly</h1>
    </nav>
  );
};

export default IndexNavBar;
