import React, { MouseEventHandler, useEffect } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner"
import { Button } from '../button/button';
import styles from './scanner.module.scss'
import { BiLoader } from 'react-icons/bi';

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
   /**
   * option pour fixer le scroll du fond d'écran quand le scan est actif
   */
  scrollFixed?: boolean
}

/**
 * Composant qui active la caméra pour le scan de code-barre
 * Il s'affiche au premier plan de l'application
 * 
 * @param setData fonction de récupération de la donnée
 * @param onClickButton action après le click sur le bouton
 * @param buttonLabel label du bouton
 * @param buttonColor couleur du bouton
 * @param scrollFixed option pour fixer le scroll du fond d'écran quand le scan est actif
 */
export function BarcodeScanner( {setData, onClickButton, buttonLabel, buttonColor, scrollFixed}: BarcodeScannerProps) {

  // Hook pour exécuter une action lors du montage du composant en fonction du props plop
  useEffect(()=>{
    if (scrollFixed) {
      document.body.style.overflow = 'hidden'
    }
  },[])

  // Hook pour exécuter une action lors du démontage du composant
  useEffect(() => {
      return () => { 
        document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cam}>
          <BarcodeScannerComponent height="30%"
              onUpdate={( err, result ) => {
                if (result) {
                  // @ts-ignore
                  setData(result.text);
                }
              }}
              />
        </div>
        <div className={styles.loadingIcon}>
            <BiLoader size="4rem" />
        </div>
      </div>
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