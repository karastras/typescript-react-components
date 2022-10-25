import React from 'react';
import {routes} from './routes'
import { useRoutes } from 'react-router-dom';
import logo from '../assets/img/logo.png'

function App() {
  const routing = useRoutes(routes)
  return (
    <div className='bg-color-septenary min-h-screen'>{routing}</div> 
  );
}

export default App;
