import styles from "./Dropdowns.module.css";

const Dropdowns = ({title}) => {
  return (
    <div className={styles.dropdowns}>
      <label htmlFor="drop-down">{title}</label>
      <select name="drop-down" id="drop-down">
        <option className={styles.optionClass} value="one">Konu Başlığı</option>
      </select>
    </div>
  );
};

export default Dropdowns;
