import './App.css';
import Hero from './components/Hero';
import Cursor from "./components/shapes/Cursor"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FrontendSection from './components/FrontendSection';
import { createContext, useState } from 'react';


export const CursorContext = createContext();


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#091626",
        light: "#122843"
      },
      secondary: {
        main: "#F4F2D3",
      },
    },
  })

  const cursorState = useState(false)
  
  return (
    <CursorContext.Provider value={cursorState}>
      <Cursor />
      <ThemeProvider theme={theme}>
        <Hero />
        <FrontendSection />
      </ThemeProvider>
    </CursorContext.Provider>
  )
}

export default App;
