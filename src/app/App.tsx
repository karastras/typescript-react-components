import React from 'react';
import {routes} from './routes'
import { useNavigate, useRoutes } from 'react-router-dom';
import Burger from '../components/burger/Burger';

function App() {
  const routing = useRoutes(routes)
  const navigate = useNavigate()

  function handleDisconnectedButton() {
    navigate('/')
  }
  
  return (
    <div className='bg-color-septenary min-h-screen'>
      <Burger navObject={navObject} rightHand={false} handleDisconnectedButton={handleDisconnectedButton}/>
      {routing}
    </div> 
  );
}

export default App;

interface NavObject {
  label: string
  path: string
  children?: {
    label: string
    path: string
  }
}

export const navObject: NavObject[] = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "Page01",
    path: "/page01"
  },
  {
    label: "Page02",
    path: "/page02"
  },
  {
    label: "Formulaire",
    path: "/formulaire/etape-une",
  },
  {
    label: "Temporaire",
    path: "/temp-page",
  },
]
