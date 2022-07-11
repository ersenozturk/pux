import React from 'react'
import styles from './LeftBar.module.css'
import { BsPlusLg, BsFillFileTextFill, BsFileImageFill, BsFillHeartFill } from "react-icons/bs";
import { RiCompassDiscoverLine, RiFolder3Fill } from "react-icons/ri";
import { BiTrendingUp } from "react-icons/bi";
import { MdColorLens } from "react-icons/md";
import { IoFolderSharp, IoSettings, IoExitOutline } from "react-icons/io5";

const LeftBar = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.logoipsum}>
          <span>logo</span> <span>ipsum</span>
      </div>
      <div className={styles.menuItem}>
        <div className={`${styles.icon} ${styles.add}`}> <BsPlusLg /> </div>
        <div className={styles.iconText}>Yeni Proje </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <RiCompassDiscoverLine /> </div>
        <div className={styles.iconText}>Keşfet </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <BsFillFileTextFill /> </div>
        <div className={styles.iconText}>AI Metin Yazarı </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <BsFileImageFill /> </div>
        <div className={styles.iconText}>AI Görsel Oluşturucu </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <BiTrendingUp /> </div>
        <div className={styles.iconText}>Trendler </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <MdColorLens /> </div>
        <div className={styles.iconText}>Renk Analizi </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <RiFolder3Fill /> </div>
        <div className={styles.iconText}>Projelerim</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <BsFillHeartFill /> </div>
        <div className={styles.iconText}>Favorilerim</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <IoFolderSharp /> </div>
        <div className={styles.iconText}>Paketler</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <IoSettings /> </div>
        <div className={styles.iconText}>Ayarlar</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.icon}> <IoExitOutline /> </div>
        <div className={styles.iconText}>Çıkış Yap </div>
      </div>

    </div>
  )
}

export default LeftBar