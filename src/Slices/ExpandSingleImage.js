import { createSlice } from '@reduxjs/toolkit'

export const ExpandSingleImage = createSlice({
    name: 'expandSingleImage',
    initialState: {
        value: false
    },
    reducers: {
        setToFalse: state => {
            state.value = false
        },
        setToOposite: state => {
            state.value = !state.value
        },
        
    }
})

// Action creators are generated for each case reducer function
export const {  setToFalse, setToOposite } = ExpandSingleImage.actions

export default ExpandSingleImage.reducer