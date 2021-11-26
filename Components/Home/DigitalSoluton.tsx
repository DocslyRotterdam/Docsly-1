import styles from "./DigitalSolution.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faChartLine, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const DigitalSolution: React.FC = () => {
  return (
    <div className={styles.DigitalSolution}>
      <h1 className="title">Bring your buisiness to another level</h1>
      <section className={styles.CardWrapper}>
        <Card key={0} icon={faChartLine} />
        <Card key={1} icon={faCalendarCheck} />
        <Card key={2} icon={faShieldAlt} />
      </section>
    </div>
  );
};

const Card: React.FC<{ icon: any }> = ({ icon }) => {
  return (
    <article className={styles.Article}>
      <div className={styles.CircleWrapper}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>
        Ut vel malesuada purus. Cras facilisis, purus sit amet tincidunt hendrerit, ligula erat faucibus augue, consequat imperdiet ex justo at eros.
        Cras fringilla aliquam nibh, vitae vehicula sem dapibus vitae. Maecenas ullamcorper a nunc id posuere. Duis odio mauris, efficitur quis
        viverra eu, consequat sit amet mauris.
      </p>
    </article>
  );
};

export default DigitalSolution;
