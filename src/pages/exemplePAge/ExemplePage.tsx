import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { uneAction, autreAction, resetAction } from '../../features/exemple/Exemple.slice'
import { exempleTest } from '../../features/exemple/Exemple.slice';
import { InputText } from '../../components/inputText/input-text'
import styles from './exemplePage.module.scss'
import { Button } from '../../components/button/button';
import { BackButton } from '../../components/button-back/button-back';
import { Checkbox } from '../../components/checkbox/checkbox';
import { InputCombo } from '../../components/input-combo/input-combo';
import { CardLocation } from '../../components/card-location/card-location';
import { CardLocationDetails } from '../../components/card-location-details/card-location-details';
import { CardProductList } from '../../components/card-product-list/card-product-list';
import { Footer } from '../../components/footer/footer';
import { FormLocation } from '../../components/form-location/form-location';
import { FormProductAndQuantity } from '../../components/form-product-and-quantity/form-product-and-quantity';
import { FormServerConfig } from '../../components/form-server-config/form-server-config';
import { SingleInput } from '../../components/form-single-input/single-input';
import { Header } from '../../components/header/header';
import { Modal } from '../../components/modal/modal';
import { useNavigate } from 'react-router-dom';
import { BarcodeScanner } from '../../components/scanner/Scanner';
import { EditableCell, RemoveItemCell, TableSimple } from '../../components/table/TableSimple';
import { InputTextarea } from '../../components/input-textarea/input-textarea';

