import React, { ChangeEventHandler } from "react";
import styles from "./checkbox.module.scss";

export type CheckboxProps = {
  /**
 * valeur du check
 */
  value: boolean
   /**
 * action au changement d'état
 */
  onChange: ChangeEventHandler<HTMLInputElement>
   /**
 * valeur du check
 */
  name: string
   /**
 * le libéllé qui sera afficher sur le composant
 */
  label: string
   /**
 * message d'erreur a afficher
 */
  errorMessage?: string
}

/**
 * Composant case à cocher
 *
 * @param label le libéllé qui sera afficher sur le composant
 * @param errorMessage message d'erreur a afficher
 * @param onChange action au changement d'état
 * @param value valeur de l'input
 */
export function Checkbox ({name, label, errorMessage, onChange, value }: CheckboxProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.checkboxLabel}>
        <input type="checkbox"
               className={styles.checkboxInput}
               onChange={onChange}
               checked={value}
        />
        <span className={styles.labeltext}>{label}</span>
      </label>
      {errorMessage && (<p className={styles.checkboxError}>{errorMessage}</p>)}
    </div>
  )
}