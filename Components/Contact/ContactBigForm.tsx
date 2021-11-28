import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMaps } from "../SharedFolder/GoogleMaps";
import styles from "./ContactBigForm.module.scss";

const ContactBigForm: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ContactBigForm}>
        <section className={styles.MainSection}>
          <input placeholder="Name*" type="text" className={styles.Input} />
          <input placeholder="Company name" type="text" className={styles.Input} />
          <input placeholder="Phone number" type="number" className={styles.Input} />
          <input placeholder="Email*" type="text" className={styles.Input} />
          <textarea placeholder="Message*" className={styles.TextArea}></textarea>
          <div className="buttonFill reverse" style={{ borderColor: "#242A56", color: "#242A56", margin: "auto", marginTop: "2rem", zIndex: 10 }}>
            Contact us
            <div className="hiddenWave" style={{ backgroundColor: "black", color: "white" }}></div>
          </div>
        </section>
        <section className={styles.GoogleMaps} style={{ width: "100%", height: "100%" }}>
          <GoogleMaps height={500} width={1000} />
        </section>
      </div>
    </div>
  );
};

export default ContactBigForm;
