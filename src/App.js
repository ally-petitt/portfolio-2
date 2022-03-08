import './App.css';
import Hero from './components/Hero';
import Circle from "./components/shapes/Circle"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FrontendSection from './components/FrontendSection';


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

  return (
    <>
      <Circle />
      <ThemeProvider theme={theme}>
        <Hero />
        <FrontendSection />
      </ThemeProvider>
    </>
  )
}

export default App;
