import React from "react";
import styles from './card-location-details.module.scss'

export type CardLocationDetailsProps = {
  /**
  * Objet: {
  *  quantity: number | string 
  *  warehouse: string
  *  area: string
  *  span: string
  *  rack: string
  *  level: string
  *  position: string}
  * la quantité est optionnelle et n'affiche pas de quantité à 0
  */
  location: {
    quantity?: number | string
    warehouseCode?: string
    area?: string
    span?: string
    rack?: string
    level?: string
    position?: string
  }
/**
  * label quantité
  */
  quantityLabel?: string
  /**
  * label dépôt
  */
  warehouseLabel: string
  /**
  * label zone
  */
  areaLabel: string
  /**
  * label travée
  */
  spanLabel: string
  /**
  * label rack
  */
  rackLabel: string
  /**
  * label niveau
  */
  levelLabel: string
  /**
  * label position
  */
  positionLabel: string
  /**
  * Message à afficher en cas d'absence de data
  */
  empty: string
}

/**
 * Composant affichant le détails de l'emplacement et, si précisé, la quantité du produit
 *
 * @param location objet passé en props contentant les données à afficher
 */
export function CardLocationDetails ({
  location,
  quantityLabel,
  warehouseLabel,
  areaLabel,
  spanLabel,
  rackLabel,
  levelLabel,
  positionLabel,
  empty
}: CardLocationDetailsProps) {

  /**
   * Render
   */
  return (
      <ul className={styles.container}>
        {location?.quantity  && location.quantity > 0 ?
          <li>{quantityLabel}:
          <span className={styles.element}>{location.quantity}</span>
        </li> 
        : undefined}
        <li>{warehouseLabel}:
          <span className={styles.element}>{location?.warehouseCode || empty} </span>
        </li>
        <li>{areaLabel}:
          <span className={styles.element}>{location?.area || empty} </span>
        </li>
        <li>{spanLabel}:
          <span className={styles.element}>{location?.span || empty}</span>
        </li>
        <li>{rackLabel}:
          <span className={styles.element}>{location?.rack || empty}</span>
        </li>
        <li>{levelLabel}:
          <span className={styles.element}>{location?.level || empty}</span>
        </li>
        <li>{positionLabel}:
          <span className={styles.element}>{location?.position || empty}</span>
        </li>
      </ul>
  )
}