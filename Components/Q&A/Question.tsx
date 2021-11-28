import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import styles from "./Question.module.scss";
const Question: React.FC<{ pitanje: string; odgovor: string; num: number }> = ({ pitanje, odgovor, num }) => {
  return (
    <div className={styles.Wrapper}>
      <Accordion style={{ backgroundColor: "#ffb300" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <div style={{ height: "3rem", width: "3rem" }} className={styles.Position}>
            {num}
          </div>
          <Typography
            style={{ marginLeft: "1rem", marginTop: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}
          >
            {pitanje}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{odgovor}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Question;
