import { faEnvelope, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactInfo.module.scss";

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.ContactInfo}>
      <h1 className={styles.H1}>Contact info</h1>
      <section className={styles.CardWrapper}>
        <Card icon={faMapPin} first="Rotterdam 5, Netherlands" second="Zonde 15, Netherlands" action="Direction" />
        <Card icon={faPhone} first="+345 91-2390-390" second="+345 3 323-323" action="Call" />
        <Card icon={faEnvelope} first="info@docsly.com" action="Send mail" />
      </section>
    </div>
  );
};

export default ContactInfo;

const Card: React.FC<{ icon: any; first: string; action: string; second?: string }> = ({ icon, first, action, second }) => {
  return (
    <div className={styles.Card}>
      <FontAwesomeIcon width="32" icon={icon} />
      <section style={{ marginTop: "1rem" }}>{first}</section>
      <section style={{ marginTop: "1rem" }}>{second}</section>
      <div
        onClick={() => {
          open(action);
        }}
        className={styles.Darkner}
      >
        {action === "Call" ? (
          <a href="tel:+4733378901" className={styles.a}>
            {action}
          </a>
        ) : (
          <></>
        )}
        {action === "Send mail" ? (
          <a href={`mailto:${first}`} className={styles.a}>
            {action}
          </a>
        ) : (
          <></>
        )}
        {action === "Directions" ? <a className={styles.a}>{action}</a> : <></>}
      </div>
    </div>
  );
  function open(action: string) {
    if (action === "Direction") {
      window.open("https://maps.google.com?q=" + 52.07170615379325 + "," + 4.108611012050437);
    }
  }
};
