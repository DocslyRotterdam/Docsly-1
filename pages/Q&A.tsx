import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import AboutStyle from "../styles/About.module.scss";
import TransparentNavBar from "../Components/NavBar/TransparentNavBar";
import { GoogleMaps } from "../Components/SharedFolder/GoogleMaps";
import ContactBigForm from "../Components/Contact/ContactBigForm";
import ContactInfo from "../Components/Contact/ContactInfo";

const Questions: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransparentNavBar color="black" secondColor="black" />
      <main className={styles.main} style={{ backgroundColor: "#F3F5FA" }}></main>

      <footer className=""></footer>
    </div>
  );
};

export default Questions;
