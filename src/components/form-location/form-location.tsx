import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { BarcodeScanner } from '../scanner/Scanner';
import { Button } from "../button/button";
import { InputCombo } from '../input-combo/input-combo';
import { InputText } from '../inputText/input-text'
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
    warehouseCode?: string
    name?: string
    id?: string
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
    warehouseCode?: string
    areaCode?: string
    locationCode?: string
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
  isScanLocation?: boolean
  /**
  * label du bouton de scan
  */
  scanButtonLabel?: string
  /**
  * couleur du bouton de scan
  */
  scanButtonColor?: 'primary' | 'secondary'
  /**
   * Défini si le bouton est actif
   */
  disabled?: boolean
  /**
   * afficher un spinner sur le bouton
   */
  loading?: boolean
  /**
    * id du bouton
    */
  buttonId?: string
  /**
   * id du formulaire
   */
  formId?: string
  /**
   * option pour fixer le scroll du fond d'écran quand le scan est actif
   */
  scrollFixed?: boolean
/**
   * placeholder de l'input combo
   */
  inputComboPlaceholder:string
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
 * @param isScanArea affiche le bouton de scan sur l'input areaCode
 * @param isScanLocation affiche le bouton de scan sur l'input locationCode
 * @param scanButtonLabel label du bouton de scan
 * @param scanButtonColor couleur du bouton de scan
 * @param disabled Défini si le bouton est actif
 * @param loading afficher un spinner sur le bouton
 * @param buttonId id du bouton
 * @param formId id du formulaire
 * @param scrollFixed option pour fixer le scroll du fond d'écran quand le scan est actif
 * @param inputComboPlaceholder placeholder de l'input combo
 */
export function FormLocation({
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
  isScanLocation,
  scanButtonLabel,
  scanButtonColor,
  disabled,
  loading,
  buttonId,
  formId,
  scrollFixed,
  inputComboPlaceholder
}: FormLocationProps) {

  /**
   * Hook formulaire
   */
  const { handleSubmit, control, formState: { errors }, setValue } = useForm()

  /**
   * Hook d'état local
   */
  const [isActivedScanner, setIsActivedScanner] = useState<boolean>(false)
  const [scannedData, setScannedData] = useState<string>()
  const [inputName, setInputName] = useState<string>()

  /**
   * Hook pour injecter des valeurs dans les inputs après l'action "EditForm"
   */
  useEffect(() => {
    setValue("warehouseCode", edit?.warehouseCode)
    setValue("areaCode", edit?.areaCode)
    setValue("locationCode", edit?.locationCode)
  }, [edit])

  useEffect(() => {
    if (inputName) {
      setValue(inputName, scannedData)
      setIsActivedScanner(false)
    }
  }, [scannedData])

  function toggleScanner(id: string | null = null) {
    setIsActivedScanner(!isActivedScanner)
    if (id) { setInputName(id) }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId} className={styles.form}>
      {isActivedScanner && scanButtonLabel && scanButtonColor &&
        < BarcodeScanner buttonLabel={scanButtonLabel}
          buttonColor={scanButtonColor}
          setData={setScannedData}
          onClickButton={() => toggleScanner()}
          scrollFixed={scrollFixed}
        />
      }
      <Controller
        render={({ field: { ref, ...rest } }) => (
          <InputCombo {...rest}
            label={warehouseLabel}
            items={optionList}
            errorMessage={errors.warehouseCode?.message}
            placeholder={inputComboPlaceholder}
          />)}
        control={control}
        name="warehouseCode"
        defaultValue={""}
        rules={{ required: rulesError01 }}
      />

      <Controller
        render={({ field: { ref, ...rest } }) => (
          <InputText  {...rest}
            type="text"
            label={areaLabel}
            errorMessage={errors.areaCode?.message}
            onScan={() => toggleScanner("areaCode")}
            scanButton={isScanArea}
          />)}
        control={control}
        name="areaCode"
        defaultValue={""}
        rules={{ required: rulesError01 }}
      />

      <Controller
        render={({ field: { ref, ...rest } }) => (
          <InputText  {...rest}
            type="text"
            label={locationLabel}
            errorMessage={errors.locationCode?.message}
            onScan={() => toggleScanner("locationCode")}
            scanButton={isScanLocation}

          />)}
        control={control}
        defaultValue={""}
        name="locationCode"
        rules={{ required: rulesError01 }}
      />

      {locationError && <p className={styles.error}>{locationError}</p>}
      <Button type={buttonType}
        color={buttonColor}
        name={buttonName}
        disabled={disabled}
        loading={loading}
        buttonId={buttonId}
      />
    </form>
  )
}