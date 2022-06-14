import React, { FocusEventHandler, useEffect } from 'react'
import { Button } from "../button/button";
import { InputText } from '../inputText/input-text'
import { Controller, FieldErrors, SubmitHandler } from 'react-hook-form'
import styles from './form-product-and-quantity.module.scss'

export type FormProductAndQuantityProps = {
  /**
  * affiche l'unité du produit
  */
  unit?: string
  /**
  * fonction appeler lors de la validation du formulaire
  */
  onSubmit: SubmitHandler<any>
  /**
  * action à définir quand perte du focus de l'input
  */
  onBlur?: any
  /**
  * définir l'état en lecture seul du composant
  */
  readOnly?: boolean
  /**
  * message d'erreur
  */
  messageError?: string
  /**
  * injection de données après l'édition
  */
  edit?: {
    name?: string
    quantity?: number | string
  }
  /**
  * provient du useForm()
  */
  errors: FieldErrors
  /**
  * provient du useForm()
  */
  setValue: Function
  /**
  * provient du useForm()
  */
  control: any
  /**
  * titre du formulaire
  */
  title?: string
  /**
   * action au clique sur l'input
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
  /**
  * label de l'input Produit
  */
  inputProductLabel: string
  /**
  * label de l'input Quantité
  */
  inputQuantityLabel: string
  /**
 * label du bouton de validation du formulaire
 */
  buttonValidLabel: string
  /**
   * message d'une regles du useForm (required: input obligatoire)
   */
  rulesMessage01?: string
  /**
 * message d'une regles du useForm (validate: valeur > 0)
 */
  rulesMessage02?: string
/**
   * action du scan
   */
 onScan?: Function
 /**
 * affiche le bouton du scan sur l'input
 */
scanButton?: boolean
}

/**
  * Formulaire contenant un input name, un input quantity + un boutton de validation. 
  * Permet d'ajouter des produits en vérifiant leur existence en BDD.
  * Les actions sont pilotées par un composant parent.
  * 
  * @param readOnly définir l'état en lecture seul du composant
  * @param edit injection de données après l'édition
  * @param unit affiche l'unité du produit
  * @param onBlur action à définir quand perte du focus de l'input
  * @param onSubmit fonction appeler lors de la validation du formulaire
  * @param messageError message d'erreur
  * @param errors provient du useForm()
  * @param setValue provient du useForm()
  * @param control provient du useForm()
  * @param onFocus action au clique sur l'input
  * @param inputProductLabel label de l'input Produit 
  * @param inputQuantityLabel label de l'input Quantité buttonValidLabel label du bouton de validation du formulaire
  * @param buttonValidLabel label du bouton de validation du formulaire rulesMessage01
  * @param rulesMessage01 message d'une regles du useForm (required: input obligatoire)
  * @param rulesMessage02 message d'une regles du useForm (validate: valeur > 0)
  * @param onScan action du scan
  * @param scanButton affiche le bouton du scan sur l'input
  */
export function FormProductAndQuantity({
  readOnly,
  edit,
  unit,
  messageError,
  onBlur,
  onSubmit,
  errors,
  setValue,
  control,
  title,
  onFocus,
  inputProductLabel,
  inputQuantityLabel,
  buttonValidLabel,
  rulesMessage01,
  rulesMessage02,
  onScan,
  scanButton
}: FormProductAndQuantityProps) {

  /**
   * Pour modifier une valeur
   */
  useEffect(() => {
    if (!edit?.name || !edit?.quantity) return
    if (edit) {
      setValue("name", edit.name)
      setValue("quantity", edit.quantity)
    }
  }, [edit])

  /**
   * Render
   */
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.form}>
        <div className={styles.itemInput}>
          <Controller
            render={({ field: { ref, ...rest } }) => (
              <InputText {...rest}
                type="text"
                label={inputProductLabel}
                errorMessage={errors?.name?.message}
                readonly={readOnly}
                onBlur={onBlur}
                onFocus={onFocus}
                onScan={onScan && (()=> onScan("name"))}
                scanButton={scanButton}
              />)}
            control={control}
            name="name"
            rules={{ required: `${rulesMessage01}` }}
            defaultValue=""
          />
          {messageError && <p className={styles.textError}>{messageError}</p>}
        </div>
        <div className={styles.quantityInput}>
          <Controller
            render={({ field: { ref, ...rest } }) => (
              <InputText  {...rest}
                type="number"
                label={inputQuantityLabel}
                errorMessage={errors?.quantity?.message}
              />)}
            control={control}
            name="quantity"
            rules={{ validate: (value: number | string) => value > 0 || `${rulesMessage02}` }}
            defaultValue=""
          />
          <p className={styles.unit}>{unit}</p>
        </div>
        <Button type="submit" name={buttonValidLabel} color="primary" />
      </div>
    </form >
  )
}