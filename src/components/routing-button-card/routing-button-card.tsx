import React from "react"
import {Link} from "react-router-dom"
import styles from "./routing-button-card.module.scss"

interface RouteType {
  path: string
  name?: string
  description?: string
  iconPath?: string
  element: JSX.Element
  children?: RouteType[]
  id? : string
}

export type RoutingButtonCardProps = {
/**
 * un object du tableau Routetype
 */
  route: RouteType
/**
 *  l'état du parent de la l'emplacement(adresse)
 */
  parentLocationState?: RouteType
/**
 *  affecte un style en fonction du contexte, soit menu, soit liste dans un des éléments du menu
 */
  linkStyle: "cardWithDetails" | "simpleBtn"
}

/**
 * Composant boutons de navigation, soit affichant le menu avec les icones et description, soit une liste de navigation une fois entré dans un élément du menu
 *
 * @param route un object du tableau Routetype
 * @param parentLocationState l'état du parent de la l'emplacement(adresse)
 * @param linkStyle affecte un style en fonction du contexte, soit menu, soit liste dans un des éléments du menu
 */
export function RoutingButtonCard ({route, parentLocationState, linkStyle }: RoutingButtonCardProps) {

  /**
    * Render
    */
  return (
    <Link to={route.path} className={styles[linkStyle]} state={{route: JSON.stringify(parentLocationState? parentLocationState : route)}}>
      {route.iconPath && <img width={40} src={route.iconPath} alt={route.name}/>}
      <div className={styles.container}>
        <div className={styles.title}>{route.name}</div>
        {route.description && <div className={styles.description}>{route.description}</div>}
      </div>
    </Link>
  )
}