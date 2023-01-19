import React from 'react'
import styles from './coffee.module.scss'

const Coffee = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coffeeHeader}>
        <div className={`${styles.coffeeHeader__buttons} ${styles.coffeeHeader__buttonOne}`}></div>
        <div className={`${styles.coffeeHeader__buttons} ${styles.coffeeHeader__buttonTwo}`}></div>
        <div className={styles.coffeeHeader__display}></div>
        <div className={styles.coffeeHeader__details}></div>
      </div>
      <div className={styles.coffeeMedium}>
        <div className={styles.coffeMedium__exit}></div>
        <div className={styles.coffeeMedium__arm}></div>
        <div className={styles.coffeeMedium__liquid}></div>
        <div className={`${styles.coffeeMedium__smoke} ${styles.coffeeMedium__smokeOne}`}></div>
        <div className={`${styles.coffeeMedium__smoke} ${styles.coffeeMedium__smokeTwo}`}></div>
        <div className={`${styles.coffeeMedium__smoke} ${styles.coffeeMedium__smokeThree}`}></div>
        <div className={`${styles.coffeeMedium__smoke} ${styles.coffeeMedium__smokeFor}`}></div>
        <div className={styles.coffeeMedium__cup}></div>
      </div>
      <div className={styles.coffeeFooter}></div>
  </div>
  )
}

export default Coffee