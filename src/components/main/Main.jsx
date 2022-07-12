import React from "react";
import styles from "./Main.module.css";
import MainTopUp from "../mainTopUp/MainTopUp";
import MainTopDown from "../mainTopDown/MainTopDown";
import Dropdowns from "../dropdowns/Dropdowns";
import Inputs from "../inputs/Inputs";
import Buttons from "../buttons/Buttons";
import Lists from "../lists/Lists";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <MainTopUp />
      <MainTopDown />

      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.doubleDrop}>
            <Dropdowns title="Konu Başlığı" />
            <Dropdowns title="Dil Seçimi" />
          </div>
          <div className={styles.doubleDrop}>
            <Dropdowns title="Konu Başlığı" />
            <Dropdowns title="Dil Seçimi" />
          </div>
          <div className={styles.inputArea}>
            <Inputs title="Örnek Metin" rows="5" cols="60" />
          </div>
          <div className={styles.inputArea}>
            <Inputs title="anahtar Kelime" rows="2" cols="60" />
          </div>
          <div className={styles.doubleDrop}>
            <Dropdowns title="Yaratıcılık Seçimi" />
            <Dropdowns title="Varyant Sayısı" />
          </div>
          <div className={styles.sonucBul}>
            <Buttons content="Sonuç Bul" />
          </div>
        </div>

        <div className={styles.mainRight}>
          <h5>AI Metin Yazarı Dosyalarım</h5>
          <p>Lorem İpsum</p>
          <div className={styles.listDosya}>
            <Lists listName='Dosya Adı'/>
          </div>
          <div className={styles.listDosya}>
            <Lists listName='Dosya Adı' />
          </div>
          <div className={styles.listDosya}>
            <Lists listName='Dosya Adı' />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Main;
