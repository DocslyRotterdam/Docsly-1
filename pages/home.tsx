import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import indexStyles from "./../styles/index.module.scss";
import styles from "../styles/Home.module.css";
import HomeStyles from "../styles/HomeStyles.module.scss";
import MainNavBar from "../Components/NavBar/MainNavBar";
import OurOffer from "../Components/Home/OurOffer";
import IzradaWeb from "../Components/Home/IzradaWeb";
import DigitalSolution from "../Components/Home/DigitalSoluton";
import WhyUs from "../Components/Home/WhyUs";
import Technologies from "../Components/Home/Technologies";
import { ContactFrom } from "../Components/SharedFolder/ContactForm";
import ContactFormRetro from "../Components/SharedFolder/ContactFormRetro";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavBar Selected={"Home"} />
      <main className={styles.main}>
        <div className={HomeStyles.title}>Quality first</div>
        <article className={HomeStyles.article}>
          <section style={{ width: "100%", height: "100%", minHeight: 350, position: "relative" }}>
            <Image alt="web dev quality" priority={true} src="/Quality.svg" layout="fill" objectFit="contain" objectPosition="center" />
          </section>
          <div className={HomeStyles.p}>
            <span style={{ display: "block", margin: "2rem 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lectus lorem. Vivamus nec purus ligula. Cras massa quam,
              vestibulum nec velit ac, laoreet dignissim massa. Nulla vel lorem ac velit cursus venenatis. Sed cursus velit varius ex lacinia, a
              sagittis elit blandit. Nunc quis nisi aliquet, posuere erat hendrerit, scelerisque augue. Aliquam elementum cursus est eget bibendum.
              Sed cursus facilisis mi nec porta. Suspendisse dapibus nec nunc ut scelerisque. Proin in nunc a quam suscipit mattis eu eu neque.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce posuere sollicitudin mi eget venenatis. Morbi nec leo sed enim
              consectetur lacinia nec non mauris. Phasellus sagittis diam facilisis, laoreet sapien sed, dapibus diam. Mauris sed accumsan mauris.
              Proin eleifend id tortor non ullamcorper.
            </span>
            <div className="buttonFill reverse" style={{ borderColor: "black", color: "black" }}>
              Learn more
              <div className="hiddenWave" style={{ backgroundColor: "black" }}></div>
            </div>
          </div>
        </article>
        <OurOffer />
        <IzradaWeb title="Izrada web stranica" />
        <DigitalSolution />
        <IzradaWeb title="Izrada mobilnih aplikacija" reverse={true} />
        <WhyUs />
        <Technologies />
        <ContactFormRetro title="You have a question? We will get back as fast as we can!" />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
