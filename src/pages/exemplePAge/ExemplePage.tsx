import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
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
import { BarcodeScanner } from '../../components/scanner/Scanner';
import { EditableCell, RemoveItemCell, TableSimple } from '../../components/table/TableSimple';
import { InputTextarea } from '../../components/input-textarea/input-textarea';
import { BsUpcScan } from "react-icons/bs"
import {Loading} from '../../components/loading/Loading';
import { useNavigate } from 'react-router-dom';
import { SwitchButton } from '../../components/switchButton/SwitchButton';
import { useAppDispatch } from '../../app/store';

const ExemplePage = () => {
  
const { handleSubmit, formState: { errors }, setValue, control, watch} = useForm()

const ware = watch('warehouse')
useEffect(()=>{
 if (ware === ""){
  setValue("warehouse", "")
 }
}, [ware])

function plop () {
  setValue("warehouse", "")
}

console.log(ware, 'WATCHWARE')

const navigate = useNavigate()

const productError = "ERROR"

const productData = {
    name: "exemple produit",
    quantity: 10,
    unit: "Pce"
  }

const dispatch = useAppDispatch()

const onSubmit = handleSubmit((data) => {console.log(data,"DATA")})

function handleBlur (e: any) {console.log(e.target.value, "TARGET")  }
  
  const locations = [
    {
        quantity: 120,
        warehouse: "Dépot Central",
        palletCode: "B852452GF2558HGR252",
        locationCode: "020003",
        areaCode : "METAL",
        span: undefined,
        rack: "03A",
        level: "2",
        position: "01"
    },
    {
        quantity: 0,
        warehouse: "Dépot Secondaire",
        palletCode: undefined,
        locationCode: undefined,
        areaCode : "ZR01",
        span: "A63",
        rack: undefined,
        level: undefined,
        position: undefined,
    }]

  const exemple = useSelector(exempleTest)

  const [isTesting, setIstesting] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [data, setData] = useState<any>([])

  const [count, setCount] = useState<number>(0)

  useEffect(()=> {
    setIstesting(isChecked)
  },[isChecked])

  function onClickTest() {
    setIstesting(!isTesting)
    setLoading(!loading)
  }

  function onClick() {
    setCount(count + 1)
    dispatch(autreAction("look in console"))
  }

  
 const [modalMessage, setModalMessage] = useState<string>()
 const [modalHeader, setModalHeader] = useState<string>()
 const [confirmLabel, setConfirmLabel] = useState<string>()
 const [cancelLabel, setCancelLabel] = useState<string>()
 const [modalOnConfirm, setModalOnConfirm] = useState<Function>()
 const [modalOnCancel, setModalOnCancel] = useState<Function>()
 const [userName, setuserName] = useState<string>("plop")

function handleDisconnectButton() {
  setModalHeader("plop")
  setModalMessage("je suis message")
  setModalOnConfirm(() => () => { setModalMessage(undefined) })
  setModalOnCancel(() => () => { setModalMessage(undefined) })
  setConfirmLabel("Continuer")
  setCancelLabel("Annuler")
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
  const [scannedData, setScannedData] = useState<string>('');
  const [inputName, setInputName] = useState<string>()


  function toggleScanner(id: string | null = null) {
    setScannedData('')
    setIsActivedScanner(!isActivedScanner)
    if (id) { setInputName(id) }
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

const lol = [
  {  
    warehouseCode: "1",
    id: "6FB7D079BC9D954489F5B2F38CA5C622",
    name: "Dépôt principal"},
  { id: "6FB7D079BC9D954489F5B25C622",
    name: "Dépôt secondaire",
    warehouseCode: "2"}
]


function handleOnChangeQuantity (e:any)  {
  const value = e.target.value
  const floatRegExp = new RegExp('^\\d+(?:\.\\d{1,3})?$')
  if (value === "" || floatRegExp.test(value)) {setValue("quantity", value)}
}

function updateMyData() {
  setData([...data, {
    reference: "102",
    description: "plop",
    quantity: 112
  }])
}

// Autre façon de faire 
    // const taskIndex = taskList.findIndex(el => el.id === id)
    //   setTaskList(taskList.map((task, index) => {
    //     const result: Task = {...task}
    //     if (index === taskIndex) {
    //       result.isValidated = !task.isValidated
    //     }
    //     return result
    //   }))


    // Essai à retravailler sur l'ajout d'une balise <base href="" /> et d'une config "base": "/exemple" dans le ficher de configuration
      // if( serverConfig.base ) {
      //   const ndeBase = document.createElement('base')
      //   ndeBase.href = serverConfig.base
      //   document.head.appendChild(ndeBase)
      // }
  
  return (
    <div className={styles.container}>
      <h1>je suis ExemplePage avec mon State = <span className={styles.bold}>{exemple.test}</span></h1>
      <div >{ loading && <Loading /> }</div>
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
              onClick={()=>{navigate('/page02')}}
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
              onClick={handleDisconnectButton}
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
          <div className='w-24'>
            <Button color='primary'
              type='button'
              onClick={updateMyData}
              icon={<BsUpcScan size={"2.4rem"} />}
            />
          </div>
          <div className='w-full'>
            <Button color='primary'
              name='Ca va Tourner!'
              type='button'
              loading={isTesting}
              onClick={ ()=>navigate('/formulaire/etape-une') }
              icon={<BsUpcScan size={"2.4rem"} />}
              disabled={!loading}
            />
          </div>

          <TableSimple columns={columns}
                data={data}
                updateMyData={()=>updateMyData()}
                removeData={()=>{}}
                reverse
                animeFirstTr
          />
        </div>

        <SwitchButton cursorPosition={isChecked}
         setCursorPosition={setIsChecked}
         switchColor={'bg-red-500'}
         color={'bg-green-200'}
          />
          
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
              onScan={()=> toggleScanner('test')}
            />)}
          control={control}
          name='test'
          defaultValue={""}
        />
        {isActivedScanner && 
        < BarcodeScanner  buttonLabel='Annuler'
                          buttonColor='secondary'
                          setData={setScannedData}
                          onClickButton={()=>toggleScanner()}
                          scrollFixed           
        />
        }
        <div className={styles.back}>
        <BackButton onBackButton={() => { console.log("je suis back") }} 
                    label="Retour"
                    />
        </div>
        <button onClick={plop}>lol</button>



        <Controller
                render={({field: {ref, ...rest}}) => (
                  <InputCombo {...rest}
                              label="Dépot"
                              items={lol}
                              errorMessage={""}
                              placeholder='je suis le placeholder'
                  />)}
                control={control}
                name="warehouse"
                rules={{required: "Le champs est obligatoire"}}
        />
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
            <CardLocationDetails  item={location}
                                  quantityLabel='Quantité'
                                  areaLabel="Zone"
                                  palletLabel='Palette'
                                  levelLabel='Niveau'
                                  positionLabel='Position'
                                  rackLabel='Rack'
                                  spanLabel='Travée'
                                  warehouseLabel='Dépôt'
                                  empty='Non-renseigné'
                                  locationLabel='Emplacement'
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
            path='/settings'
            version='v2.00'
    />
    
    <FormLocation   onSubmit={()=>{}}
                    buttonColor="primary"
                    buttonName="Rechercher"
                    buttonType="submit"
                    warehouseLabel='Dépôt'
                    areaLabel='Zone'
                    locationLabel='Emplacement'
                    rulesError01='Le champs est obligatoire'
                    optionList={lol}
                    locationError={"ERROR"}
                    isScanArea
                    isScanLocation
                    scanButtonColor='secondary'
                    scanButtonLabel='Annuler'
                    scrollFixed
                    inputComboPlaceholder='Aucun dépôt renseigné'

    />

<FormLocation   onSubmit={()=>{}}
                buttonColor="primary"
                buttonName="Rechercher"
                buttonType="submit"
                warehouseLabel='Dépôt'
                areaLabel='Zone'
                locationLabel='Emplacement'
                rulesError01='Le champs est obligatoire'
                optionList={lol}
                locationError={"ERROR"}
                isScanArea
                isScanLocation
                scanButtonColor='secondary'
                scanButtonLabel='Annuler'
                scrollFixed
                inputComboPlaceholder='Aucun dépôt'
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
                        rulesMessage02='Une valeur supérieure à 0 doit être saisie, y compris en cas de décimale'
                        scanButton
                        onScan={toggleScanner} 
                        onChangeQuantity={handleOnChangeQuantity}
                        stepQuantity="0.001"                                
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
                    configFile=''
/>

<SingleInput  onSubmit={singleSubmit} 
              errorMessage='string ou state'
              inputName='sonNom'
              inputLabel='Entrer un exemple'
              buttonLabel='Label bouton'
              control={control}
              errors={errors}
              scanButton
              onScan={toggleScanner}

/>
<SingleInput  onSubmit={single02Submit} 
              errorMessage='string ou state'
              inputName='sonNom02'
              inputLabel='Entrer un exemple'
              buttonLabel='Label bouton'
              control={control}
              errors={errors}
              scanButton
              onScan={toggleScanner}   
/>

    <Header handleDisconnectButton={handleDisconnectButton}
            userName={userName}
            homeIcon
            onHome={()=>navigate('/')}
    />
    {modalMessage &&
      <Modal  
            onCancel={modalOnCancel}
            header={modalHeader}
            message={modalMessage}
            cancelLabel={cancelLabel}
            onConfirm={modalOnConfirm}
            confirmLabel={confirmLabel}
            colorConfirm='secondary'
            colorCancel='primary'
      />}

    <InputTextarea  label='Description du produit'
                    placeholder='Scanner un produit pour afficher sa description'
                    value=""
    />
      </div>

    </div>

  )
}

