import { faEnvelope, faPhone, faSms, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactForm.module.scss";

export const ContactFrom = () => {
  return (
    <div className={styles.ContactForm}>
      <h2>Contact us</h2>
      <h4>You have a question? We will get back as fast as we can!</h4>
      <section className={styles.MiniSec}>
        <Input icon={faUser} type={"text"} placeholder="*Name" />
        <Input icon={faUser} placeholder="*Surname" type="text" />
      </section>
      <section className={styles.MiniSec} style={{ marginTop: "1.5rem" }}>
        <Input icon={faEnvelope} type={"text"} placeholder="*Email address" />
        <Input icon={faPhone} placeholder="Number" type="number" />
      </section>
      <section style={{ marginTop: "2rem", width: "100%" }}>
        <strong style={{ fontSize: "0.8rem" }}>Your message:</strong>
        <Input icon={faSms} textArea={true} />
      </section>
      <section className={styles.ButtonWrapper}>
        <div className={styles.Button}>Send</div>
      </section>
    </div>
  );
};

export const Input: React.FC<any> = (props: any) => {
  return (
    <div className={styles.Input}>
      {props.textArea ? (
        <></>
      ) : (
        <div
          style={{
            width: "10%",
            height: "inherit",
            display: "flex",
            justifyContent: "center",
            alignItems: `${props.textArea ? "top" : "center"}`,
            color: "black",
            fontSize: "5rem",
          }}
          className={styles.IconWrap}
        >
          <FontAwesomeIcon width="50%" icon={props.icon} />
        </div>
      )}
      <div style={{ width: "100%" }}>
        {props.textArea ? (
          <textarea className={styles.textArea}></textarea>
        ) : (
          <input className={styles.input} placeholder={props.placeholder} type={props.type} />
        )}
      </div>
    </div>
  );
};
