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
     * Affiche un bouton qui renvoie vers '/settings'
     */
    settings?: boolean
    /**
     * Le chemin de navigation
     */
    path?: string
    /**
     * Affiche la version
     */
    version?: string
}

/**
 * Composant affichant le nom de l'application et le bouton de configuration
 * 
 * @param appName Le nom de l'application
 * @param settings Optionnel -> affiche un bouton de navigation
 * @param path Optionnel -> le chemin de navigation
 * @param version Optionnel -> affiche la version
 */

export function Footer({ appName, settings, path, version }: FooterProps) {
    /**
   * Render
   */
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>{appName} <span className={styles.by}>by</span> Mismo {version}</p>
            {settings && path &&
                <Link to={path}>
                    <BiCog className={styles.bicog} />
                </Link>
            }
        </footer>
    )
}