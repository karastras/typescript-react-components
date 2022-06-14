import React from "react";
import styles from "./input-textarea.module.scss"

export type InputTextareaProps = {
  /**
 * le libéllé qui sera afficher sur le composant
 */
  label: string
   /**
 * message qui sera affiché lorsque que aucune valeur n'aura été renseignée
 */
  placeholder: string
   /**
 * récupère la valeur de l'input
 */
  value: string | number
}

/**
 * Composant pour afficher une zone de texte
 *
 * @param label le libéllé qui sera afficher sur le composant
 * @param placeholder message qui sera affiché lorsque que aucune valeur n'aura été renseignée
 * @param value récupère la valeur de l'input
 */
export function InputTextarea ({ label, placeholder, value}: InputTextareaProps) {

  return (
    <div className={styles.container}>
      <textarea className={styles.input}
                placeholder={placeholder}
                rows={4} 
                readOnly
                value={value}
      />
      <label htmlFor="test" className={styles.label}>{label}</label>
    </div>
  )
}