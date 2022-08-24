import { createGlobalStyle } from 'styled-components'
import { theme } from 'styled-tools'

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }

  body {
    font-family: ${theme('fonts.ibm')};
    text-rendering: optimizeLegibility;
    color: ${theme('colors.text')};
    background-color:${theme('colors.body')};
    
    -webkit-font-smoothing: antialiased; //Smooth the font on the level of the pixel, as opposed to the subpixel.
    -moz-osx-font-smoothing: grayscale; //Render text with grayscale antialiasing, as opposed to the subpixel
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
  }
  
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style:none;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
  }

  .pointer {
    cursor: pointer;
  }

  .no-scrollbar {
    -ms-overflow-style: none;  
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none;
    }
  }

  .primary-color {
    color: ${theme('colors.primary.300')};
  }

  .no-user-select {
    user-select: none;
  }

  .cyan-500 {
    color:${theme('colors.cyan.500')};
  }

  .gray-400 {
    color:${theme('colors.gray.400')};
  }

  .capitalize {
    text-transform: capitalize;
  }
`
