import React from 'react'
import { Loading } from '../../components/loading/Loading'
import { ReactComponent as logo } from '../../assets/img/logoMismo.svg'

const Next = () => {
  return (
    <div>
        <Loading Logo={logo} />
        <form >

        <input type="number" step='0.001' />
        </form>
        {/* pattern='^\d+(?:[\.,]\d{0,3})?$' */}
    </div>
  )
}

export default Next