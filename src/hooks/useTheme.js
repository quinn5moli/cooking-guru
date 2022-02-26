import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    const context = useContext(ThemeContext)

    return context
}