import React from 'react'
import { Control, Controller, FieldErrors, SubmitHandler } from 'react-hook-form'
import {Button} from "../button/button";
import {InputText} from '../inputText/input-text'
import styles from './single-input.module.scss'


export type SingleInputProps = {
  /**
 * fonction appelée après le click du bouton "Validation", les valeurs de l'input sont récupérées dans le data -> onSubmit(data)
 */
  onSubmit: SubmitHandler<any>
  /**
 * message qui s'affiche en cas d'erreur
 */
  errorMessage: string
  /**
 * le libéllé qui sera afficher sur l'input'
 */
  inputLabel: string
   /**
 * le libéllé qui sera afficher sur le bouton
 */
  buttonLabel: string
  /**
 * le nom utilisé pour l'identifier au sein d'un form useform
 */
  inputName: string
  /**
 * les différentes règles applicable du useForm ex: {required: "Le champs est obligatoire"}
 */
  rules?: Object
  /**
  * provient du useForm()
  */
   control: Control
/**
  * provient du useForm()
  */
   errors: FieldErrors
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
 * Composant/Formulaire contient un input text +  un bouton validation
 * paramétré pour entrer un identifiant de palette ou de produit 
 * @param errors provient du useForm()
 * @param setValue provient du useForm()
 * @param control provient du useForm()
 * @param inputLabel le libéllé qui sera afficher sur le composant
 * @param buttonLabel le libéllé qui sera afficher sur le composant
 * @param onSubmit fonction appelée après le click du boutton "Validation", les valeurs de l'input sont récupérées dans le data -> onSubmit(data)
 * @param errorMessage message qui s'affiche en cas d'erreur
 * @param inputName le nom utilisé pour l'identifier au sein d'un form useform
 * @param onScan action du scan
 * @param scanButton affiche le bouton du scan sur l'input
 */
export function SingleInput({
  inputLabel,
  buttonLabel,
  onSubmit,
  errorMessage,
  inputName,
  rules,
  errors,
  control,
  scanButton,
  onScan
}: SingleInputProps) {

  /**
  * Render
  */
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Controller
        render={({ field: { ref, ...rest } }) => (
          <InputText  {...rest}
            label={inputLabel}
            type='text'
            errorMessage={errors[inputName]?.message}
            scanButton={scanButton}
            onScan={onScan && (()=>onScan(inputName))}
          />)}
        control={control}
        name={inputName}
        rules={rules}
        defaultValue={""}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <Button type={"submit"} name={buttonLabel} color={"primary"}
      />
    </form>
  )
}
