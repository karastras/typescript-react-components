import React, { useEffect, useState} from "react";
import Downshift from "downshift";
import {IoIosArrowDropdown} from "react-icons/io";
import styles from "./input-combo.module.scss"
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type InputComboProps = {
  /**
   *  le libélé du champs
 */
  label: string
  /**
   *  la valeur sélectionné par défault
 */
  value: string
  /**
   *  liste des options
 */
  items: any[]
  /**
   *  fonction appeler lorsque une valeur est sélectionnée
 */
  onChange?: Function
  /**
   *  message qui s'affiche en cas d'erreur
 */
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  /**
   *  option qui désactive l'input-combo
 */
  disabled?: boolean
/**
   *  placeholder de l'input, peut être une string vide
 */
  placeholder: string
}

/**
 * Composant de liste déroulante réaliser avec la librairie import Downshift from downshift
 *
 * @param label le libélé du champs
 * @param value la valeur sélectionné par défault
 * @param items liste des options
 * @param onChange fonction appeler lorsque une valeur est sélectionnée
 * @param errorMessage message qui s'affiche en cas d'erreur
 * @param disabled option qui désactive l'input-combo
 */
export function InputCombo ({
                                 label,
                                 value,
                                 items,
                                 disabled = false,
                                 onChange,
                                 errorMessage,
                                 placeholder
                               }: InputComboProps) {
  // Parametre du composant ---------------------------------------------------------------------
  /**
   * Hook react
   */
  const [inputValue, setInputValue] = useState<{ name: string, value: string }>({name: "", value: ""})

  // use effect ---------------------------------------------------------------------------------
  /**
   * Hook pour réaffecter la valeur aprés un navigation
   */
  useEffect(() => {
    const itemFound = items.find((item) => item?.id === value)
    if (itemFound) {
      setInputValue({name: itemFound.name, value: itemFound.warehouseCode || itemFound.id})
    }
  }, [value, items])

  // HANDLER -------------------------------------------------------------------------------------------
  /**
   * Handler losque que l'état de la combo change
   * @param changes les changements d'état de la combo
   */
  function handleStateChange(changes: any) {
    if (changes.selectedItem) {
      setInputValue({name: changes.selectedItem.name, value: changes.selectedItem.warehouseCode ? changes.selectedItem.warehouseCode : changes.selectedItem.id})
     if(onChange) onChange(changes.selectedItem.warehouseCode ? changes.selectedItem.warehouseCode : changes.selectedItem.id)
    }
  }

  return (
    //@ts-ignore
    <Downshift
      onStateChange={handleStateChange}
      selectedItem={inputValue || {name: "", value: ""}}
      itemToString={item => (item ? item.name : "")}
    >
      {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getRootProps,
          getToggleButtonProps,
          getMenuProps,
          isOpen,
          inputValue,
          reset
        }) => (
        <div className={styles.comboContainer}>
          <label className={styles.comboLabel} {...getLabelProps()}>{label}</label>
          <div  {...getRootProps(undefined, {suppressRefError: true})}>
            <input type={"text"} className={styles.comboInput} {...getInputProps({
                placeholder: placeholder,
                onChange: reset
              })}/>
            <button className={isOpen ? styles.comboButtonOpened : styles.comboButtonClosed}
                    type="button"
                    {...getToggleButtonProps({disabled})}
                    aria-label={'toggle menu'}
            >
              <IoIosArrowDropdown size={40} color="gray"/>
            </button>
          </div>
          {isOpen &&
              <div {...getMenuProps()}
                   className={styles.comboDropdown}>
                {items
                  .filter(item => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase()))
                  .map((item, index) => (
                    <div {...getItemProps({key: index, item, index})}
                         className={styles.comboDropdowElement}>
                      <div className="flex-1">
                        <div className="text-base">{item.name}</div>
                      </div>
                      <div>
                        <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                          <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF"/>
                          <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF"/>
                          <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF"/>
                        </svg>
                      </div>
                    </div>
                  ))
                }
              </div>
          }
          <p className={styles.inputError}>{errorMessage}</p>
        </div>
      )}
    </Downshift>
  )
}