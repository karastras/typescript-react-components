import React from 'react';
import { Button } from "../button/button";
import styles from './card-location.module.scss'

export type CardLocationProps = {
    /**
     * identifiant du dépôt
     */
    warehouse?: string
    /**
    * identifiant de la zone
    */
    area?: string
    /**
    * identifiant de la position
    */
    position?: string
    /**
    * fonction appelée après le click du boutton
    */
    onClick: Function
    /**
    * Label de warehouse
    */
    warehouseLabel: string
    /**
     * Label de area
     */
    areaLabel: string
    /**
     * Label de location
     */
    locationLabel: string
    /**
     * Label de location
     */
     buttonLabel: string
}

/**
 * Composant affichant les informations de l'emplacement avec un bouton "Modifier"
 *
 * @param warehouse identifiant du dépôt
 * @param area identifiant de la zone
 * @param position identifiant de la position
 * @param onClick fonction appelée après le click du boutton
 * @param warehouseLabel label de warehouse
 * @param locationLabel label de area
 * @param areaLabel label de location
 * @param buttonLabel label du bouton
 */
export function CardLocation({
    warehouse,
    area,
    position,
    onClick,
    warehouseLabel,
    locationLabel,
    areaLabel,
    buttonLabel
}: CardLocationProps) {

    /**
    * Render
    */
    return (
        <div className={styles.card}>
            <ul className={styles.list}>
                <li >{warehouseLabel}: <span className={styles.element}>{warehouse}</span></li>
                <li >{areaLabel}: <span className={styles.element}>{area}</span> </li>
                <li >{locationLabel}: <span className={styles.element}>{position}</span></li>
            </ul>
            <div className={styles.editButton}>
                <Button type="button" name={buttonLabel} color="secondary" onClick={onClick()} />
            </div>
        </div>
    )
}