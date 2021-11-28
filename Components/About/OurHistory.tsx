import styles from "./OurMission.module.scss";
import Image from "next/image";
import InView, { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const OurHistory: React.FC = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.OurMission} style={{ backgroundColor: "white", padding: "3rem 0rem", paddingTop: "5rem" }}>
      <CardOne inView={inView} />
      <CardTwo inView={inView} />
    </div>
  );
};

export default OurHistory;

const CardOne: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <motion.div
      style={{ height: "500px", boxShadow: "0px 0px 5px 0px black" }}
      transition={{ duration: 1, bounce: 0.1 }}
      animate={inView ? { opacity: 1, x: 0 } : { x: "30vw" }}
      className={styles.ImgWrapper}
    >
      <Image alt="" src="/people.jpg" layout="fill" objectFit="cover" />
    </motion.div>
  );
};

const CardTwo: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <motion.div
      style={{ backgroundColor: "white" }}
      transition={{ duration: 0.4, bounce: 0.1 }}
      animate={inView ? { opacity: 1, x: 0 } : { x: "-50vw" }}
      className={styles.CardTwo}
    >
      <h1>Our story</h1>
      <p>
        Sed laoreet est congue suscipit mollis. Quisque lacinia, diam sit amet tempor bibendum, augue odio consequat massa, eu aliquam dui dolor id
        est. Sed vestibulum facilisis felis, ut elementum augue tincidunt ac. Cras rutrum cursus iaculis. Donec auctor orci vitae eros euismod
        condimentum. Vestibulum vitae vehicula massa, nec aliquet nunc. Nunc dignissim est a ultrices varius.
      </p>
      <div className="buttonFill reverse" style={{ borderColor: "#242A56", color: "#242A56", margin: "auto" }}>
        Learn more
        <div className="hiddenWave" style={{ backgroundColor: "#242A56" }}></div>
      </div>
    </motion.div>
  );
};
