import React, { useEffect, useState } from 'react'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import { BarcodeScanner } from '../scanner/Scanner';
import {Button} from "../button/button";
import { InputCombo } from '../input-combo/input-combo';
import {InputText} from '../inputText/input-text'
import styles from "./form-location.module.scss"

export type FormLocationProps = {
  /**
 * la fonction d'envoi du formulaire, les données des inputs sont stockés dans le data -> onSubmit(data)
 */
  onSubmit: SubmitHandler<any>
  /**
 * les données injectées dans la liste déroulante
 */
  optionList: {
    CodeDepot?: string
    Libelle?: string
    UUIDPK?: string
  }[]
  /**
 * le nom du boutton (utilisé pour afficher sa fonction)
 */
  buttonName: string
  /**
 * la couleur du boutton: "primary" ou "secondary"
 */
  buttonColor: "primary" | "secondary"
  /**
 * le type bouton: "boutton" ou "submit"
 */
  buttonType: "button" | "submit"
  /**
 * affiche un message d'une erreur serveur
 */
  locationError?: string
  /**
 * injection de données si édition
 */
  edit?: {
    warehouse?: string
    area?: string
    palletPosition?: string
  }
   /**
 * Label de l'input-combo
 */
  warehouseLabel: string
   /**
 * Label de l'input-text 01
 */
  areaLabel: string
   /**
 * Label de l'input-text 02
 */
  locationLabel: string
  /**
 * Affiche un message d'erreur via useForm
 */
 rulesError01: string
/**
 * affiche le bouton de scan sur l'input Area
 */
 isScanArea?: boolean
/**
 * affiche le bouton de scan sur l'input PalletPosition
 */
 isScanPalletPosition?: boolean
 /**
 * label du bouton de scan
 */
 scanButtonLabel?: string
 /**
 * couleur du bouton de scan
 */
 scanButtonColor?: 'primary' | 'secondary'
}

/**
 * Composant champ éditable
 *
 * @param onSubmit la fonction d'envoi du formulaire, les données des inputs sont stockés dans le data -> onSubmit(data)
 * @param optionList les données injectées dans la liste déroulante
 * @param buttonName le nom du boutton (utilisé pour afficher sa fonction)
 * @param buttonColor la couleur du boutton: "primary" ou "secondary"
 * @param buttonType le type bouton: "boutton" ou "submit"
 * @param locationError affiche un message d'une erreur serveur
 * @param edit injection de données si édition warehouseLabel
 * @param warehouseLabel label de l'input-combo
 * @param locationLabel label de l'input-text 01
 * @param areaLabel label de l'input-text 02
 * @param rulesError01 affiche un message d'erreur via useForm
 * @param isScanArea affiche le bouton de scan sur l'input Area
 * @param isScanPalletPosition affiche le bouton de scan sur l'input PalletPosition
 * @param scanButtonLabel label du bouton de scan
 * @param scanButtonColor couleur du bouton de scan
 */
export function FormLocation ({
                                   onSubmit,
                                   optionList,
                                   buttonName,
                                   buttonColor,
                                   buttonType,
                                   locationError,
                                   edit,
                                   warehouseLabel,
                                   rulesError01,
                                   areaLabel,
                                   locationLabel,
                                   isScanArea,
                                   isScanPalletPosition,
                                   scanButtonLabel,
                                   scanButtonColor
                                 }: FormLocationProps) {

  // Paramètre du composant ---------------------------------------------------------------------
  /**
   * Hook formulaire
   */
  const {handleSubmit, control, formState: {errors}, setValue} = useForm()

  const [isActivedScanner, setIsActivedScanner] = useState<boolean>(false)
  const [scannedData, setScannedData] = useState<string>()
  const [inputName, setInputName] = useState<string>()

  /**
   * Hook pour injecter des valeurs dans les inputs après l'action "EditForm"
   */
  useEffect(() => {
    setValue("warehouse", edit?.warehouse)
    setValue("area", edit?.area)
    setValue("palletPosition", edit?.palletPosition)
  }, [edit])

  
  function handleScan (id: string) {
    setIsActivedScanner(!isActivedScanner)
    setInputName(id)
  }
  
  function onCancelScan () {
    setIsActivedScanner(false)
  }

  useEffect(()=> {
    if (inputName) {
      setValue(inputName, scannedData)
      setIsActivedScanner(false)
    }
  },[scannedData])


  /**
   * Render
   */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {isActivedScanner && scanButtonLabel && scanButtonColor &&
        < BarcodeScanner  buttonLabel={scanButtonLabel}
                          buttonColor={scanButtonColor}
                          setData={setScannedData}
                          onClickButton={onCancelScan}
        />
      }
      <Controller
        render={({field: {ref, ...rest}}) => (
          <InputCombo {...rest}
                      label={warehouseLabel}
                      items={optionList}
                      errorMessage={errors.warehouse?.message}
          />)}
        control={control}
        name="warehouse"
        defaultValue={""}
        rules={{required: rulesError01}}
      />

      <Controller
        render={({field: {ref, ...rest}}) => (
          <InputText  {...rest}
                      type="text"
                      label={areaLabel}
                      errorMessage={errors.area?.message}
                      onScan={()=>handleScan("area")}
                      scanButton={isScanArea}
          />)}
        control={control}
        name="area"
        defaultValue={""}
        rules={{required: rulesError01}}
      />

      <Controller
          render={({field: {ref, ...rest}}) => (
            <InputText  {...rest}
                        type="text"
                        label={locationLabel}
                        errorMessage={errors.palletPosition?.message}
                        onScan={()=>handleScan("palletPosition")}
                        scanButton={isScanPalletPosition}

            />)}
        control={control}
        defaultValue={""}
        name="palletPosition"
        rules={{required: rulesError01}}
      />

      {locationError && <p className={styles.error}>{locationError}</p>}
      <Button type={buttonType} color={buttonColor} name={buttonName}/>
    </form>
  )
}