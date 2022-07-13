import styles from "./MainTopUp.module.css";
import { BsSearch, BsBell, BsChevronDown } from "react-icons/bs";

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
          <img
            src="https://www.iconninja.com/files/553/986/399/face-avatar-icon.png"
            alt=""
          />
          <p>Örnek İnsan</p>
          <BsChevronDown className={styles.downArrow} />
        </div>
      </div>
    </div>
  );
};

export default MainTopUp;
