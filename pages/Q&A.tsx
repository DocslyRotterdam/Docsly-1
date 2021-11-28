import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import QAStyles from "../styles/QA.module.scss";
import TransparentNavBar from "../Components/NavBar/TransparentNavBar";

import CommonQuestions from "../Components/Q&A/CommonQuestions";
import Statistics from "../Components/Q&A/Statistics";
import ContactFormRetro from "../Components/SharedFolder/ContactFormRetro";

const Questions: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransparentNavBar Selected="Q&A" color="black" secondColor="black" />
      <main className={styles.main} style={{ backgroundColor: "white" }}>
        <section className={QAStyles.Wrapper}>
          <CommonQuestions />
          <Statistics />
        </section>
        <h1 style={{ marginTop: "4rem" }}></h1>
        <ContactFormRetro title="Didn't find the answer you were looking for?" />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Questions;
