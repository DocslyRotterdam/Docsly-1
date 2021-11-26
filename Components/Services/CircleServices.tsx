import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./CircleServices.module.scss";

const CircleServices: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Item link="/design.svg" title="Web design" id="WebDev" />
      <Item link="/website.svg" title="Websites" id="WebSite" />
      <Item link="/app.svg" title="Web applications" id="WebSite" />
      <Item link="/mobApp.svg" title="Mobile applications" id="MobileDev" />
      <Item link="/solution.svg" title="Digital solutions" id="CompanySolutions" />
    </div>
  );
};

export default CircleServices;

const Item: React.FC<any> = (props: any) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <motion.li
      onClick={() => {
        go_to_id(props.id);
      }}
      animate={inView ? { opacity: 1, y: 0 } : { y: "100%" }}
      ref={ref}
      style={{ opacity: 0 }}
      className={styles.li}
    >
      <section>
        <h2>{props.title}</h2>
      </section>
      <section className={styles.ImgWrapper}>
        <section style={{ width: 150, height: 150, borderRadius: "50%", position: "relative" }}>
          <Image alt="" src={props.link} layout="fill" objectFit="contain" />
        </section>
      </section>
    </motion.li>
  );
  function go_to_id(id: string) {
    const element = document.getElementById(id);

    if (element === null) return;
    const distanceY = element.getBoundingClientRect().y + window.scrollY;
    console.log(distanceY, element.getBoundingClientRect().top);
    window.scrollTo({
      top: distanceY,
      left: 0,
      behavior: "smooth",
    });
  }
};
