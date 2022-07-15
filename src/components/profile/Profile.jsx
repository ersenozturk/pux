import styles from './Profile.module.css';
import { BsChevronDown } from "react-icons/bs";

const Profile = () => {
  return (
    <>
      <img
        src="https://www.iconninja.com/files/553/986/399/face-avatar-icon.png"
        alt=""
      />
      <p>Örnek İnsan</p>
      <BsChevronDown className={styles.downArrow} />
    </>
  );
};

export default Profile;
