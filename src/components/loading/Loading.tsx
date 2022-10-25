import React from 'react'
import styles from './loading.module.scss'
import { ReactComponent as  LogoMismo } from './logoMismo.svg'

export type LoadingProps = {
    /**
     * L'image du loading
     */
    Logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  }
  
  /**
   * Composant affichant une animation de chargement 
   * 
   * @param logo L'image du loading
   */
export function Loading ({Logo}:LoadingProps) {
    /**
   * Render
   */
    return (
        <>
            {Logo ? 
                <Logo className={styles.logo}/>
                :
                < LogoMismo className={styles.logo}/>
            }
        </>
    )
}