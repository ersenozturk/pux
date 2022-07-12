import styles from './Buttons.module.css'


const Buttons = ({content}) => {
  return (
    <button className={styles.buttons}>{content}</button>
  )
}

export default Buttons