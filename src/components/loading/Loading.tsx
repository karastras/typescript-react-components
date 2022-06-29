import React from 'react'
import styles from './loading.module.scss'

export type LoadingProps = {
    /**
     * L'image du loading
     */
    logo: string
    /**
     * Alternative au lecteur d'écran
     */
     alt: string
  }
  
  /**
   * Composant affichant une animation de chargement 
   * 
   * @param logo L'image du loading
   * @param alt Alternative au lecteur d'écran
   */
export function Loading ({logo, alt}:LoadingProps) {
    /**
   * Render
   */
    return (
        <div className={styles.loading}>
            <img className={styles.logo} src={logo} alt={alt}/>
        </div>
    )
}