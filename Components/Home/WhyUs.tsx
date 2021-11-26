import { faBattleNet, faBuffer } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faBullseye, faFeather, faHandHoldingUsd, faPeopleArrows, faPeopleCarry, faSadCry, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./WhyUs.module.scss";

const WhyUs: React.FC = () => {
  return (
    <div className={styles.WhyUs}>
      <h1 className="title">Our values</h1>
      <section className={styles.CardWrapper}>
        <Card key={0} icon={faBattleNet} title="Quality" />
        <Card key={0} icon={faBullseye} title="Experience" />
        <Card key={0} icon={faBuffer} title="Details" />
        <Card key={0} icon={faHandHoldingUsd} title="Fair price" />
        <Card key={0} icon={faPeopleCarry} title="Support" />
        <Card key={0} icon={faFeather} title="Diversity" />
      </section>
    </div>
  );
};

const Card: React.FC<{ icon: any; title: string }> = ({ icon, title }) => {
  const [inv, setInv] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.article
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
      onMouseEnter={() => {
        setInv(true);
      }}
      onMouseLeave={() => {
        setInv(false);
      }}
      ref={ref}
      className={styles.Article}
    >
      <div className={styles.CircleWrapper}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 style={{ margin: "1rem 0rem 0rem 0rem", fontWeight: 700, fontSize: "1.5rem", color: "white" }}>{title}</h3>
      <motion.div
        animate={inv ? { opacity: 1, y: 0, boxShadow: "0px 0px 10px 0px white" } : { opacity: 0, y: "-100%" }}
        transition={inv ? {} : { duration: 0.1 }}
        style={{ fontFamily: "calibri" }}
        className={styles.Ul}
      >
        <li> Sed eget rhoncus mauris. Nulla eu cursus elit</li>
        <li> imperdiet porttitor purus. Proi sit amet</li>
        <li>ipsum fermentum ornare. Mauris vel . </li>
        <li>Sed eget quam purus. Etiam ornare.</li>
      </motion.div>
    </motion.article>
  );
};

export default WhyUs;
