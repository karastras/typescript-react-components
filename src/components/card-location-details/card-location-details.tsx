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
  item: {
    quantity?: number
    palletCode?: string
    warehouseCode?: string
    locationCode?: string
    areaCode?: string
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
  * label emplacement
  */
  locationLabel: string
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
  * label pallet
  */
  palletLabel: string
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
export function CardLocationDetails({
  item,
  quantityLabel,
  warehouseLabel,
  areaLabel,
  spanLabel,
  rackLabel,
  levelLabel,
  positionLabel,
  empty,
  palletLabel,
  locationLabel
}: CardLocationDetailsProps) {

  /**
   * Render
   */
  return (
    <ul className={styles.container}>
      {item?.quantity && item.quantity > 0 ?
        <li>{quantityLabel}:
          <span className={styles.element}>{item.quantity}</span>
        </li>
        : undefined}
      {item.palletCode &&
        <li>{palletLabel}:
          <span className={styles.element}>{item?.palletCode}</span>
        </li>
      }
      {item?.warehouseCode &&
        <li>{warehouseLabel}:
          <span className={styles.element}>{item?.warehouseCode} </span>
        </li>
      }
      {item?.areaCode &&
        <li>{areaLabel}:
          <span className={styles.element}>{item?.areaCode} </span>
        </li>
      }
      {item?.locationCode &&
        <li>{locationLabel}:
          <span className={styles.element}>{item?.locationCode} </span>
        </li>
      }
      {item?.span &&
        <li>{spanLabel}:
          <span className={styles.element}>{item?.span}</span>
        </li>
      }
      {item?.rack &&
        <li>{rackLabel}:
          <span className={styles.element}>{item?.rack}</span>
        </li>
      }
      {item?.level &&
        <li>{levelLabel}:
          <span className={styles.element}>{item?.level}</span>
        </li>
      }
      {item.position &&
        <li>{positionLabel}:
          <span className={styles.element}>{item?.position}</span>
        </li>
      }
      {!item && <li>{empty}</li>}
    </ul>
  )
}