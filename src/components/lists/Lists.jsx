import styles from "./Lists.module.css";
import { BsFillFileTextFill } from "react-icons/bs";

const Lists = ({listName}) => {
  return (
    <div className={styles.lists}>
      <div className={styles.icon}>
        <BsFillFileTextFill />
      </div>
      <div className={styles.fileName}>{listName}</div>
    </div>
  );
};

export default Lists;
