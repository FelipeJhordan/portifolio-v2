/* eslint-disable no-sequences */
import { useState } from 'react'
import { getData } from './data'
import MyContext from "./MyContext"

export const  MyProvider = ({
    children
}) => {
    const setLanguage = () => {
        if(currentLanguage === 'pt') {
            setLanguageData(getData(false))
            setCurrentLanguage('en')
        } else {
            setLanguageData(getData(true))
            setCurrentLanguage('pt')
        }
    }

        const [languageData, setLanguageData] = useState(getData(true))
        const [currentLanguage, setCurrentLanguage] = useState('pt')
    
    return (
        <MyContext.Provider value={{setLanguage, languageData, currentLanguage}}>
            {
                    children
            }
        </MyContext.Provider>
    )
}