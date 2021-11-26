import styles from "./WebDev.module.scss";
import Image from "next/image";

const MobileDev: React.FC = () => {
  return (
    <div id="MobileDev" className={styles.WebDev} style={{ marginTop: 0, backgroundColor: "#e1bee7" }}>
      <section className={styles.ImgWrapper}>
        <Image alt="" src="/flutter.svg" layout="fill" objectFit="contain" />
      </section>
      <article className={styles.section2Wrapper}>
        <h1 className="title titleAdd">Mobile apps</h1>
        <section style={{ width: "100%", overflow: "hidden" }}>
          <h2>Cross platform development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis
            luctus. Aenean dolor purus
          </p>
          <h2>Android native development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis
            luctus. Aenean dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut
            metus mollis luctus. Aenean dolor purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris
            vel tellus ut metus mollis luctus. Aenean dolor purus
          </p>
          <h2>Ios native development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus
          </p>
        </section>
      </article>
      <section className={styles.BottomTriangle} style={{ backgroundColor: "#263238", borderColor: "#263238", borderStyle: "solid" }}></section>
    </div>
  );
};

export default MobileDev;
