import { createSlice } from '@reduxjs/toolkit'

export const Search = createSlice({
    name: 'search',
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
export const {  setToFalse, setToOposite } = Search.actions

export default Search.reducer