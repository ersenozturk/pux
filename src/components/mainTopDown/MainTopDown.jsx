import styles from "./MainTopDown.module.css";
import { BsFillFileTextFill } from "react-icons/bs";
import { RiHistoryLine } from "react-icons/ri";

const MainTopDown = () => {
  return (
    <div className={styles.mainTopDown}>
      <div className={styles.metin}>
        <div className={styles.metinIcon}>
          <BsFillFileTextFill />
        </div>
        <div className={styles.metinText}>AI Metin Yazarı</div>
      </div>

      <div className={styles.gecmis}>
        <div className={styles.gecmisIcon}>
          <RiHistoryLine />
        </div>
        <div className={styles.gecmisText}>Geçmiş</div>
      </div>
    </div>
  );
};

export default MainTopDown;
