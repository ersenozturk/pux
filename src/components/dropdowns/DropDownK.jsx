import styles from "./Dropdowns.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem";
import { konuBasligi } from "../../helper/DropDownData";

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

        <Dropdown.Menu variant="dark" >
          {konuBasligi.map((each, index) => (
            <DropdownItem  key={index}>
              <div className={styles.iconDesc}>
                <span className={styles.spanIcon}>{each.icon}</span>
                <span className={styles.spanDesc}>{each.desc}</span>
              </div>
            </DropdownItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownK;
