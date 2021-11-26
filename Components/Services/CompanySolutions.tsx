import styles from "./Website.module.scss";
import Image from "next/image";

const CompanySolution: React.FC = () => {
  return (
    <div
      id="CompanySolutions"
      className={styles.WebSite}
      style={{ backgroundColor: "#263238", borderTopStyle: "solid", borderTopColor: "#263238", marginTop: "-1px", borderTopWidth: "3px" }}
    >
      <section className={styles.ImgWrapper}>
        <Image alt="" src="/solution2.svg" layout="fill" objectFit="contain" />
      </section>
      <article className={styles.section2Wrapper}>
        <h1 className="title titleAdd">Company solutions</h1>
        <section style={{ width: "100%", overflow: "hidden" }}>
          <h2>Why is digitalization important?</h2>
          <p>
            Lorem ipsum dolor sit amet, consecetur adipiscing elit. Nulla posuere maximus faucibus. Mauris vel tellus ut metus mollis luctus. Aenean
            dolor purus
          </p>
          <h2>SEO</h2>
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
    </div>
  );
};

export default CompanySolution;
