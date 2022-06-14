import React, { MouseEventHandler, useEffect, useState } from 'react'
import styles from './header.module.scss'
import { BiUser, BiWifi, BiWifiOff, BiPowerOff} from "react-icons/bi"

const getOnLineStatus = () =>
  typeof navigator !== 'undefined'
  ? navigator.onLine
    : true

export type HeaderProps = {
   /**
   * Nom du user à afficher
   */
    userName: string
    /**
    * Fonction après le click sur le bouton de déconnexion
    */
    handleDisconnectButton: MouseEventHandler<SVGElement>
}

/**
 * Composant affichant le nom de l'utilsiateur, l'état de connexion au réseau et le bouton de déconnexion
 * @param userName Nom du user à afficher
 * @param handleDisconnectButton Fonction après le click sur le bouton de déconnexion
 */
export function Header ({
  userName,
  handleDisconnectButton,
}: HeaderProps) {

  // Parametre du composant ---------------------------------------------------------------------
  /**
   * Hook d'état local
   */
  const [status, setStatus] = useState(getOnLineStatus())
  
  // Use Effect ---------------------------------------------------------------------------------------
  /**
   * Hook pour gérer le mode online/offline
   */
  useEffect(() => {
    window.addEventListener('online', setOnline)
    window.addEventListener('offline', setOffline)
    
    return () => {
      window.removeEventListener('online', setOnline)
      window.removeEventListener('offline', setOffline)
    }
  }, [])
  
  // Function---------------------------------------------------------------------------------------------
  /**
   * Action en cas de reconnexion
   */
  function setOnline() {
    setStatus(true)
  }
  
  /**
   * Action en cas de perte de connexion
   */
  function setOffline() {
    setStatus(false)
  }

  /**
   * Render
   */
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <BiUser className={styles.biUser}/>
          <p className={styles.username}>{userName}</p>
          {
            status ?
              <BiWifi className={styles.wifiOn}/> 
              :
              <BiWifiOff className={styles.wifiOff}/>
          }
        </div>
        <BiPowerOff className={styles.bipower} onClick={handleDisconnectButton}/>
    </div>
  )
}