import { configureStore } from '@reduxjs/toolkit'
import expandMultipleImage from './Slices/ExpandMultipleImage'
import language from './Slices/Language'
import search from './Slices/Search'
import visits from './Slices/Visits'
import languageData from './Slices/LanguageData'
import themeCookie from './Slices/ThemeCookie'
import languageCookie from './Slices/LanguageCookie'
import theme from './Slices/Theme'

export default configureStore({
  reducer: {
    languageData: languageData,
    expandMultipleImage: expandMultipleImage,
    search: search,
    visits: visits,    
    language: language,
    languageCookie: languageCookie,
    theme: theme,
    themeCookie: themeCookie,
  }
})