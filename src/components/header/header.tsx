import React, { MouseEventHandler, useEffect, useState } from 'react'
import styles from './header.module.scss'
import { BiUser, BiWifi, BiWifiOff, BiPowerOff, BiHomeSmile} from "react-icons/bi"

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
    /**
    * Si à true affiche un icone utilisateur
    */
    userIcon?: boolean
    /**
    * Si à true affiche un icone home->Accueil
    */
    homeIcon?: boolean
    /**
    * Action sur le clique de l'icone Home
    */
    onHome?: MouseEventHandler<SVGElement>
}

/**
 * Composant affichant le nom de l'utilsiateur, l'état de connexion au réseau et le bouton de déconnexion
 * @param userName Nom du user à afficher
 * @param handleDisconnectButton Fonction après le click sur le bouton de déconnexion
 * @param userIcon Si à true affiche un icone utilisateur
 * @param homeIcon Si à true affiche un icone home->Accueil
 */
export function Header ({
  userName,
  handleDisconnectButton,
  userIcon,
  homeIcon,
  onHome
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
        {userIcon && <BiUser className={styles.leftIcon}/>}
        {homeIcon && <BiHomeSmile className={styles.leftIcon} onClick={onHome}/>}
        <p className={styles.username}>{userName}</p>
        <div className={styles.right}>
          {
            status ?
            <BiWifi className={styles.wifiOn}/> 
            :
            <BiWifiOff className={styles.wifiOff}/>
          }
          <BiPowerOff className={styles.bipower} onClick={handleDisconnectButton}/>
        </div>
    </div>
  )
}