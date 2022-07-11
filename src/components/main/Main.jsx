import React from 'react'
import styles from './Main.module.css'
import MainTopUp from '../mainTopUp/MainTopUp'
import MainTopDown from '../mainTopDown/MainTopDown'

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <MainTopUp />
      <MainTopDown />
    </div>
  )
}

export default Main