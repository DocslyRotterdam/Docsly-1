import styles from "./IzradaWeb.module.scss";
import Image from "next/image";

const IzradaWeb: React.FC<{ title: string; reverse?: boolean }> = ({ title, reverse }) => {
  return (
    <div className={styles.IzradaWeb}>
      <Pictures reverse={reverse} />
      <section className={styles.Section2} style={reverse ? { gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1 } : {}}>
        <h2>{title}</h2>
        <p style={{ textAlign: `${reverse ? "right" : "left"}`, maxWidth: "90%", margin: "2rem auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut scelerisque sapien, non malesuada mi. Sed a ante sed sapien consectetur
          convallis. Maecenas ex erat, venenatis at urna rhoncus, condimentum ultrices sem. Proin ultricies orci at condimentum convallis. Nulla
          facilisi. Morbi dolor nisl, gravida sodales rhoncus id, volutpat ac felis. Maecenas condimentum vel quam sed imperdiet. Pellentesque
          ultricies ipsum vel vulputate porttitor. Etiam turpis libero, tincidunt ac dictum at, commodo ultrices neque. Nulla imperdiet egestas odio,
          a euismod lectus semper eget. Mauris ut ante vel neque vulputate vulputate.
        </p>
        <div className="buttonFill reverse" style={{ borderColor: "black", color: "black", zIndex: "11" }}>
          Learn more
          <div className="hiddenWave black" style={{ backgroundColor: "black", zIndex: "-1" }}></div>
        </div>
      </section>
    </div>
  );
};

const Pictures: React.FC<{ reverse?: boolean }> = ({ reverse }) => {
  if (reverse)
    return (
      <section className={styles.ImgWrapper} style={{ gridColumnStart: 2, gridColumnEnd: 3, display: "flex", gap: "0", justifyContent: "center" }}>
        <div className={styles.Android}>
          <Image alt="" src="/iphone2.png" layout="fill" objectFit="contain" objectPosition="center" />
        </div>
        <div className={styles.Android2}>
          <Image alt="" src="/android.png" layout="fill" objectFit="contain" objectPosition="center" />
        </div>
      </section>
    );
  return (
    <section className={styles.ImgWrapper}>
      <Image alt="" src="/komp.png" layout="fill" objectFit="contain" objectPosition="center" />
    </section>
  );
};

export default IzradaWeb;
