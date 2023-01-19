import React, { MouseEventHandler } from 'react';
import { BiChevronLeft } from 'react-icons/bi'
import styles from './button-back.module.scss'

export type BackButtonProps = {
  /**
 * fonction/action appelée après le click du boutton back
 */
  onBackButton: MouseEventHandler
  /**
 * Label affiché sur le bouton (sert essentiellement en cas de traduction)
 */
  label?: string
}

/**
 * Composant bouton de navigation
 *
 * @param onBackButton fonction/action appelée après le click du boutton back
 */
export function BackButton ({onBackButton, label}: BackButtonProps) {

  /**
    * Render
    */
  return (
    <button className={styles.back} onClick={onBackButton}>
        <BiChevronLeft className={styles.arrowIcon} />
        {label && <p>{label}</p>}
    </button>
  )
}