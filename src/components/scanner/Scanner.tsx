import React, { FC, MouseEventHandler } from 'react';
import { Button } from '../button/button';
import BarcodeScannerComponent from "react-qr-barcode-scanner"
import styles from './scanner.module.scss'

export type BarcodeScannerProps = {
  /**
 * fonction de récupération de la donnée
 */ 
  setData: Function
  /**
 * action après le click sur le bouton
 */ 
  onClickButton: MouseEventHandler<HTMLButtonElement>
  /**
 * label du bouton
 */
  buttonLabel: string
  /**
 * couleur du bouton
 */
  buttonColor: 'primary' | 'secondary'
}

/**
 * Composant qui active la caméra pour le scan de code-barre
 * Il s'affiche au premier plan de l'application
 * 
 * @param setData fonction de récupération de la donnée
 * @param onClickButton action après le click sur le bouton
 * @param buttonLabel label du bouton
 * @param buttonColor couleur du bouton
 */
export function BarcodeScanner( {setData, onClickButton, buttonLabel, buttonColor}: BarcodeScannerProps) {
  return (
    <div className={styles.container}>
        <BarcodeScannerComponent
            onUpdate={( err, result ) => {
                if (result) {
                    setData(result.getText());
                }
            }}
        />
        <div className={styles.cancelButton}>
            <Button color={buttonColor}
                    name={buttonLabel}
                    type='button'
                    onClick={onClickButton}
            />
        </div>
    </div>
  )
}


