import styles from "./Inputs.module.css";


const Inputs = ({title, rows, cols}) => {
  return (
    <div className={styles.inputs}>
      <label htmlFor="drop-down">{title}</label>
      <textarea rows={rows} cols={cols} placeholder="Konu Başlığı"></textarea>
    </div>
  );
};

export default Inputs;
