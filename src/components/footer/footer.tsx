import React from 'react'
import styles from './footer.module.scss'
import { BiCog } from "react-icons/bi"
import { Link } from 'react-router-dom'

export type FooterProps = {
  /**
   * Le nom de l'application
   */
  appName: string
  /**
   * Optionnel -> affiche un bouton qui renvoie vers '/settings'
   */
  settings?: boolean
}

/**
 * Composant affichant le nom de l'application et le bouton de configuration
 * 
 * @param appName Le nom de l'application
 * @param settings Optionnel -> affiche un bouton qui renvoie vers '/settings'
 */
 
export const Footer = ({appName, settings}: FooterProps) => {

    /**
   * Render
   */
    return (
        <div className={styles.container}>
            <p className={styles.text}>{appName} <span className={styles.by}>by</span> Mismo</p>
            {settings &&
                <Link to="/settings">
                    <BiCog className={styles.bicog} />
                </Link>
            }
        </div>
    )
}