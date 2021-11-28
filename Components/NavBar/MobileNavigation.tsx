import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import styles from "./MobileNavigation.module.scss";

const MobileNavigation: React.FC<{ Selected: string; show: boolean }> = ({ Selected, show }) => {
  const ItemsList = ["Home", "About", "Services", "Contact", "Q&A"];
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <motion.div initial={false} animate={!show ? { opacity: 1 } : { opacity: 0 }} className={styles.MobileNavigation}>
        <motion.section
          animate={open ? { height: 0 } : { height: "auto" }}
          onClick={() => {
            setOpen(true);
          }}
          className={styles.Selected}
          style={{ cursor: "pointer", overflow: "hidden", width: "100%" }}
        >
          {Selected}
        </motion.section>

        <motion.section animate={open ? { height: "auto" } : { height: 0 }} className={styles.Items}>
          {ItemsList.map((val, index) => {
            return (
              <div
                onClick={() => {
                  change_link(val);
                }}
                className={styles.Item}
                key={index}
              >
                {val}
              </div>
            );
          })}
        </motion.section>
      </motion.div>
      <motion.div
        onClick={() => {
          setOpen(false);
        }}
        animate={open ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0 }}
        style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", zIndex: 10000 }}
      ></motion.div>
    </>
  );
  function change_link(link: string) {
    setOpen(false);
    router.push("/" + link);
  }
};

export default MobileNavigation;
