import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface ExamplePageProps {
    validLast: boolean
}

const initialState: ExamplePageProps = {
    validLast: false,
}

export const examplePageSlice = createSlice({
    name: 'issueForm',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        validLastStep(state) {
            state.validLast =  true
        },
        resetValidLast(state) {
            state.validLast = false
        },
    },
})

export const {validLastStep, resetValidLast} = examplePageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectexamplePage = (state: RootState) => state.examplePage

export default examplePageSlice.reducer