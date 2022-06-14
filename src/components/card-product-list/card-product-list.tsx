import React from 'react'
import { TiDelete } from 'react-icons/ti'
import styles from './card-product-list.module.scss'

export type CardProductListProps = {
  /**
  * affiche la dénomation de l'article
  */
  name?: string
  /**
  * affiche la description de l'article
  */
  description?: string
  /**
  * affiche la quantité de l'article
  */
  quantity?: number | string
  /**
  * affiche l'unité de l'article
  */
  unit?: string
  /**
  * indique au composant qu'une liste est à afficher (change le style)
  */
  list?: boolean
  /**
  * change l'affichage de la fiche pour indiquer uniquement une référence
  */
  singleRef?: boolean
  /**
  * affiche le bouton de suppression du produit
  */
  deleteItem?: boolean
  /**
  * fonction appelée après le click du boutton "Delete"
  */
  onDeleteItem: Function
   /**
  * label de référence
  */
  refLabel?: string
   /**
  * label de description
  */
  descriptionLabel?: string
   /**
  * label de quantité
  */
  quantityLabel?: string
}

/**
 * Composant/Formulaire pour consulter l'existence d'une palette (si "pallet" renseigné) ou d'un produit et de renseigner une quantité.
 * Permet de créer une fiche palette contenant la référence de la palette ou
 * créer un fiche du produit recherché contenant sa dénomination, sa description et la quantité.
 * 
 * Par défaut il est prévu pour afficher un seul produit/palette.
 * Si une liste de plusieurs produit est requise, il faut rensegner les props "list" et "index"
 *
 * @param name affiche la dénomation de l'article
 * @param description affiche la description de l'article
 * @param quantity affiche la quantité de l'article
 * @param unit affiche l'unité de l'article
 * @param list indique au composant qu'une liste est à afficher (change le style)
 * @param singleRef change l'affichage de la fiche pour indiquer uniquement une référence
 * @param deleteItem affiche le bouton de suppression du produit
 * @param onDeleteItem fonction appelée après le click du boutton "Delete"
 * @param refLabel label de référence
 * @param descriptionLabel label de description
 * @param quantityLabel label de quantité
 */
export function CardProductList({
  name,
  description,
  quantity,
  unit,
  list,
  singleRef,
  deleteItem,
  onDeleteItem,
  refLabel,
  descriptionLabel,
  quantityLabel
}: CardProductListProps) {

  /**
  * Render
  */
  return (
    <div>
      <div className={list ? styles.cardList : styles.cardSingle} >
        <div>
          {singleRef && <p>{refLabel}:</p>}
          <p className={styles.denomination}>{name}</p>
        </div>
        {deleteItem &&
          <div className={list ? styles.cardListDelete : styles.cardSingleDelete}>
            <TiDelete color='red' size="2rem" onClick={onDeleteItem()} />
          </div>}
        {description &&
          <div>
            <p >{descriptionLabel}: </p>
            <p className={styles.bold}>{description}</p>
          </div>
        }
        {quantity &&
          <div className={styles.quantityContent}>
            <p className={styles.quantity}>{quantityLabel}: </p>
            <p className={styles.number}>{quantity} {unit}</p>
          </div>
        }
      </div>
    </div>
  )
}