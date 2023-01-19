import React, { useState, FocusEventHandler, MouseEventHandler, ChangeEventHandler } from "react"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsUpcScan, BsCheckLg } from "react-icons/bs"
import styles from "./input-text.module.scss"

export type InputTextProps = {
  /**
   * le type "text, number, password"
   */
  type: "text" | "number" | "password"
  /**
   * le libéllé qui sera afficher sur le composant
   */
  label: string
  /**
   * récupère la valeur de l'input
   */
  value: string | number
  /**
   * définir l'état en lecture seul du composant
   */
  readonly?: boolean
  /**
   * message d'erreur a afficher
   */
   errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  /**
   * action au changement d'état
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * le nom utilisé pour l'identifier au sein d'un form useform
   */
   useFormName?: string
  /**
   * action quand le focus est perdu sur l'input
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * selectionne toute la value de l'input si clique sur l'input
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
  /**
 * affiche un bouton pour activer le module scan sur caméra
 */
  scanButton?: boolean
  /**
 * action du bouton scan
 */
  onScan?: MouseEventHandler<HTMLDivElement>
  /**
 * le nom/id de l'input
 */
  name?: string
/**
 * affiche un icone de validation
 */
  checked?: boolean
  /**
   * indique l'incrément que la valeur doit suivre
   */
  step?: string | number
  /**
   * affiche l'unité du produit
   */
  unit? : string
}

/**
 * Composant champ éditable
 *
 * @param type le type "text, number, password"
 * @param label le libéllé qui sera afficher sur le composant
 * @param useFormName le nom utilisé pour l'identifier au sein d'un form useform
 * @param name le nom/id de l'input
 * @param value récupère la valeur de l'input
 * @param readonly définir l'état en lecture seul du composant
 * @param onChange action au changement d'état
 * @param onBlur action quand le focus est perdu sur l'input
 * @param errorMessage message d'erreur a afficher
 * @param onFocus action au clique sur l'input
 * @param scanButton affiche un bouton pour activer le module scan sur caméra
 * @param onScan action du bouton scan
 * @param name le nom/id de l'input
 * @param checked affiche un icone de validation
 * @param unit affiche l'unité du produit
 */
export function InputText({
  type,
  label,
  name,
  value,
  readonly = false,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
  scanButton,
  onScan,
  useFormName,
  checked,
  step,
  unit
}: InputTextProps) {

  // Parametre du composant ---------------------------------------------------------------------
  /**
   * Hook react
   */
  const [visible, setVisible] = useState<boolean>(true)
  const [inputType, setInputType] = useState<string>(type)


  // HANDLER -------------------------------------------------------------------------------------------
  /**
   * Handler pour changer le type d'input text a password ou inversement
   */
  function handleVisibleClick() {
    setInputType(visible ? "text" : "password")
    setVisible(!visible)
  }

  /**
   * Render
   */
  return (
    <div className={styles.inputContainer}>
      <div className={styles.container}>
        <input type={inputType} placeholder=" " autoComplete="off" readOnly={readonly} name={name}
          className={styles.inputField} onChange={onChange} aria-labelledby={`${name}-label`} onBlur={onBlur} value={value} onFocus={onFocus} step={step}
        />
        <label htmlFor={useFormName} id={`${name}-label`} className={styles.inputLabel}>{label}</label>
        {checked &&
          <div className={scanButton ? `${styles.checkAndScanIcon}` : `${styles.checkIcon}`}>
            <BsCheckLg />
          </div>
        }
        {type === "password" &&
          <div className={scanButton ? `${styles.pwdAndScanIcon}` : `${styles.pwdIcon}`} >
            {
              visible ?
                <span onClick={handleVisibleClick}>
                  <AiOutlineEye />
                </span>
                :
                <span onClick={handleVisibleClick}>
                  <AiOutlineEyeInvisible />
                </span>
            }
          </div>
        }
        {scanButton &&
          <div className={styles.scanIcon} onClick={onScan}>
            <BsUpcScan />
          </div>
        }
        {unit && <p className={styles.unit}>{unit}</p>}
      </div>
      {errorMessage && (<p className={styles.inputError}>{errorMessage}</p>)}
    </div>
  )
}
