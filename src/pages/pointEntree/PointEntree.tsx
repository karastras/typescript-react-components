import React from 'react'
import { Link } from 'react-router-dom'

const PointEntree = () => {
  return (
    <div className='text-center'>
      je suis point Entree
      <Link to='/exemplePage'>
        <button className='border-4 p-6 h-full font-bold ml-6 mt-6 bg-color-primary border-color-octonary rounded-full'>
          GO!
        </button>  
      </Link>
    </div>
  )
}

export default PointEntree