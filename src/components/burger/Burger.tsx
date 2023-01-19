import React, { useEffect, useState } from 'react';
import { BiPowerOff } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import styles from './burger.module.scss';

interface Props {
  navObject: {
    label: string
    path: string
}[]
rightHand: boolean
handleDisconnectedButton?: Function
}

const Burger = ({navObject, rightHand, handleDisconnectedButton}:Props) => {

  const [openBurger, setOpenBurger] = useState(false)

  function toggle (){ 
    setOpenBurger(!openBurger) 
  }

  function closedBurger (){ 
    setOpenBurger(false) 
  }

  useEffect(() => {
    if (openBurger) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return ()=>{
      document.body.style.overflow = 'unset'
    }
  }, [openBurger]);

    return (
        <div >
          {rightHand ?
            <button className={ openBurger ? `${styles.button} ${styles.buttonOpen}` : `${styles.button} ${styles.buttonClose}`} onClick={toggle}>
              <div className={ openBurger ? `${styles.style} ${styles.open1}`  : styles.style}/> 
              <div className={ openBurger ? `${styles.style} ${styles.open2}`  : styles.style}/> 
              <div className={ openBurger ? `${styles.style} ${styles.open3}`  : styles.style}/>                    
            </ button >
          :
            <button className={ openBurger ? `${styles.button} ${styles.buttonOpen}` : `${styles.button} ${styles.buttonClose}`} onClick={toggle}>
                <div className={ openBurger ? `${styles.inverseStyle} ${styles.inverseOpen1}`  : styles.style}/> 
                <div className={ openBurger ? `${styles.inverseStyle} ${styles.inverseOpen2}`  : styles.style}/> 
                <div className={ openBurger ? `${styles.inverseStyle} ${styles.inverseOpen3}`  : styles.style}/>                    
            </ button >
          }
          <Nav open={openBurger} 
          closed={closedBurger} 
          item={navObject} 
          currentHand={rightHand} 
          handleDisconnectedButton={handleDisconnectedButton}
          />    
        </div>
    )
}

export default Burger


interface NavProps {
    open: boolean
    closed: Function
    item: {
        label: string
        path: string
    }[]
    handleDisconnectedButton?: Function
    currentHand: boolean
}

const Nav = ({ open, closed, item, currentHand, handleDisconnectedButton }: NavProps) => {

    return (
        <div className={currentHand ? `${open ? `${styles.container} ${styles.openContainer}` : `${styles.container} ${styles.closeContainer} `}` : `${open ? `${styles.inverseContainer} ${styles.inverseOpenContainer}` : `${styles.inverseContainer} ${styles.inverseCloseContainer}`}`}>
            <div className={styles.hiddenSection} onClick={() => closed()}></div>
            <ul className={currentHand ? styles.list : styles.inverseList }>
                {item.map((el, key) => {
                    return <li className={styles.element} key={key}>
                        <div >
                            <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to={el.path} onClick={() => closed()} end>
                                {el.label}
                            </NavLink>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                })}
                {handleDisconnectedButton && <li className={styles.logout}>
                    <div className={styles.content}>
                        <BiPowerOff className={styles.bipower} onClick={()=>handleDisconnectedButton()} size={30} />
                    </div>
                </li>}
            </ul>
        </div>
    )
}