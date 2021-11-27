import styles from "./AboutCards.module.scss";

const AboutCards: React.FC = () => {
  return (
    <div className={styles.AboutCards}>
      <Card title="Who are we?" />
      <Card title="Why us?" />
      <Card title="What do we do?" />
    </div>
  );
};

export default AboutCards;

const Card: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.Card}>
      <strong className={styles.Line}></strong>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum eros pellentesque purus sagittis dignissim. Pellentesque id auctor
        lorem. Nunc id neque congue, sollicitudin urna id, interdum tortor. Sed blandit, velit eget malesuada euismod, felis ipsum gravida dolor, in
        eleifend felis mauris quis lectus. Sed at est dolor. Curabitur eu varius lacus. In vitae malesuada libero. Suspendisse volutpat pulvinar
        metus, ac pretium massa commodo sit amet.
      </p>
    </div>
  );
};
