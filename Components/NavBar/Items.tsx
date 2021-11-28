import { useRouter } from "next/dist/client/router";
import styles from "./Items.module.scss";
import MobileNavigation from "./MobileNavigation";

const Items: React.FC<{ Selected: string }> = ({ Selected }) => {
  const ItemsList = ["Home", "About", "Services", "Contact", "Q&A"];
  const router = useRouter();
  return (
    <div className={styles.Items}>
      <span style={{ marginRight: "1rem" }} className={styles.ItemsWrapper}>
        {ItemsList.map((val: string, index: number) => {
          return (
            <i
              onClick={() => {
                go_to_link(val);
              }}
              className={styles.i}
              style={{ cursor: "pointer" }}
              key={index}
            >
              {val}
              <strong className={styles.UnderLine}></strong>
            </i>
          );
        })}
      </span>
    </div>
  );
  function go_to_link(link: string) {
    if (link === "Home") router.push("/home");
    else router.push("/" + link);
  }
};

export default Items;
