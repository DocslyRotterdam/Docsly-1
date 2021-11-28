import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import AboutStyle from "../styles/About.module.scss";
import TransparentNavBar from "../Components/NavBar/TransparentNavBar";
import AboutCards from "../Components/About/AboutCards";
import OurMission from "../Components/About/OurMission";
import OurHistory from "../Components/About/OurHistory";
import Komentari from "../Components/About/Komentari";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransparentNavBar color="transparent" secondColor="black" Selected={"About"} />
      <main className={styles.main}>
        <section className={AboutStyle.ImgWrapper}>
          <Image src="/office.jpg" priority={true} layout="fill" objectFit="cover" objectPosition="center" />
          <div className={AboutStyle.darkner}></div>
          <h1 className={AboutStyle.h1}>About us</h1>
        </section>
        <AboutCards />
        <div style={{ height: "3rem" }}></div>
        <OurMission />
        <OurHistory />
        <Komentari />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default About;