const ExemplePage = () => {
  
  const { handleSubmit, formState: { errors }, setValue, control, watch } = useForm()


const productError = "ERROR"

const productData = {
    name: "exemple produit",
    quantity: 10,
    unit: "Pce"
  }

const onSubmit = handleSubmit((data) => {console.log(data,"DATA")})

function handleBlur (e: any) {console.log(e.target.value, "TARGET")  }
  
  const locations = [
    {
        quantity: 120,
        warehouse: "Dépot Central",
        area : "METAL",
        span: undefined,
        rack: "03A",
        level: "2",
        position: "01"
    },
    {
        quantity: 0,
        warehouse: "Dépot Secondaire",
        area : "ZR01",
        span: "A63",
        rack: undefined,
        level: undefined,
        position: undefined,
    }]

  const dispatch = useDispatch()
  const exemple = useSelector(exempleTest)

  const [isTesting, setIstesting] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const [count, setCount] = useState<number>(0)

  useEffect(()=> {
    setIstesting(isChecked)
  },[isChecked])

  function onClickTest() {
    setIstesting(true)
    setTimeout(() => {
      setIstesting(false)
    }, 3000)
  }

  function onClick() {
    setCount(count + 1)
    dispatch(autreAction("look in console"))
  }
  console.log(count, "ca marche!")

  /////////////////////header/////////////
/**
   * Hook React
   */
 const navigate = useNavigate()

 const [modalMessage, setModalMessage] = useState<string>()
 const [modalHeader, setModalHeader] = useState<string>()
 const [confirmLabel, setConfirmLabel] = useState<string>()
 const [cancelLabel, setCancelLabel] = useState<string>()
 const [modalOnConfirm, setModalOnConfirm] = useState<Function>()
 const [modalOnCancel, setModalOnCancel] = useState<Function>()
 const [userName, setuserName] = useState<string>("")

function handleDisconnectButton() {
  if(localStorage.getItem("sessionID")) {
    setModalHeader("plop")
    setModalMessage("je suis message")
    setModalOnConfirm(() => () => { handleDisconnectConfirmed() })
    setModalOnCancel(() => () => { setModalMessage(undefined) })
    setConfirmLabel("Continuer")
    setCancelLabel("Annuler")
  } else {
    navigate('/login')
  }
}

  /**
   *  Handler confirmer la déconnexion
   */
   function handleDisconnectConfirmed() {
    localStorage.removeItem("sessionID")
    localStorage.removeItem("nomPrenom")
    setModalMessage(undefined)
    navigate('/login');
  }

  /**
   * Constante pour stocker le username du local Storage
   */
  useEffect(()=> {
    if(localStorage.getItem('nomPrenom')) {
      const name = localStorage.getItem('nomPrenom')
      if (name) {setuserName(name)}
    }
  },[])

  const singleSubmit = handleSubmit((data) => {
    console.log(data, "SINGLE INPUT")
  })

  const single02Submit = handleSubmit((data) => {
    console.log(data, "SINGLE 02 !!! INPUT")
  })

  const [isActivedScanner, setIsActivedScanner] = useState<boolean>(false)
  const [scannedData, setScannedData] = useState<string>();
  const [inputName, setInputName] = useState<string>()

  console.log(inputName, 'INPUT')


  function handleScan (id:string) {
    setIsActivedScanner(!isActivedScanner)
    setInputName(id)
  }

  function onCancelScan () {
    setIsActivedScanner(false)
  }

  useEffect(()=> {
    if(inputName) {
      setIsActivedScanner(false)
      setValue(inputName, scannedData)
    }
    if(inputName === 'name') {
      console.log('MATCH ACTION')
    }
    setInputName(undefined)
  },[scannedData])

  const columns = useMemo(() => [
    {
      header: 'Ref',
      accessor: 'reference'
    }, {
      header: 'Qté',
      accessor: 'quantity',
      Cell: EditableCell,
    }, {
      header: 'Désignation',
      accessor: 'description',
    }, {
      header: '',
      accessor: 'action',
      Cell: RemoveItemCell
    }
  ], [])

  const data = [{
    reference: "102",
    description: "plop",
    quantity: 112
  },
  {
    reference: "12545",
    description: "plop et lol",
    quantity: 11000
  },
]
  
  return (
    <div className={styles.container}>
      <h1>je suis ExemplePage avec mon State = <span className={styles.bold}>{exemple.test}</span></h1>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => { dispatch(uneAction()) }}>Action</button>
        <button className={styles.button} onClick={() => { dispatch(autreAction(" je suis un payload")) }}>Action payload</button>
        <button className={styles.button} onClick={() => { dispatch(resetAction()) }}>Action Reset</button>
        <div className={styles.import}>
          <div className='w-32'>
            <Button color='primary'
              name='Valider'
              type='button'
              disabled={!isTesting}
            />
          </div>
          <div className='w-32'>
            <Button color='primary'
              name='Modifier'
              type='button'
              onClick={onClick}
            />
          </div>
          <div className='w-32'>
            <Button color='secondary'
              name='Valider'
              type='submit'
              onClick={onClick}
              disabled={isTesting}
            />
          </div>
          <div className='min-w-full'>
            <Button color='secondary'
              name='Ca va Tourner!'
              type='submit'
              loading={isTesting}
              onClick={onClickTest}
            />
          </div>
        </div>
        <Checkbox label={isChecked? "décochez-moi!!!!" : 'cochez-moi!'}
          name='plop'
          onChange={() => { setIsChecked(!isChecked) }}
          value={isChecked}
          errorMessage="je suis une erreur"
        />
        <Controller
          render={({ field: { ref, ...rest } }) => (
            <InputText  {...rest}
              label='Taper du texte pour voir'
              type='password'
              scanButton
              checked
              onScan={()=> handleScan('test')}
            />)}
          control={control}
          name='test'
          defaultValue={""}
        />
        {isActivedScanner && 
        < BarcodeScanner  buttonLabel='Annuler'
                          buttonColor='secondary'
                          setData={setScannedData}
                          onClickButton={onCancelScan}
        />
        }
        <div className={styles.back}>
        <BackButton onBackButton={() => { console.log("je suis back") }} 
                    label="Retour"
                    />
        </div>
        {/* <Controller
                render={({field: {ref, ...rest}}) => (
                  <InputCombo {...rest}
                              label="Dépot"
                              items={ [{code: "1", warehouse: "dépot principal", area: "METAL"},
                              {code: "2", warehouse: "dépot secondaire", area: "METAL"}]
                                       
                                    }
                              errorMessage={""}
                  />)}
                control={control}
                name="warehouse"
                defaultValue={"LOL"}
                rules={{required: "Le champs est obligatoire"}}
        /> */}
        <CardLocation area={"Dépôt central"}
                      warehouse={"METAL"}
                      position={"020003"}
                      onClick={() => {console.log("Hello World!")}} 
                      areaLabel="Zone"
                      locationLabel='Emplacement'
                      warehouseLabel='Code dépôt'
                      buttonLabel='Modifier'
          />


    <div>
        <div>Infos emplacement</div>
        {locations?.map((location, index) => (
        <div key={index}>
            {index > 0 && <hr />}
            <div>
            <CardLocationDetails  location={location}
                                  quantityLabel='Quantité'
                                  areaLabel="Zone"
                                  levelLabel='Niveau'
                                  positionLabel='Position'
                                  rackLabel='Rack'
                                  spanLabel='Travée'
                                  warehouseLabel='Dépôt'
                                  empty='Non-renseigné'
            />
            </div>
        </div>
        ))}
    </div>

    <CardProductList name="Exemple Produit"
                    quantity="200"
                    unit="Pièce"
                    description="Un produit perfomant, robuste et fiable !"
                    deleteItem
                    onDeleteItem={() => () => {}}
                    list
                    descriptionLabel='Description'
                    quantityLabel='Quantité'
                    refLabel='Référence'
    />
    <Footer appName='Test APP'
            settings 
    />
    <FormLocation   onSubmit={()=>{}}
                    buttonColor="primary"
                    buttonName="Rechercher"
                    buttonType="submit"
                    warehouseLabel='Dépôt'
                    areaLabel='Zone'
                    locationLabel='Emplacement'
                    rulesError01='Le champs est obligatoire'
                    optionList={[{CodeDepot: "1", Libelle: "Dépôt principal"},
                                {CodeDepot: "2", Libelle: "Dépôt secondaire"}]}
                    locationError={"ERROR"}
                    isScanArea
                    isScanPalletPosition
                    scanButtonColor='secondary'
                    scanButtonLabel='Annuler'
    />

<FormLocation   onSubmit={()=>{}}
                buttonColor="primary"
                buttonName="Rechercher"
                buttonType="submit"
                warehouseLabel='Dépôt'
                areaLabel='Zone'
                locationLabel='Emplacement'
                rulesError01='Le champs est obligatoire'
                optionList={[{CodeDepot: "1", Libelle: "Dépôt principal"},
                            {CodeDepot: "2", Libelle: "Dépôt secondaire"}]}
                locationError={"ERROR"}
                isScanArea
                isScanPalletPosition
                scanButtonColor='secondary'
                scanButtonLabel='Annuler'
    />
    
<FormProductAndQuantity title='Article et quantité'
                        onSubmit={onSubmit}
                        messageError={productError}
                        unit={productData?.unit}
                        onBlur={handleBlur}
                        errors={errors}
                        setValue={setValue} 
                        control={control}
                        buttonValidLabel="Ajouter l'article"
                        inputProductLabel='Référence article'
                        inputQuantityLabel='Quantité'
                        rulesMessage01="Le champs est obligatoire"
                        rulesMessage02='Une valeur numérique doit être saisie, supérieure à 0'
                        scanButton
                        onScan={handleScan}                                   
/>

<FormServerConfig   endPoint=''
                    getPing={()=>{}}
                    onSubmit={()=>{}}
                    buttonDefaultLabel='Valeurs par défaut'
                    buttonTestLabel='Tester'
                    buttonValidLabel='Enregistrer'
                    checkboxLabel='Connexion sécurisée'
                    inputAdressLabel='Adresse Serveur'
                    inputPortLabel='Port'
/>

<SingleInput  onSubmit={singleSubmit} 
              errorMessage='string ou state'
              inputName='sonNom'
              inputLabel='Entrer un exemple'
              buttonLabel='Label bouton'
              control={control}
              errors={errors}
              scanButton
              onScan={handleScan}   
/>
<SingleInput  onSubmit={single02Submit} 
              errorMessage='string ou state'
              inputName='sonNom02'
              inputLabel='Entrer un exemple'
              buttonLabel='Label bouton'
              control={control}
              errors={errors}
              scanButton
              onScan={handleScan}   
/>

    <Header handleDisconnectButton={handleDisconnectButton}
            userName={userName}
    />
    <Modal  onConfirm={modalOnConfirm}
            onCancel={modalOnCancel}
            header={modalHeader}
            message={modalMessage}
            cancelLabel={cancelLabel}
            confirmLabel={confirmLabel}
            colorConfirm='secondary'
            colorCancel='primary'
      />

    <TableSimple columns={columns}
                data={data}
                updateMyData={()=>{}}
                removeData={()=>{}}
                reverse
              />

    <InputTextarea  label='Description du produit'
                    placeholder='Scanner un produit pour afficher sa description'
                    value=""
    />
      </div>

    </div>

  )
}

export default ExemplePage