import styles from './switchButton.module.scss'

interface Props{
  cursorPosition: boolean
  setCursorPosition: Function
  switchColor: string
  color: string
}

export const SwitchButton = ({cursorPosition , setCursorPosition, switchColor, color}: Props) => {
    return (
        <div className={`${styles.container} ${cursorPosition ? color : switchColor}`} onClick={()=>setCursorPosition(!cursorPosition)}>
          <div className={cursorPosition ? styles.circle : `${styles.circle} ${styles.switchedCircle}`}></div>
        </div>
    )
}