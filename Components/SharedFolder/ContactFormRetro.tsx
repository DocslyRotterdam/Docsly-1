import { TextField } from "@mui/material";
import styles from "./ContactFormRetro.module.scss";

const ContactFormRetro: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.Wrapper} style={{ width: "100%", backgroundColor: "rgba(16,25,33,.05)", display: "flex", flexDirection: "column" }}>
      <h1>{title}</h1>
      <TextField
        id="standard-basic"
        label="Name*"
        variant="standard"
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />
      <TextField
        id="standard-basic"
        label="Company name"
        variant="standard"
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />
      <TextField
        id="standard-basic"
        label="Phone number"
        variant="standard"
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />
      <TextField
        id="standard-basic"
        label="Email*"
        variant="standard"
        style={{ width: "100%", maxWidth: "700px", fontSize: "2rem", marginTop: "1rem" }}
      />

      <textarea placeholder="Message*" className={styles.TextArea}></textarea>
      <div className="buttonFill reverse" style={{ borderColor: "#242A56", color: "#242A56", marginRight: "auto", marginTop: "2rem", zIndex: 10 }}>
        Send
        <div className="hiddenWave" style={{ backgroundColor: "black", color: "white", marginRight: "auto" }}></div>
      </div>
    </div>
  );
};

export default ContactFormRetro;
