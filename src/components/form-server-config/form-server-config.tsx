import React, { useEffect, useState} from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import styles from "./form-server-config.module.scss"
import {Checkbox} from "../checkbox/checkbox"
import {InputText} from '../inputText/input-text'
import {Button} from "../button/button";

export type FormServerConfigProps = {
  /**
 * fonction appeler lors de la validation du formulaire
 */
  onSubmit: SubmitHandler<any>
   /**
 * webservices appelé lors du test
 */
  endPoint: string
   /**
 * fonction d'appel à l'api pour le test du ping
 */
  getPing: Function
   /**
   * valeur pré défini
   */
  value?: Server
  /**
   * label de l'input de l'adresse
   */
  inputAdressLabel: string
  /**
   * label de l'input du port
   */
  inputPortLabel: string
  /**
   * label de la checkbox
   */
  checkboxLabel: string
  /**
   * label du bouton du test de ping
   */
  buttonTestLabel: string
  /**
   * label du boutton valeur par défaut
   */
  buttonDefaultLabel: string
  /**
   * label du bouton de validation du formulaire
   */
  buttonValidLabel: string
}

interface ServerConfig {
  server: Server
}

interface Server {
    protocol: boolean
    serverURL: string
    port: string
}

/**
 * Composant pour configurer les informations du serveur utilisé dans l'application
 *
 * @param onSubmit fonction appeler lors de la validation du formulaire
 * @param endPoint webservices appelé lors du test
 * @param value valeur pré défini
 * @param getPing fonction d'appel à l'api pour le test du ping
 * @param inputAdressLabel label de l'input de l'adresse
 * @param inputPortLabel label de l'input du port
 * @param checkboxLabel label de la checkbox
 * @param buttonTestLabel label du bouton du test de ping
 * @param buttonDefaultLabel label du boutton valeur par défaut
 * @param buttonValidLabel label du bouton de validation du formulaire
 */
export function FormServerConfig ({
  onSubmit,
  endPoint,
  value,
  getPing,
  inputAdressLabel,
  inputPortLabel,
  checkboxLabel,
  buttonTestLabel,
  buttonDefaultLabel,
  buttonValidLabel
}: FormServerConfigProps) {
  // Parametre du composant ---------------------------------------------------------------------
  /**
   * Hook formulaire
   */
  const {handleSubmit, setValue, getValues, control} = useForm()

  /**
   * Hook état local
   */
  const [pingFail, setPingFail] = useState<boolean>(false)
  const [pingSuccess, setPingSuccess] = useState<boolean>(false)
  const [isTesting, setIstesting] = useState<boolean>(false)

  // use effect ---------------------------------------------------------------------------------
  /**
   * Hook pour préremplir les champs
   */
  useEffect(() => {
    if (!value) return
    setValue("serverURL", value.serverURL)
    setValue("port", value.port)
    setValue("protocol", value.protocol)
  }, [value])

  // HANDLER -------------------------------------------------------------------------------------------
  /**
   * Handler pour tester la configuration
   */
  function handlerPingClick() {
    setIstesting(true)
    setPingFail(false)
    setPingSuccess(false)
    getPing({...getValues(), endPoint}).unwrap().then(() => {
          setPingFail(false)
          setPingSuccess(true)
        })
        .catch(() => {
          setPingSuccess(false)
          setPingFail(true)
        })
        .finally(() => {
          setIstesting(false)
        })
  }

async function defaultClick () {
    try {
      const response = await fetch("/server-config.json")
      const serverConfig: ServerConfig = await response.json()
      setValue("serverURL", serverConfig.server.serverURL)
      setValue("port", serverConfig.server.port)
      setValue("protocol", serverConfig.server.protocol)
    } catch (err) {
      console.error(err)
    } 
}
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        render={({field: {ref, ...rest}}) => (
          <InputText  {...rest}
                      type="text" 
                      label={inputAdressLabel}
          />)}
        control={control}
        name="serverURL"
        defaultValue={""}
      />

      <Controller
        render={({field: {ref, ...rest}}) => (
          <InputText  {...rest}
                      type="number" 
                      label={inputPortLabel}
          />)}
        control={control}
        name="port"
        defaultValue={""}
      />
        <Controller
        render={({field: {ref, ...rest}}) => (
          <Checkbox  {...rest}
                      label={checkboxLabel}
          />)}
          control={control}
          name="protocol"
          defaultValue={value?.protocol || false}
        />

      {pingFail && <div className={styles.error}>L'appel au serveur a échoué</div>}
      {pingSuccess && <div className={styles.success}>L'appel au serveur a réussi</div>}
      <div className={styles.buttons}>
      <Button type={"button"}
              name={buttonTestLabel}
              color={"secondary"}
              disabled={isTesting}
              loading={isTesting}
              onClick={handlerPingClick}/>
        <div className={styles.defautButton}>
          <Button type={"button"}
                  name={buttonDefaultLabel}
                  color={"secondary"}
                  onClick={defaultClick}
          />
        </div>
      </div>
      <Button type="submit"
              color="primary"
              name={buttonValidLabel}/>
    </form>
  )
}