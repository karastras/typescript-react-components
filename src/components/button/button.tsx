import React, { MouseEventHandler } from 'react'
import {BiLoader} from "react-icons/bi"
import styles from "./button.module.scss"

export type ButtonProps = {
  /**
   * sont type "submit ou bouton"
   */
  type: "button" | "submit"
  /**
   * le nom du bouton qui sera afficher
   */
  name?: string | number
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
  /**
   * l'icone qui sera affiché
   */
  icon?: any
  /**
   * id du bouton
   */
  buttonId?: string
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
 * @param icon l'icone qui sera affiché
 * @param buttonId id du bouton
 */
export function Button ({
                                  type,
                                  name,
                                  color,
                                  disabled = false,
                                  loading = false,
                                  onClick,
                                  icon,
                                  buttonId
                                }: ButtonProps ) {

  /**
   * Render
   */                                
  return (
    <div className={styles.container}>
      <button className={disabled ?  `${styles.buttonDisabled} ${styles[color]} ${icon && styles.buttonIcon}` : `${styles.button} ${styles[color]} ${icon && styles.buttonIcon}`}
             type={type}
             onClick={onClick}
             disabled={disabled}
             id={buttonId}
      >
        {name && !icon && name} {icon && !name && <span className={styles.icon}>{icon}</span>}
        {name && icon && 
          <div className={styles.mix}>
            <span className={styles.name}>{name}</span> 
            <span className={styles.icon}>{icon}</span> 
             
          </div> 
        }
        {loading && 
          <BiLoader className={styles.loadingLogo}/>
        }
      </button>
    </div>
  )
}
