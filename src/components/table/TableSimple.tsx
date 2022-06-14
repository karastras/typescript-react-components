import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { Column, useTable } from "react-table"
import styles from './table-simple.module.scss'

export type TableSimpleProps = {
    columns: ReadonlyArray<Column<any>>
    data: any[]
    updateMyData?: any
    removeData?: any
    reverse?: boolean
}

/**
 * Composant Tableau réaliser avec react-table de tannstack
 *
 * @param columns liste des colonnes
 * @param data données qui seront affichées dans le tableau
 * @param updateMyData fonction permettant d'éditer les valeur dans les cellules
 * @param removeData fonction permettant de supprimer une ligne
 */
export function TableSimple({
    columns,
    data,
    updateMyData,
    removeData,
    reverse
}: TableSimpleProps) {
    /**
     * Initilisation de la table
     */
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
        // @ts-ignore
        updateMyData,
        removeData
    }
    )

    return (
        <div className={styles.container}>
            <table className={styles.table} {...getTableProps()}>
                <thead className={styles.thead}>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} scope="col"
                                    className={styles.th} id={column.id} style={{ minWidth: column.minWidth }}>
                                    {column.render('header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                    reverse ? 
                        rows.slice(0).reverse().map((row, index) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} key={index}
                                    className={styles.tr}
                                >
                                    {row.cells.map(cell => (<td {...cell.getCellProps()}
                                        className={`${styles.td} ${cell.column.id === 'quantity' ? `${styles.tdquantity}` : ""}`}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                    ))}
                                </tr>
                            )
                        })
                        :
                        rows.map((row, index) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} key={index}
                                    className={styles.tr}
                                >
                                    {row.cells.map(cell => (<td {...cell.getCellProps()}
                                        className={`${styles.td} ${cell.column.id === 'quantity' ? `${styles.tdquantity}` : ""}`}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                    ))}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

/**
 * Formatter pour écrire dans une cellule
 *
 * @param initialValue valeur de base
 * @param index numero de ligne
 * @param id identifiant de la colonne
 * @param updateMyData fonction passée lors de l initilisation de la table
 */
export const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData,
}: any) => {
    const [value, setValue] = useState<string>(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        updateMyData(index, id, value)
    }

    /**
       * Handler pour changer le type d'input text a password ou inversement
       */
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => { e.target.select() }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <form onSubmit={(e)=> {
                e.preventDefault()
                if (document.activeElement instanceof HTMLElement) {document.activeElement.blur()}
            }}>
                <input type="number" min={0} max={100000} className={styles.input} value={value} onChange={onChange} onBlur={onBlur} onFocus={handleFocus} />
            </form>
}

/**
* Formatter pour permttre la suppression d'une ligne
*
* @param index index de ligne
* @param removeData function passer lors de l initilisation de la table
*/
export const RemoveItemCell = ({
    row: { index },
    removeData,
}: any) => {

    function onClick() {
        removeData(index)
    }

    return <div className={styles.bix}><BiX onClick={onClick} /></div>

}