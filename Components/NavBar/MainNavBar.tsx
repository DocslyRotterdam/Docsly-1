import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../SharedFolder/Logo";
import { ScrollListener } from "../SharedFolder/ScrollListener";
import Items from "./Items";
import styles from "./MainNavBar.module.scss";

const MainNavBar: React.FC<{ fixed?: boolean }> = ({ fixed }) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    console.log("ffec");
    const s = new ScrollListener(setHide);
    s.ScrollIng();
  }, []);

  return (
    <motion.nav
      animate={hide ? { y: "-100%" } : { y: "0%" }}
      className={styles.nav}
      style={fixed ? { position: "fixed", left: 0, borderStyle: "none" } : {}}
    >
      <Logo width={50} />

      <h1 className={styles.h1}>Docsly</h1>
      <Items />
    </motion.nav>
  );
};

export default MainNavBar;
