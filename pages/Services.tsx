import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainNavBar from "../Components/NavBar/MainNavBar";
import TopBlock from "../Components/Services/TopBlock";
import CircleServices from "../Components/Services/CircleServices";
import WebDev from "../Components/Services/WebDev";
import WebSite from "../Components/Services/WebSite";
import MobileDev from "../Components/Services/MobileDev";
import CompanySolution from "../Components/Services/CompanySolutions";
import { ContactFrom } from "../Components/SharedFolder/ContactForm";

const home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Software development Netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavBar Selected={"Services"} fixed />
      <main className={styles.main}>
        <TopBlock />
        <CircleServices />
        <WebDev />
        <WebSite />
        <MobileDev />
        <CompanySolution />
        <ContactFrom />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default home;
