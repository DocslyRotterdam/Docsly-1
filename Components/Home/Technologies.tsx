import styles from "./Technologies.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Technologies: React.FC = () => {
  const randomText =
    "Integer eget nisl nisi. Maecenas porta sodales felis, sit amet tincidunt urna pulvinar nec. Vivamus imperdiet ligula id nisl efficitur, vitae euismod massa egestas. Aenean in suscipit libero. Vestibulum ullamcorper ante sed fringilla eleifend. Curabitur in diam vitae est scelerisque egestas molestie non sem.";
  return (
    <div className={styles.Technologies}>
      <h1 className="title" style={{ marginBottom: "5rem" }}>
        Technologies we use
      </h1>
      <section className={styles.CardWrapper}>
        <Card link="/react.svg" title="React" text={randomText} />
        <Card link="/next.svg" title="Next" text={randomText} />
        <Card link="/flutter.svg" title="Flutter" text={randomText} />
        <Card link="/jsHtmlCss.svg" title="Js, html, css" text={randomText} />
        <Card link="/android.svg" title="Android" text={randomText} />
        <Card link="/backend.svg" title="Node, php, .net" text={randomText} />
      </section>
    </div>
  );
};

export default Technologies;

const Card: React.FC<{ title: string; link: string; text: string }> = ({ title, link, text }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div animate={inView ? { opacity: 1 } : {}} className={styles.Card} ref={ref}>
      <section className={styles.ImgWrapper}>
        <Image alt="" src={link} layout="fill" objectFit="contain" />
      </section>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
};
