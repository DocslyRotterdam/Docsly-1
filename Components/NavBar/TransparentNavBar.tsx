import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../SharedFolder/Logo";
import { ScrollListener } from "../SharedFolder/ScrollListener";
import Items from "./Items";
import styles from "./MainNavBar.module.scss";

const TransparentNavBar: React.FC<{ color?: string; secondColor?: string }> = ({ color, secondColor }) => {
  const [hide, setHide] = useState(false);
  const [activate, setActivate] = useState(false);
  useEffect(() => {
    const s = new ScrollListener(setHide, setActivate);
    s.ScrollIng();
    s.ActivateOn100();
  }, []);

  return (
    <motion.nav
      animate={hide ? { y: "-100%" } : { y: "0%" }}
      className={styles.nav}
      style={
        !activate ? { position: "fixed", left: 0, borderStyle: "none", backgroundColor: color } : { position: "fixed", backgroundColor: secondColor }
      }
    >
      <Logo width={50} />

      <h1 className={styles.h1}>Docsly</h1>
      <Items />
    </motion.nav>
  );
};

export default TransparentNavBar;
