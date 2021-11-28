import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Komentari.module.scss";
import Image from "next/image";
import { Comment } from "./FakeComments";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCloud, faReply } from "@fortawesome/free-solid-svg-icons";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Komentari() {
  const ref = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const element = document.getElementById("swiper");
    if (element !== null) ref.current = element;
  }, []);
  return (
    <div style={{ width: "100%", padding: "5rem 0", position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
      <Lines
        scrollTo={(val: number) => {
          ref.current.swiper.slideTo(val);
        }}
        selected={currentSlide}
      />
      <Swiper
        onSlideChange={(e) => {
          setCurrentSlide(e.activeIndex);
        }}
        loop={true}
        id="swiper"
        navigation={false}
        pagination={true}
        className={styles.swiper}
      >
        {Comment.map((val, index) => (
          <SwiperSlide key={index} className={styles.SwiperSlide}>
            <Komentar data={val} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.ButtonWrapper}>
        <div className={styles.ButtonParent}>
          <div
            className={styles.LeftButton}
            onClick={() => {
              ref.current.swiper.slidePrev();
            }}
            style={{ backgroundColor: "white", borderStyle: "solid", width: "60px", height: 60, borderRadius: "50%" }}
          >
            <FontAwesomeIcon width="20" icon={faArrowLeft} />
          </div>
          <div
            onClick={() => {
              ref.current.swiper.slideNext();
            }}
            className={styles.RightButton}
            style={{ backgroundColor: "white", borderStyle: "solid", width: "60px", height: 60, borderRadius: "50%" }}
          >
            <FontAwesomeIcon width="20" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Lines: React.FC<{ selected: number; scrollTo: Function }> = ({ selected, scrollTo }) => {
  return (
    <div className={styles.Lines}>
      {[0, 1, 2, 3, 4].map((val, index) => (
        <div
          onClick={() => {
            scrollTo(val);
          }}
          className={styles.Line}
          style={selected === index ? { backgroundColor: "green" } : {}}
          key={index}
        />
      ))}
    </div>
  );
};

const Komentar: React.FC<{ data: { komentar: string; osoba: string } }> = ({ data }) => {
  return (
    <div className={styles.Komentar}>
      <section>
        <FontAwesomeIcon width="25" color="green" icon={faReply} />
        <FontAwesomeIcon width="25" color="green" icon={faReply} />
      </section>
      <section style={{ maxWidth: "80%" }}>
        <h2 className={styles.h2}>{data.komentar}</h2>
        <article style={{ display: "flex", alignItems: "center", color: "#303336" }}>
          <div style={{ position: "relative", width: 50, height: 50, minWidth: 50, minHeight: 50, borderRadius: "50%", overflow: "hidden" }}>
            <Image alt="" src="/people.jpg" width={50} height={50} />
          </div>
          <span style={{ marginLeft: "1rem" }}>{data.osoba}</span>
        </article>
      </section>
    </div>
  );
};