export default ExemplePage

// useEffect(()=>{
    

//   (async () => {
//     setIsLoading(true);

//     const jobs = [];

//     jobs.push(getStateReference().unwrap()
//     .then((res)=> setStateOption(res))
//     .catch((err)=>{console.log(err)}))

//     jobs.push(getPrioriryReference().unwrap()
//     .then((res)=> setPriorityOption(res))
//     .catch((err)=>{console.log(err)}))

//     await Promise.all(jobs)
//     setIsLoading(false);
    
//     setIsLoading(true);

//     try {
//     const [states, priorities] = await Promise.all([getStateReference().unwrap(), getPrioriryReference().unwrap()]);
//     setStateOption(states);
//     setPriorityOption(priorities);
//     } catch( err ) {
//       console.error(err);
//     }

//     setIsLoading(false);

//   })();


//   (async () => {
  
//     try
//     {
//       const response = await fetch('')
//       const json = await response.json()
//       const x = await Promise.all([])
//       console.info(`TRUC ${x} : ${json}`)
//     }
//     catch( ex )
//     {
//       console.error(`ERROR ${ex}`)
//     }

//   })();

//   (() => {
  
//     fetch('')
//     .then(response => response.json()
//     .then(json => Promise.all([])
//     .then(x => console.info(`TRUC ${x} : ${json}`))))
//     .catch(ex => console.error(`ERROR ${ex}`))

//   })()
 
// },[])
