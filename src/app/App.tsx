import React from 'react';
import {routes} from './routes'
import { useRoutes } from 'react-router-dom';

function App() {
  const routing = useRoutes(routes)
  return (
    <div className='bg-color-septenary'>{routing}</div> 
  );
}

export default App;
