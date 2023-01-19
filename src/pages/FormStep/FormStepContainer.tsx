import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ProgressStepBar from '../../components/progress-step-bar/ProgressStepBar'

const FormStepContainer = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [ validLastStep, setValidLastStep] = useState<boolean>(false)
    

    const [stepArray, setIsStepArray] = useState<{ page: number, name: string, onStep: boolean, isValidated: boolean }[]>(
        [
            { page: 1, name: 'etape-une', onStep: false, isValidated: false },
            { page: 2, name: 'etape-deux', onStep: false, isValidated: false },
            { page: 3, name: 'etape-trois', onStep: false, isValidated: false }
        ]
    )

    useEffect(() => {
        let currentStepFound = false, isCurrent = false;
        const newState =
            stepArray.map((step, i) => {
                isCurrent = location.pathname.includes(step.name)
                currentStepFound ||= isCurrent
                return isCurrent
                    ? { ...step, onStep: true, isValidated: validLastStep && (i === stepArray.length - 1) }
                    : { ...step, onStep: false, isValidated: !currentStepFound }
            })
        if (!isCurrent) setValidLastStep(false)
        setIsStepArray(newState)
    }, [location.pathname, validLastStep])

    function previousStep () {
      if(location.pathname === '/formulaire/etape-une'){
            navigate('/page01')
          }  
      if(location.pathname === '/formulaire/etape-deux'){
        navigate('/formulaire/etape-une')
      }
      if(location.pathname === '/formulaire/etape-trois' && !validLastStep){
        navigate('/formulaire/etape-deux')
      }
      if(location.pathname === '/formulaire/etape-trois' && validLastStep){
        setValidLastStep(false)
      }
    }

    function nextStep () {
      if(location.pathname === '/formulaire/etape-une'){
        navigate('/formulaire/etape-deux')
      }
      if(location.pathname === '/formulaire/etape-deux'){
        navigate('/formulaire/etape-trois')
      }
      if(location.pathname === '/formulaire/etape-trois'){
        setValidLastStep(true)
      }
      if (validLastStep){
        navigate('/formulaire/etape-une')
        setValidLastStep(false)
      }
    }
  return (
    <div>
      <ProgressStepBar title='Exemple de titre' steps={stepArray}/>
      <div className='flex justify-around'>
        <button type='button' className='border-2 h-12 w-24 bg-green-400 text-white rounded-full px-2' onClick={()=>previousStep()}>Précédent</button>
        <button type='button' className='border-2 h-12 w-24 bg-blue-500 text-white rounded-full px-2' onClick={()=>nextStep()}>Suivant</button>
      </div>
    </div>
  )
}

export default FormStepContainer