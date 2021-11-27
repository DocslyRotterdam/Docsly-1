import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import AboutStyle from "../styles/About.module.scss";
import TransparentNavBar from "../Components/NavBar/TransparentNavBar";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransparentNavBar color="transparent" secondColor="black" />
      <main className={styles.main}>
        <section className={AboutStyle.ImgWrapper}>
          <Image src="/office.jpg" priority={true} layout="fill" objectFit="cover" objectPosition="center" />
          <div className={AboutStyle.darkner}></div>
          <div className={AboutStyle.h1}>
            Contact us
            <h3 style={{ fontSize: "1rem", textAlign: "center" }}>Your digital partner</h3>
          </div>
        </section>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Contact;
