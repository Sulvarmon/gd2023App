import { configureStore } from '@reduxjs/toolkit'
import language from './Slices/Language'
import search from './Slices/Search'
import visits from './Slices/Visits'
import languageData from './Slices/LanguageData'
import themeCookie from './Slices/ThemeCookie'
import languageCookie from './Slices/LanguageCookie'
import theme from './Slices/Theme'
import showCookieContainer from './Slices/ShowCookieContainer'
import searchInputValue from './Slices/SearchInputValue'

export default configureStore({
  reducer: {
    languageData: languageData,
    search: search,
    visits: visits,
    language: language,
    languageCookie: languageCookie,
    theme: theme,
    themeCookie: themeCookie,
    showCookieContainer: showCookieContainer,
    searchInputValue: searchInputValue,
  }
})