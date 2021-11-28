import styles from "./Statistics.module.scss";

const Statistics: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <Card text="Nearly half of Google searches are for local businesses" background="#210070" color="white" />
      <Card text="Around 71% of small businesses have a website" background="#280280" color="white" />
      <Card text="Nearly 40% of people will stop engaging with a slow website" background="#2d0391" color="white" />
      <Card text="Poor user experience drives almost 50% of users to go with competitors instead" background="#3503a8" color="white" />
      <Card text="43% of small businesses plan to invest in web performance" background="#3d02c7" color="white" />
      <Card text="Over half of ecommerce revenue is generated on mobile" background="#4601e7" color="white" />
    </div>
  );
};

export default Statistics;

const Card: React.FC<{ text: string; background: string; color: string }> = ({ text, background, color }) => {
  return (
    <div className={styles.CardWrapper} style={{ backgroundColor: background, color: color }}>
      <h4 style={{ fontWeight: 700 }}>{text}</h4>
    </div>
  );
};
