import { createSlice } from '@reduxjs/toolkit'

export const SearchInputValue = createSlice({
    name: 'resetSearchInput',
    initialState: {
        value: ''
    },
    reducers: {
        changeInputValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {  changeInputValue } = SearchInputValue.actions

export default SearchInputValue.reducer