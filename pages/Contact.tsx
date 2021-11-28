import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import AboutStyle from "../styles/About.module.scss";
import TransparentNavBar from "../Components/NavBar/TransparentNavBar";
import { GoogleMaps } from "../Components/SharedFolder/GoogleMaps";
import ContactBigForm from "../Components/Contact/ContactBigForm";
import ContactInfo from "../Components/Contact/ContactInfo";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransparentNavBar Selected={"Contact"} color="transparent" secondColor="black" />
      <main className={styles.main} style={{ backgroundColor: "#F3F5FA" }}>
        <section className={AboutStyle.ImgWrapper}>
          <Image src="/office.jpg" priority={true} layout="fill" objectFit="cover" objectPosition="center" />
          <div className={AboutStyle.darkner}></div>
          <div className={AboutStyle.h1}>
            Contact us
            <h3 style={{ fontSize: "1rem", textAlign: "center" }}>Your digital partner</h3>
          </div>
        </section>
        <ContactBigForm />
        <ContactInfo />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Contact;
