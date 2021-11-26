import styles from "./cubes.module.scss";

const Cubes: React.FC<{ width?: number }> = ({ width }) => {
  return (
    <div style={width ? { width: width, height: width } : {}} className={styles.wrapper}>
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

export default Cubes;
