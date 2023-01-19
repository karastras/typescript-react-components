import React, { FormEvent, MutableRefObject, RefObject, useRef, useState } from 'react'
import { Loading } from '../../components/loading/Loading'
import { ReactComponent as logo } from '../../assets/img/logoMismo.svg'
import Coffee from '../../components/coffee/Coffee'
import styles from './next.module.scss'
import UploadFile from '../../components/uploadFile/uploadFile'

const Next = () => {

    const [ fileToUpload, setFileToUpload ] = useState<File>()
    const [ errorMessage, setErrorMessage ] = useState<string>('')
    const [ successMessage, setSuccessMessage ] = useState<string>('')
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (fileToUpload){
            event.preventDefault()
            setIsLoading(true)
            setSuccessMessage('')
            setErrorMessage('')

            const formData = new FormData()
            formData.append("document", fileToUpload)
            formData.append("name", fileToUpload.name)

            // postPicture(formData).unwrap()
            // .then(() => {
            //     setSuccessMessage('Succès')
            //     setIsLoading(false)
            // })
            // .catch(() => {
            //     setErrorMessage('Erreur')
            //     setIsLoading(false)
            // })

            // pour l'exemple
            setTimeout(()=>{
                setErrorMessage('Succès')
                setIsLoading(false)
            }, 1000)  
        }
    }

  return (
    <div className={styles.container}>
        {isLoading && <Loading Logo={logo} />}
        <form >
            <input type="number" step='0.001' />
        </form>

        <UploadFile onSubmit={onSubmit}
                setFileToUpload={setFileToUpload}
                errorMessage={errorMessage}
                successMessage={successMessage}
                fileExt="image/*"
                inputName="picture_file"
                fileToUpload={fileToUpload}
                isLoading={isLoading}
        />
        
        {/* pattern='^\d+(?:[\.,]\d{0,3})?$' */}
    </div>
  )
}

export default Next