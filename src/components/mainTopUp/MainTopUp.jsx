import styles from "./MainTopUp.module.css";
import { BsSearch, BsBell, BsChevronDown } from "react-icons/bs";
import Profile from "../profile/Profile";

const MainTopUp = () => {
  return (
    <div className={styles.mainTopUp}>
      <div className={styles.mainTopUpLeft}>
        <div className={styles.text}>Arge Projesi’ne Hoşgeldin Örnek İnsan</div>
      </div>
      <div className={styles.mainTopUpRight}>
        <div className={styles.search}>
          <div className={styles.icon}>
            <BsSearch />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className={styles.inputSearch}
            placeholder="Arama yapın..."
          />
        </div>

        <div className={styles.bell}>
          <BsBell />
          <div className={styles.redPoint}></div>
        </div>

        <div className={styles.guest}>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default MainTopUp;
