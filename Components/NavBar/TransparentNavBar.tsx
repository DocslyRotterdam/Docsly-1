import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../SharedFolder/Logo";
import { ScrollListener } from "../SharedFolder/ScrollListener";
import Items from "./Items";
import styles from "./MainNavBar.module.scss";
import MobileNavigation from "./MobileNavigation";

const TransparentNavBar: React.FC<{ Selected: string; color?: string; secondColor?: string }> = ({ Selected, color, secondColor }) => {
  const [hide, setHide] = useState(false);
  const [activate, setActivate] = useState(false);
  const router = useRouter();
  useLayoutEffect(() => {
    const s = new ScrollListener(setHide, setActivate);
    s.ScrollIng();
    s.ActivateOn100();
  }, []);

  return (
    <>
      <motion.nav
        transition={{ bounce: 0.1 }}
        animate={hide ? { y: "-100%" } : { y: "0%" }}
        className={styles.nav}
        style={
          !activate
            ? { position: "fixed", left: 0, borderStyle: "none", backgroundColor: color }
            : { position: "fixed", backgroundColor: secondColor }
        }
      >
        <Logo width={50} />

        <h1
          onClick={() => {
            router.push("/Home");
          }}
          className={styles.h1}
        >
          Docsly
        </h1>
        <Items Selected={Selected} />
      </motion.nav>
      <MobileNavigation Selected={Selected} show={hide} />
    </>
  );
};

export default TransparentNavBar;
