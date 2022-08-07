import {
  FC,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'theme'

type Context = { theme: string; toggleTheme(): void }

const ThemeContext = createContext<Context | null>(null)

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) setTheme(storedTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((color) => {
      const theme = color === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', theme)
      return theme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
