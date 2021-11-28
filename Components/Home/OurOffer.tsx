import styles from "./OurOffer.module.scss";
import Image from "next/image";
import InView, { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const OurOffer: React.FC = () => {
  return (
    <div className={styles.OurOffer}>
      <h1 className="title">What do we do?</h1>
      <section style={{ display: "flex" }}>
        <ul className={styles.ul}>
          <Item
            link="/design.svg"
            title="Web design"
            text="Our creative design solutions are for people, not for machines. Yet made by people and machines. "
          />
          <Item
            link="/website.svg"
            title="Websites"
            text="Our creative design solutions are for people, not for machines. Yet made by people and machines. "
          />
          <Item
            link="/app.svg"
            title="Web applications"
            text="Our creative design solutions are for people, not for machines. Yet made by people and machines. "
          />
          <Item
            link="/mobApp.svg"
            title="Mobile applications"
            text="Our creative design solutions are for people, not for machines. Yet made by people and machines. "
          />
          <Item
            link="/solution.svg"
            title="Digital solutions for companies"
            text="Our creative design solutions are for people, not for machines. Yet made by people and machines. "
          />
        </ul>
        <section className={styles.PhoneMockUp} style={{ height: "800px", width: "500px", position: "relative", borderRadius: "1rem" }}>
          <Image alt="" src="/iphone.png" layout="fill" objectFit="contain" />
        </section>
      </section>
    </div>
  );
};

const Item: React.FC<any> = (props: any) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <motion.li
      transition={{ duration: 0.2, bounce: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { y: "100%" }}
      ref={ref}
      style={{ opacity: 0 }}
      className={styles.li}
    >
      <section>
        <h2>{props.title}</h2>
        <p style={{ fontWeight: 100 }}>{props.text}</p>
      </section>
      <section className={styles.ImgWrapper}>
        <section style={{ width: 100, height: 100, borderRadius: "50%", position: "relative" }}>
          <Image alt="" src={props.link} layout="fill" objectFit="contain" />
        </section>
      </section>
    </motion.li>
  );
};

export default OurOffer;
