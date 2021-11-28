import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import indexStyles from "./../styles/index.module.scss";
import styles from "../styles/Home.module.css";
import Cubes from "../Components/cubes";
import IndexNavBar from "../Components/NavBar/IndexNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faChevronRight, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/dist/client/router";

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Website development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexNavBar />
      <main className={styles.main}>
        <section className={indexStyles.Darkness}>
          <div style={{ display: "inline-block" }}>
            <Cubes />
            <h1 className={indexStyles.h1} style={{ color: "white" }}>
              Docsly
            </h1>
            <h3 className={indexStyles.h3}>Web development</h3>
          </div>
        </section>
        <section className={indexStyles.BackgroundSecond}>
          <Image alt="" priority={true} src="/galaxy.jpg" layout="fill" objectFit="cover" objectPosition="center" />
          <div className={indexStyles.darkner}></div>
        </section>
        <section className={indexStyles.thirdSection}>
          <h1 className={`title ${indexStyles.mainTitle}`} style={{ color: "white" }}>
            Websites of tommorow
          </h1>
          <div
            className="buttonFill"
            onClick={() => {
              router.push("/Home");
            }}
          >
            Discover <FontAwesomeIcon width="18" icon={faChevronRight} />
            <div className="hiddenWave"></div>
          </div>
        </section>
      </main>

      <footer className={indexStyles.footer}>
        <FontAwesomeIcon width="22" icon={faLinkedin} />
        <FontAwesomeIcon width="22" icon={faInstagram} />
        <FontAwesomeIcon width="22" icon={faFacebook} />
        <a className={indexStyles.a}>Contact us</a>
      </footer>
    </div>
  );
};

export default Index;
