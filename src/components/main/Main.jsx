import React, { useState } from "react";
import styles from "./Main.module.css";
import MainTopUp from "../mainTopUp/MainTopUp";
import MainTopDown from "../mainTopDown/MainTopDown";
import Dropdowns from "../dropdowns/Dropdowns";
import Inputs from "../inputs/Inputs";
import Buttons from "../buttons/Buttons";
import Lists from "../lists/Lists";
import Editor from "../Editor/Editor";
import { BiArrowBack } from "react-icons/bi";

const Main = () => {
  const [pageOne, setPageOne] = useState(true);

  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

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
            <Dropdowns title="Alt Başlık" />
            <Dropdowns title="Dil Tonu" />
          </div>
          <div className={styles.inputArea}>
            <Inputs title="Örnek Metin" rows="5" />
          </div>
          <div className={styles.inputArea}>
            <Inputs title="Anahtar Kelime" rows="2"  />
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
          {pageOne ? (
            <>
              <h5>AI Metin Yazarı Dosyalarım</h5>
              <p>Lorem İpsum</p>
              <div
                className={`${styles.lists} ${styles.active}`}
                onClick={() => setPageOne(false)}
              >
                <Lists listName="Dosya Adı" />
              </div>
              <div className={styles.lists}>
                <Lists listName="Dosya Adı" />
              </div>
              <div className={styles.lists}>
                <Lists listName="Dosya Adı" />
              </div>
            </>
          ) : (
            <div>
              <div
                className={styles.backAndDosya}
                onClick={() => setPageOne(true)}
              >
                <div className={styles.backIcon}>
                  <BiArrowBack style={{ fontSize: "1.7rem" }} />
                </div>
                <h5>Dosya Adı</h5>
              </div>
              <div className={styles.parentEditorDiv}>
                <Editor initialValue="" getValue={getValue} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
