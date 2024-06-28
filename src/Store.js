import { configureStore } from '@reduxjs/toolkit'
import expandSingleImage from './Slices/ExpandSingleImage'
import expandMultipleImage from './Slices/ExpandMultipleImage'
import language from './Slices/Language'
import search from './Slices/Search'
import visits from './Slices/Visits'

export default configureStore({
  reducer: {
    expandSingleImage: expandSingleImage,
    expandMultipleImage: expandMultipleImage,
    search: search,
    language: language,
    visits: visits
  }
})