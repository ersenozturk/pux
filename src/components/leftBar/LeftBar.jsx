import React, { useState } from "react";
import styles from "./LeftBar.module.css";
import {
  BsPlusLg,
  BsFillFileTextFill,
  BsFileImageFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { RiCompassDiscoverLine, RiFolder3Fill } from "react-icons/ri";
import { BiTrendingUp } from "react-icons/bi";
import { MdColorLens } from "react-icons/md";
import { IoFolderSharp, IoSettings, IoExitOutline } from "react-icons/io5";
import logoipsum from "../../assets/logoipsum-logo-17.svg";

const LeftBar = () => {

  const [bgColorCyan, setBgColorCyan] = useState(false);

   const handleClick = () => {
    setBgColorCyan(!bgColorCyan);
  };

  return (
    <div className={styles.leftBar}>
      <div className={styles.logoipsum}>
        <img src={logoipsum} alt="logo" />
      </div>

      <div className={styles.menuItem}>
        <div className={styles.icon}>
          <div className={styles.mood2}>
              <BsPlusLg />
          </div>
        </div>
        <div className={styles.iconText}>Yeni Proje </div>
      </div>


      <div className={styles.menuItem}>
        <div
          className={styles.icon}
        >
          <div className={styles.mood2}>
            <RiCompassDiscoverLine />
          </div>
        </div>
        <div className={styles.iconText}>Keşfet </div>
      </div>
      <div className={`${styles.menuItem} ${styles.active}`}>
        <div className={`${styles.icon2} ${styles.activeIcon}`}>
          <BsFillFileTextFill />
        </div>
        <div className={`${styles.iconText} ${styles.activeText}`}>
          AI Metin Yazarı{" "}
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon2}>
          <BsFileImageFill />
        </div>
        <div className={styles.iconText}>AI Görsel Oluşturucu </div>
      </div>
      <div className={styles.menuItem}>
        <div
          className={styles.icon}

        >
          <div className={styles.mood2}>
            <BiTrendingUp />
          </div>
        </div>
        <div className={styles.iconText}>Trendler </div>
      </div>
      <div className={styles.menuItem}>
        <div
          className={styles.icon}
        >
          <div className={styles.mood2}>
            <MdColorLens />
          </div>
        </div>
        <div className={styles.iconText}>Renk Analizi </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon2}>
          <RiFolder3Fill />
        </div>
        <div className={styles.iconText}>Projelerim</div>
      </div>
      <div className={styles.menuItem}>
        <div
          className={styles.icon}
        >
          <div className={styles.mood2}>
            <BsFillHeartFill />
          </div>
        </div>
        <div className={styles.iconText}>Favorilerim</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon2}>
          <IoFolderSharp />
        </div>
        <div className={styles.iconText}>Paketler</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon2}>
          <IoSettings />
        </div>
        <div className={styles.iconText}>Ayarlar</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon2}>
          <IoExitOutline />
        </div>
        <div className={styles.iconText}>Çıkış Yap </div>
      </div>
    </div>
  );
};

export default LeftBar;
