import React from "react";
import { Button } from "../button/button";
import styles from "./modal.module.scss"

export type ModalProps = {
  /**
 * Titre de la modal
 */
  header?: string
  /**
 * Message dans le corps de la modal
 */
  message?: string
  /**
   * Action qui sera appelé en cas de confirmation
 */
  onConfirm?: Function
  /**
* Couleur du bouton "confirm"
*/
  colorConfirm?: "primary" | "secondary"
  /**
  * Label du bouton "confirm"
 */
  confirmLabel?: string
  /**
  * Action qui sera appelé en cas d'annulation
  */
  onCancel?: Function
  /**
   * Couleur du bouton "cancel"
   */
  colorCancel?: "primary" | "secondary"
  /**
   * Label du bouton "cancel"
   */
  cancelLabel?: string
}

/**
* Composant modal
*
* @param header Titre de la modal
* @param message Message dans le corps de la modal
* @param onCancel Action qui sera appelé en cas d'annulation
* @param onConfirm Action qui sera appelé en cas de confirmation
* @param colorCancel Couleur du bouton cancel
* @param colorConfirm Couleur du bouton confirm
* @param confirmLabel label du bouton confirm
* @param cancelLabel label du bouton cancel
*/
export function Modal({ header, message, onCancel, onConfirm, colorConfirm, colorCancel, confirmLabel, cancelLabel }: ModalProps) {

  /**
   * Handler d'annulation
   */
  function handleCancelClick() {
    onCancel && onCancel()
  }

  /**
   * Handler de confirmation
   */
  function handleConfirmClick() {
    onConfirm && onConfirm()
  }

  /**
   * Render
   */
  return (
    <div id="modal"
      className={styles.modalBackDrop + " " + (!message && styles.modalHidden)}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3>{header}</h3>
        </div>
        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <div className={styles.modalFooter}>
          {(onCancel && cancelLabel && colorCancel) &&
            <Button type="button" name={cancelLabel} color={colorCancel} onClick={handleCancelClick} />
          }
          {(onConfirm && confirmLabel && colorConfirm) &&
            <Button type="button" name={confirmLabel} color={colorConfirm} onClick={handleConfirmClick} />
          }
        </div>
      </div>
    </div>
  )
}