import { motion } from "framer-motion";
import { Router, useRouter } from "next/dist/client/router";
import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../SharedFolder/Logo";
import { ScrollListener } from "../SharedFolder/ScrollListener";
import Items from "./Items";
import styles from "./MainNavBar.module.scss";
import MobileNavigation from "./MobileNavigation";

const MainNavBar: React.FC<{ Selected: string; fixed?: boolean }> = ({ Selected, fixed }) => {
  const [hide, setHide] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const s = new ScrollListener(setHide);
    s.ScrollIng();
  }, []);

  return (
    <>
      <motion.nav
        transition={{ bounce: 0.1 }}
        animate={hide ? { y: "-100%" } : { y: "0%" }}
        className={styles.nav}
        style={fixed ? { position: "fixed", left: 0, borderStyle: "none" } : {}}
      >
        <Logo width={50} />

        <h1
          onClick={() => {
            router.push("/home");
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

export default MainNavBar;
