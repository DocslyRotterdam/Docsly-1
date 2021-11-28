import { useRouter } from "next/dist/client/router";
import styles from "./Logo.module.scss";

const Logo: React.FC<{ width?: number }> = ({ width }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/home");
      }}
      style={width ? { width: width, height: width, cursor: "pointer" } : { cursor: "pointer" }}
      className={styles.wrapper}
    >
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
      <div className={styles.Cube}></div>
    </div>
  );
};

export default Logo;
