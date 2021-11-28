import styles from "./OurMission.module.scss";
import Image from "next/image";
import InView, { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const OurMission: React.FC = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.OurMission} style={{ backgroundColor: "#b3e5fc", padding: "3rem 0rem", paddingTop: "8rem" }}>
      <CardTwo inView={inView} />
      <CardOne inView={inView} />
    </div>
  );
};

export default OurMission;

const CardOne: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <motion.div
      style={{ boxShadow: "0px 0px 5px 0px black", backgroundColor: "white" }}
      transition={{ duration: 1, bounce: 0.1 }}
      animate={inView ? { opacity: 1, x: 0 } : { x: "-30vw" }}
      className={styles.ImgWrapper}
    >
      <Image alt="" src="/OurMission.svg" layout="fill" objectFit="contain" />
    </motion.div>
  );
};

const CardTwo: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <motion.div
      style={{ backgroundColor: "white" }}
      transition={{ duration: 0.4, bounce: 0.1 }}
      animate={inView ? { opacity: 1, x: 0 } : { x: "50vw" }}
      className={styles.CardTwo}
    >
      <h1>Our mission</h1>
      <p>
        Sed laoreet est congue suscipit mollis. Quisque lacinia, diam sit amet tempor bibendum, augue odio consequat massa, eu aliquam dui dolor id
        est. Sed vestibulum facilisis felis, ut elementum augue tincidunt ac. Cras rutrum cursus iaculis. Donec auctor orci vitae eros euismod
        condimentum. Vestibulum vitae vehicula massa, nec aliquet nunc. Nunc dignissim est a ultrices varius.
      </p>
      <div className="buttonFill reverse" style={{ borderColor: "#242A56", color: "#242A56", margin: "auto" }}>
        Contact us
        <div className="hiddenWave" style={{ backgroundColor: "#242A56" }}></div>
      </div>
    </motion.div>
  );
};
