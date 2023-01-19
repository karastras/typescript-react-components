import React from "react"
import styles from './progressStepBar.module.scss'

interface Props {
    title?: string
    steps: {
        page: number
        onStep: boolean
        isValidated: boolean
    }[]
}

export const ProgressStepBar = ({
    title,
    steps
}: Props) => {

    return (
        <div className={styles.container}>
            {title && <h2 className={styles.titleSection}>{title}</h2>}
            <div className={styles.progress}>
                {steps.map((step, index) => {
                    return  <div className={styles.step} key={index}>
                                <div className={`${styles.circle} ${step.isValidated ? styles.validCircle : step.onStep ? styles.currentCircle : ''} ${step.isValidated ? styles.validIcon : styles.stepNumber}`} data-step={step.page}>
                                </div>
                                {(index !== (steps.length - 1)) &&
                                    <div className={styles.barContainer}>
                                        <div className={step.isValidated ? `${styles.bar} ${styles.validBar}` : step.onStep ? `${styles.bar} ${styles.currentBar}` : `${styles.bar}`}>
                                        </div>
                                    </div>
                                }
                            </div>
                })}
            </div>
        </div>
    )
}

export default ProgressStepBar