import styles from "./Dropdowns.module.css";
import Dropdown from "react-bootstrap/Dropdown";

const DropDownK = ({ title }) => {
  return (
    <div className={styles.dropdowns}>
      <label htmlFor="drop-down">{title}</label>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="secondary"
          className={styles.dropToggle}
        >
          Konu Başlığı
        </Dropdown.Toggle>

        <Dropdown.Menu  variant="dark">


        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownK;

