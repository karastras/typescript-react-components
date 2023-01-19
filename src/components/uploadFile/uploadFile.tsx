import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './uploadFile.module.scss'

interface Props {
  errorMessage: string
  successMessage: string
  setFileToUpload: Function
  onSubmit: Function
  fileExt: string
  inputName: string
  fileToUpload?: File
  isLoading: boolean
}

const UploadFile = ({ 
  errorMessage,
  successMessage, 
  setFileToUpload, 
  onSubmit, 
  fileExt, 
  inputName, 
  fileToUpload, 
  isLoading 
}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const [previewDisplay, setPreviewDisplay] = useState<boolean>(false)

  const [errorString, setErrorString] = useState<string>('')
  const [successString, setSuccessString] = useState<string>('')

  const resetFileInput = () => {
    if (inputRef.current) {
      // @ts-ignore
      inputRef.current.value = null
      setFileToUpload(undefined)
      setErrorString('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileToUpload(e.target.files[0])
      setErrorString('')
      setSuccessString('')
      setPreviewDisplay(false)
    }
  }

  useEffect(() => {
    resetFileInput()
    setSuccessString(successMessage)
  }, [successMessage])

  useEffect(() => {
    setErrorString(errorMessage)
  }, [errorMessage])


  return (
    <form className={styles.container} onSubmit={(e) => onSubmit(e)} >
      <input
        ref={inputRef}
        type="file"
        accept={fileExt}
        name={inputName}
        className={styles.input}
        onChange={handleChange}
      />
      <div className={styles.submitSection}>
        <button className={(fileToUpload && !isLoading) ? styles.submitButton : styles.disabledButton} type="submit" disabled={!fileToUpload || isLoading}>Envoyer</button>
        {errorString && <p className={styles.error}>{errorString}</p>}
        {fileToUpload && <button type='button' className={styles.cancelButton} onClick={resetFileInput}>Annuler</button>}
        {successString && <p className={styles.success}>{successString}</p>}
      </div>
      {fileToUpload &&
        <div className={styles.previewContainer}>
          <button className={styles.previewButton} type='button' onClick={() => setPreviewDisplay(!previewDisplay)}>Prévisualiser l'image</button>
          {previewDisplay && <img src={URL.createObjectURL(fileToUpload)} alt="" className={styles.preview} />}
        </div>
      }
    </form>
  )
}
export default UploadFile