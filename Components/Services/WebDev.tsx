import styles from "./WebDev.module.scss";
import Image from "next/image";

const WebDev: React.FC = () => {
  return (
    <div id="WebDev titleAdd" className={styles.WebDev}>
      <section className={styles.ImgWrapper}>
        <Image src="/webDDev.svg" layout="fill" objectFit="contain" />
      </section>
      <article className={styles.section2Wrapper}>
        <h1 className="title">Web design</h1>
        <section style={{ width: "100%", overflow: "hidden" }}>
          <h2>Why is design important?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus
          </p>
          <h2>Why us?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis
            luctus. Aenean dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut
            metus mollis luctus. Aenean dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris
            vel tellus ut metus mollis luctus. Aenean dolor purus
          </p>
          <h2>Improve your product</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus
          </p>
        </section>
      </article>
      <section className={styles.BottomTriangle}></section>
    </div>
  );
};

export default WebDev;
