import React, { MouseEventHandler } from 'react'
import {BiLoader} from "react-icons/bi";
import styles from "./button.module.scss"

export type ButtonProps = {
  /**
   * sont type "submit ou bouton"
   */
  type: "button" | "submit"
  /**
   * le nom du bouton qui sera afficher
   */
  name: string | number
  /**
   * la couleur de fond du bouton "primary ou secondary"
   */
  color: "primary" | "secondary"
  /**
   * afficher un spinner sur le bouton
   */
  loading?: boolean
  /**
   * Défini si le composant est actif
   */
  disabled?: boolean
  /**
   * function qui sera appelée lors du click si type button
   */
  onClick?: MouseEventHandler
}

/**
 * Composant Bouton générique
 *
 * @param type sont type "submit ou bouton"
 * @param name le nom du bouton qui sera afficher
 * @param color la couleur de fond du bouton "primary ou secondary"
 * @param disabled Défini si le composant est actif
 * @param loading afficher un spinner sur le bouton
 * @param onClick function qui sera appelée lors du click si type button
 */
export function Button ({
                                  type,
                                  name,
                                  color,
                                  disabled = false,
                                  loading = false,
                                  onClick
                                }: ButtonProps ) {

  /**
   * Render
   */                                
  return (
    <div className={styles.container}>
      <input className={`${styles.button} ${styles[color]}`}
             type={type}
             value={name}
             onClick={onClick}
             disabled={disabled}
      />
      {loading && 
        <BiLoader className={styles.loadingLogo}/>
      }
    </div>
  )
}
